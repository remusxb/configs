# Terminal Setup Dependencies

## Prerequisites

Install [Homebrew](https://brew.sh) (works on macOS and Linux):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

On Linux, install build tools first: `sudo apt install build-essential procps curl file git`

## Install Everything

```bash
brew install --cask wezterm font-fira-mono-nerd-font
brew install fzf fd oh-my-posh
```

Then install Oh My Zsh and plugins:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

## What Each Thing Does

| Name | What it is |
|------|------------|
| **WezTerm** | GPU-accelerated terminal emulator with Lua config, splits, tabs |
| **FiraMono Nerd Font** | Monospace font patched with icons (git, k8s, python, etc.) |
| **fzf** | Fuzzy finder — powers Ctrl+R history, Ctrl+T file search, Alt+C dir jump |
| **fd** | Fast `find` replacement — used by fzf for file/dir search |
| **oh-my-posh** | Cross-shell prompt engine — shows git status, k8s context, python venv |
| **Oh My Zsh** | Zsh framework — plugin manager, themes, shell enhancements |
| **zsh-autosuggestions** | Suggests commands as you type based on history (ghost text) |
| **zsh-syntax-highlighting** | Colors valid/invalid commands as you type |

## Config Files

| File | Install to |
|------|------------|
| `.wezterm.lua` | `~/.wezterm.lua` |
| `.zshrc` | `~/.zshrc` |
| `custom.omp.json` | `~/.config/oh-my-posh/custom.omp.json` |
| `custom.zsh` | `~/.oh-my-zsh/custom/custom.zsh` |
