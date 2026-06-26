#!/usr/bin/env bash
# Shared helpers for install-mac.sh and install-linux.sh.
# This file is sourced, not executed directly. It assumes:
#   - REPO_DIR points at this repo (the source-of-truth dotfiles)
#   - `brew` is already on PATH (the OS scripts bootstrap it first)

# ---------- logging ----------
c_blue=$'\033[34m'; c_green=$'\033[32m'; c_yellow=$'\033[33m'; c_red=$'\033[31m'; c_reset=$'\033[0m'
log()  { printf '%s==>%s %s\n'   "$c_blue"   "$c_reset" "$*"; }
ok()   { printf '%s  ✓%s %s\n'   "$c_green"  "$c_reset" "$*"; }
warn() { printf '%s  !%s %s\n'   "$c_yellow" "$c_reset" "$*"; }
err()  { printf '%s  ✗%s %s\n'   "$c_red"    "$c_reset" "$*" >&2; }
have() { command -v "$1" >/dev/null 2>&1; }

# ---------- Homebrew CLI tools (identical list on macOS and Linux) ----------
# formula <formula> [check-binary]
# Skips if the binary already exists, or the formula is already installed.
formula() {
  local f="$1" bin="${2:-}"
  if [ -n "$bin" ] && have "$bin"; then ok "$bin already present"; return; fi
  if brew list "${f##*/}" >/dev/null 2>&1; then ok "$f already installed"; return; fi
  log "installing $f"
  brew install "$f"
}

ensure_brew_clis() {
  log "Installing CLI tools via Homebrew"
  # --- terminal / editor core ---
  formula fzf                                          fzf
  formula fd                                           fd
  formula ripgrep                                      rg
  formula neovim                                       nvim
  formula tree-sitter                                  tree-sitter
  formula jandedobbeleer/oh-my-posh/oh-my-posh         oh-my-posh
  # --- languages (node comes from nvm, not brew) ---
  formula go                                           go
  have python3 || formula python python3
  # --- kubernetes ---
  formula kubernetes-cli                               kubectl
  formula kubectx                                      kubectx
  formula k9s                                          k9s
  formula fluxcd/tap/flux                              flux
  formula helm                                         helm
  formula kustomize                                    kustomize
}

# ---------- Oh My Zsh + plugins ----------
setup_omz() {
  log "Setting up Oh My Zsh + plugins"
  if [ ! -d "$HOME/.oh-my-zsh" ]; then
    RUNZSH=no KEEP_ZSHRC=yes sh -c \
      "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended
  else
    ok "oh-my-zsh already installed"
  fi
  local custom="${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}"
  if [ ! -d "$custom/plugins/zsh-autosuggestions" ]; then
    git clone --depth=1 https://github.com/zsh-users/zsh-autosuggestions "$custom/plugins/zsh-autosuggestions"
  else ok "zsh-autosuggestions already installed"; fi
  if [ ! -d "$custom/plugins/zsh-syntax-highlighting" ]; then
    git clone --depth=1 https://github.com/zsh-users/zsh-syntax-highlighting "$custom/plugins/zsh-syntax-highlighting"
  else ok "zsh-syntax-highlighting already installed"; fi
}

# ---------- nvm + a current Node LTS (Mason's JS language servers need Node) ----------
setup_nvm() {
  log "Setting up nvm + Node LTS"
  if [ ! -d "$HOME/.nvm" ]; then
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
  else
    ok "nvm already installed"
  fi
  export NVM_DIR="$HOME/.nvm"
  if [ -s "$NVM_DIR/nvm.sh" ]; then
    set +u            # nvm.sh references unset vars; don't let `set -u` abort us
    # shellcheck disable=SC1091
    . "$NVM_DIR/nvm.sh"
    if command -v nvm >/dev/null 2>&1; then
      if [ "$(nvm version node 2>/dev/null)" = "N/A" ]; then
        nvm install --lts || warn "nvm install failed (run 'nvm install --lts' later)"
      else
        ok "Node $(nvm version node) already installed via nvm"
      fi
    fi
    set -u
  else
    warn "nvm not loaded; skipping Node install (open a new shell and run: nvm install --lts)"
  fi
}

