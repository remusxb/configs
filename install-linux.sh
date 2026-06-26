#!/usr/bin/env bash
#
# install-linux.sh — set up this terminal/editor environment on Debian/Ubuntu.
#
# Installs apt build deps + Homebrew (Linuxbrew) and all CLI tools, WezTerm
# (native apt repo), the FiraMono Nerd Font, Docker, Oh My Zsh + plugins,
# nvm + Node, delve, Claude Code, copies the dotfiles into place, and registers
# the NvimEdit "open in WezTerm+Neovim" desktop entry.
#
# Targets Debian/Ubuntu (uses apt). Safe to re-run.
#
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
export REPO_DIR
# shellcheck source=install-lib.sh
source "$REPO_DIR/install-lib.sh"

if [ "$(uname -s)" != "Linux" ]; then
  err "This is the Linux installer. On macOS run ./install-mac.sh"
  exit 1
fi
if ! have apt-get; then
  err "This installer targets Debian/Ubuntu (apt). For other distros, install the tools listed in dependencies.md by hand."
  exit 1
fi

# ---------- apt prerequisites (brew build deps, font + desktop tooling) ----------
log "Installing apt prerequisites"
sudo apt-get update
sudo apt-get install -y \
  build-essential procps curl file git unzip ca-certificates gnupg \
  fontconfig desktop-file-utils xdg-utils zsh

# ---------- Homebrew (Linuxbrew) ----------
if ! have brew; then
  log "Installing Homebrew (Linuxbrew)"
  NONINTERACTIVE=1 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

# ---------- WezTerm (official apt repo) ----------
if have wezterm; then
  ok "wezterm already present"
else
  log "Installing WezTerm (apt.fury.io)"
  curl -fsSL https://apt.fury.io/wez/gpg.key | sudo gpg --yes --dearmor -o /usr/share/keyrings/wezterm-fury.gpg
  sudo chmod 644 /usr/share/keyrings/wezterm-fury.gpg
  echo 'deb [signed-by=/usr/share/keyrings/wezterm-fury.gpg] https://apt.fury.io/wez/ * *' \
    | sudo tee /etc/apt/sources.list.d/wezterm.list >/dev/null
  sudo apt-get update
  sudo apt-get install -y wezterm
fi

# ---------- FiraMono Nerd Font ----------
if fc-list 2>/dev/null | grep -qi "FiraMono Nerd Font"; then
  ok "FiraMono Nerd Font already installed"
else
  log "Installing FiraMono Nerd Font"
  font_dir="$HOME/.local/share/fonts/FiraMono"
  tmp="$(mktemp -d)"
  curl -fL -o "$tmp/FiraMono.zip" \
    https://github.com/ryanoasis/nerd-fonts/releases/latest/download/FiraMono.zip
  mkdir -p "$font_dir"
  unzip -o "$tmp/FiraMono.zip" -d "$font_dir" >/dev/null
  rm -rf "$tmp"
  fc-cache -f "$HOME/.local/share/fonts" >/dev/null
fi

# ---------- Docker + compose ----------
if have docker; then
  ok "docker already present"
else
  log "Installing Docker (get.docker.com)"
  curl -fsSL https://get.docker.com | sh
  sudo usermod -aG docker "$USER"
  warn "Added you to the 'docker' group — log out/in (or run 'newgrp docker') to use docker without sudo."
fi

# ---------- CLI tools + shell + runtimes ----------
ensure_brew_clis
setup_omz
setup_nvm
install_go_tools
install_claude

# ---------- Dotfiles ----------
copy_configs

# ---------- NvimEdit desktop entry (open files in WezTerm + Neovim) ----------
log "Installing NvimEdit desktop entry"
( cd "$REPO_DIR" && ./nvimedit-linux-install.sh )

# ---------- Make zsh the default shell ----------
if [ "${SHELL##*/}" != "zsh" ] && have zsh; then
  warn "Your login shell isn't zsh. Set it with: chsh -s \"$(command -v zsh)\""
fi

log "Done."
echo
ok "Log out/in (for the docker group + default shell) or run 'exec zsh' to load everything."
