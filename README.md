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

## NvimEdit — Open files in WezTerm + Neovim from your file manager

A lightweight app/desktop entry that opens files directly in a WezTerm window running Neovim. Double-click a `.yaml`, `.json`, `.py`, `.go`, etc. from Finder (macOS) or Nautilus (Linux) and it opens in your terminal editor with the correct working directory.

### Supported extensions

`yaml` `yml` `json` `jsonc` `toml` `conf` `cfg` `ini` `env` `txt` `md` `markdown` `log` `go` `mod` `sum` `py` `ts` `tsx` `js` `jsx` `svelte` `rs` `java` `kt` `kts` `sh` `zsh` `bash` `lua` `xml` `html` `css` `sql`

### macOS

Files: `NvimEdit.app`, `nvim-edit.applescript`, `nvim-edit-launcher.sh`

Run the install script to copy the app to `~/Applications` and set it as the default for all supported extensions (uses [duti](https://github.com/moretension/duti), installed automatically via Homebrew):

```bash
./nvimedit-mac-install.sh
```

To set it as default for a single extension manually: right-click a file in Finder → Get Info → "Open with" → select **NvimEdit** → **Change All**.

### Linux (Ubuntu/Debian)

Files: `nvimedit.desktop`, `nvimedit-linux-install.sh`

Run the install script to install the desktop entry and register it as the default for all supported MIME types:

```bash
./nvimedit-linux-install.sh
```

Requires `wezterm` and `nvim` on your `PATH`.

## Setup from scratch

See [`dependencies.md`](dependencies.md) for Homebrew/Oh My Zsh installs.