# ---------- Go tools ----------
install_go_tools() {
  log "Installing Go tools (delve debugger for nvim-dap)"
  if have dlv; then ok "dlv already present"; return; fi
  if have go; then
    go install github.com/go-delve/delve/cmd/dlv@latest
  else
    warn "go not found; skipping delve"
  fi
}

# ---------- Claude Code ----------
install_claude() {
  log "Installing Claude Code"
  if have claude; then ok "claude already present"; return; fi
  curl -fsSL https://claude.ai/install.sh | bash || warn "claude install failed (install manually later)"
}

# ---------- Dotfiles ----------
# backup_and_copy <src> <dest> : copies src->dest, backing up an existing,
# differing dest to dest.bak.<timestamp> first.
backup_and_copy() {
  local src="$1" dest="$2"
  if [ -e "$dest" ] && ! cmp -s "$src" "$dest"; then
    local bak="$dest.bak.$(date +%Y%m%d%H%M%S)"
    cp "$dest" "$bak"
    warn "backed up existing $dest -> $bak"
  fi
  cp "$src" "$dest"
  ok "$dest"
}

# k9s_config_dir : prints the k9s config dir for this OS.
# Honors $K9S_CONFIG_DIR; macOS uses ~/Library/Application Support/k9s,
# Linux uses $XDG_CONFIG_HOME/k9s (default ~/.config/k9s).
k9s_config_dir() {
  if [ -n "${K9S_CONFIG_DIR:-}" ]; then
    printf '%s' "$K9S_CONFIG_DIR"
  elif [ "$(uname -s)" = "Darwin" ]; then
    printf '%s' "$HOME/Library/Application Support/k9s"
  else
    printf '%s' "${XDG_CONFIG_HOME:-$HOME/.config}/k9s"
  fi
}

# install_k9s_skin : copy the ashes skin into the per-OS k9s dir and activate it
# by ensuring `k9s.ui.skin: ashes` in config.yaml (without clobbering other keys).
install_k9s_skin() {
  local dir cfg
  dir="$(k9s_config_dir)"
  mkdir -p "$dir/skins"
  backup_and_copy "$REPO_DIR/k9s/skins/ashes.yaml" "$dir/skins/ashes.yaml"

  cfg="$dir/config.yaml"
  if [ ! -f "$cfg" ]; then
    printf 'k9s:\n  ui:\n    skin: ashes\n' >"$cfg"
    ok "created $cfg (skin: ashes)"
  elif grep -qE '^[[:space:]]+skin:[[:space:]]+ashes[[:space:]]*$' "$cfg"; then
    ok "k9s skin already 'ashes'"
  elif grep -qE '^[[:space:]]+skin:[[:space:]]' "$cfg"; then
    sed -i.bak -E 's/^([[:space:]]+skin:[[:space:]]+).*/\1ashes/' "$cfg" && rm -f "$cfg.bak"
    ok "set k9s skin -> ashes"
  elif grep -qE '^[[:space:]]*ui:[[:space:]]*$' "$cfg"; then
    awk '{ print } !d && /^[[:space:]]*ui:[[:space:]]*$/ { print "    skin: ashes"; d=1 }' \
      "$cfg" >"$cfg.tmp" && mv "$cfg.tmp" "$cfg"
    ok "added k9s skin -> ashes"
  else
    warn "no ui: block in $cfg — add 'skin: ashes' under k9s.ui manually"
  fi
}

copy_configs() {
  log "Installing config files"
  backup_and_copy "$REPO_DIR/.zshrc"        "$HOME/.zshrc"
  backup_and_copy "$REPO_DIR/.wezterm.lua"  "$HOME/.wezterm.lua"
  mkdir -p "$HOME/.config/oh-my-posh"
  backup_and_copy "$REPO_DIR/custom.omp.json" "$HOME/.config/oh-my-posh/custom.omp.json"
  mkdir -p "$HOME/.oh-my-zsh/custom"
  backup_and_copy "$REPO_DIR/custom.zsh"      "$HOME/.oh-my-zsh/custom/custom.zsh"
  install_k9s_skin
}
