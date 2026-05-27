#!/bin/zsh
export HOME="/Users/remus_glai"
export XDG_CONFIG_HOME="$HOME/.config"
export PATH="/opt/homebrew/bin:$PATH"

if [ $# -gt 0 ]; then
    DIR="$(dirname "$1")"
    cd "$DIR"
    /opt/homebrew/bin/wezterm start -- /opt/homebrew/bin/nvim "$@"
else
    /opt/homebrew/bin/wezterm start -- /opt/homebrew/bin/nvim
fi
