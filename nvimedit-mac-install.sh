#!/bin/bash
set -e

APP_SRC="NvimEdit.app"
APP_DEST="$HOME/Applications/NvimEdit.app"
BUNDLE_ID="com.custom.nvimedit"

if [ ! -d "$APP_SRC" ]; then
    echo "Error: $APP_SRC not found in current directory"
    exit 1
fi

if ! command -v duti &>/dev/null; then
    echo "Installing duti (sets default apps per file type)..."
    brew install duti
fi

echo "Installing NvimEdit.app to ~/Applications..."
mkdir -p "$HOME/Applications"
rm -rf "$APP_DEST"
cp -r "$APP_SRC" "$APP_DEST"
/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -f "$APP_DEST"

EXTENSIONS=(
    yaml yml json jsonc
    toml conf cfg ini env
    txt md markdown log
    go py ts tsx js jsx svelte
    rs java kt kts
    sh zsh bash lua
    xml html css sql
    mod sum
)

echo "Setting NvimEdit as default for ${#EXTENSIONS[@]} extensions..."
for ext in "${EXTENSIONS[@]}"; do
    duti -s "$BUNDLE_ID" ".$ext" all 2>/dev/null && echo "  .$ext" || echo "  .$ext (skipped)"
done

echo "Done."
