#!/usr/bin/env bash
#
# install-mac.sh — set up this terminal/editor environment on macOS.
#
# Installs Homebrew + all CLI tools, WezTerm, the Nerd Font, Docker Desktop,
# Oh My Zsh + plugins, nvm + Node, delve, Claude Code, copies the dotfiles into
# place, and registers the NvimEdit "open in WezTerm+Neovim" app.
#
# Safe to re-run: every step is guarded and existing config files are backed up.
#
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
export REPO_DIR
# shellcheck source=install-lib.sh
source "$REPO_DIR/install-lib.sh"

if [ "$(uname -s)" != "Darwin" ]; then
  err "This is the macOS installer. On Linux run ./install-linux.sh"
  exit 1
fi

# ---------- Xcode Command Line Tools (cc/make for treesitter parsers) ----------
if ! xcode-select -p >/dev/null 2>&1; then
  log "Installing Xcode Command Line Tools (a GUI prompt may appear — finish it, then re-run this script)"
  xcode-select --install || true
fi

# ---------- Homebrew ----------
if ! have brew; then
  log "Installing Homebrew"
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi
if [ -x /opt/homebrew/bin/brew ]; then
  eval "$(/opt/homebrew/bin/brew shellenv)"
elif [ -x /usr/local/bin/brew ]; then
  eval "$(/usr/local/bin/brew shellenv)"
fi

# ---------- GUI apps + font (casks) ----------
log "Installing WezTerm + FiraMono Nerd Font"
brew install --cask wezterm font-fira-mono-nerd-font

log "Installing Docker Desktop"
if [ -d "/Applications/Docker.app" ] || have docker; then
  ok "Docker already present"
else
  brew install --cask docker
fi

# ---------- CLI tools + shell + runtimes ----------
ensure_brew_clis
setup_omz
setup_nvm
install_go_tools
install_claude

# ---------- Dotfiles ----------
copy_configs

# ---------- NvimEdit app (open files in WezTerm + Neovim) ----------
log "Installing NvimEdit app"
( cd "$REPO_DIR" && ./nvimedit-mac-install.sh )

log "Done."
echo
ok  "Open a new WezTerm window (or run 'exec zsh') to load everything."
warn "Docker Desktop must be launched once from /Applications to start its daemon."
