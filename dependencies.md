# Terminal Setup Dependencies

## One-command install

```bash
./install-mac.sh      # macOS
./install-linux.sh    # Debian/Ubuntu
```

Each script installs every dependency below, copies the config files into place
(backing up anything it would overwrite), and registers the **NvimEdit** app via
`nvimedit-mac-install.sh` / `nvimedit-linux-install.sh`. Both share `install-lib.sh`
and are safe to re-run — installed tools are skipped.

On Linux, CLI tools come from Homebrew (Linuxbrew) for one code path across both
OSes; WezTerm, the font, and Docker are installed natively.

## What gets installed

### Terminal & shell
| Name | What it is |
|------|------------|
| **WezTerm** | GPU-accelerated terminal emulator with Lua config, splits, tabs |
| **FiraMono Nerd Font** | Monospace font patched with icons (git, k8s, python, etc.) |
| **Oh My Zsh** | Zsh framework — plugins, themes |
| **zsh-autosuggestions** | Ghost-text command suggestions from history |
| **zsh-syntax-highlighting** | Colors valid/invalid commands as you type |
| **oh-my-posh** | Cross-shell prompt (git status, k8s context, venv) |
| **fzf** | Fuzzy finder — Ctrl+R history, Ctrl+T files, Alt+C dirs, the `proj`/`gbf`/`glf` helpers |
| **fd** | Fast `find` replacement — backs fzf's file/dir search |

### Neovim & its runtime deps
| Name | What it is |
|------|------------|
| **Neovim** | The editor |
| **ripgrep** | fzf-lua live grep |
| **tree-sitter CLI** | Compiles treesitter parsers |
| **C compiler + make** | Build treesitter parsers (Xcode CLT on macOS, `build-essential` on Linux) |
| **Node.js + npm** (via **nvm**) | Mason's JS language servers (prettier, ts/svelte/yaml/docker/json/markdownlint) |
| **Go** | Mason's gopls/gofumpt/goimports-reviser/gomodifytags **+** delve |
| **Python 3 + pip** | Mason's python-lsp-server, gitlint; the `jsonclip` alias |
| **delve (dlv)** | Go debugger for nvim-dap-go |

> Language servers, formatters, and linters are installed **inside Neovim by Mason**
> (`:Mason`) — they only need the runtimes above on `PATH`.

### Kubernetes
| Name | What it is |
|------|------------|
| **kubectl** | The `kedit` function + `KUBECONFIG` setup in `.zshrc` |
| **kubectx / kubens** | Context / namespace switching |
| **k9s** | Cluster TUI |
| **flux** | FluxCD CLI |
| **helm** | Chart tooling (also backs the helm-ls LSP) |
| **kustomize** | Kustomization tooling |

### Containers
| Name | What it is |
|------|------------|
| **Docker + docker compose** | The `dcu`/`dce`/`dcd` aliases, `dlogs`/`dsh` helpers (Docker Desktop on macOS, Docker Engine on Linux) |

### Extras
| Name | What it is |
|------|------------|
| **Claude Code** (`claude`) | The `clai` alias |

## Config files

| File | Install to |
|------|------------|
| `.zshrc` | `~/.zshrc` |
| `.wezterm.lua` | `~/.wezterm.lua` |
| `custom.omp.json` | `~/.config/oh-my-posh/custom.omp.json` |
| `custom.zsh` | `~/.oh-my-zsh/custom/custom.zsh` |

## Manual prerequisites (only if installing by hand)

Install [Homebrew](https://brew.sh) (macOS and Linux):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

On Linux, install build tools first: `sudo apt install build-essential procps curl file git`
