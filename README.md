# configs

Personal terminal setup: WezTerm + Zsh (Oh My Zsh) + Oh My Posh.

This repo is the **source of truth**. Files here are copied (not symlinked) to their install locations, so changes don't take effect until you copy them over.

## File → install location

| Repo file          | Lives at                              | Loaded by                                                                 |
|--------------------|---------------------------------------|---------------------------------------------------------------------------|
| `.zshrc`           | `~/.zshrc`                            | zsh on shell start                                                        |
| `.wezterm.lua`     | `~/.wezterm.lua`                      | WezTerm on launch                                                         |
| `custom.omp.json`  | `~/.config/oh-my-posh/custom.omp.json`| Oh My Posh (via `oh-my-posh init zsh --config …` in `.zshrc`)             |
| `custom.zsh`       | `~/.oh-my-zsh/custom/custom.zsh`      | Oh My Zsh auto-sources any `*.zsh` file in `~/.oh-my-zsh/custom/`         |

`custom.zsh` doesn't need to be referenced from `.zshrc` — Oh My Zsh picks it up automatically.

## Sync

After editing a file in this repo, copy it to its install location:

```bash
cp .zshrc          ~/.zshrc
cp .wezterm.lua    ~/.wezterm.lua
cp custom.omp.json ~/.config/oh-my-posh/custom.omp.json
cp custom.zsh      ~/.oh-my-zsh/custom/custom.zsh
```

Then `exec zsh` (or restart WezTerm) to pick up changes.

## Setup from scratch

See [`dependencies.md`](dependencies.md) for Homebrew/Oh My Zsh installs.
