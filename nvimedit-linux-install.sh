#!/bin/bash
set -e

DESKTOP_FILE="nvimedit.desktop"
INSTALL_DIR="$HOME/.local/share/applications"

mkdir -p "$INSTALL_DIR"
cp "$DESKTOP_FILE" "$INSTALL_DIR/"
echo "Installed $DESKTOP_FILE to $INSTALL_DIR"

MIME_TYPES=(
    text/yaml
    application/x-yaml
    application/json
    text/plain
    text/markdown
    text/x-python
    text/x-go
    text/javascript
    text/typescript
    text/x-java
    text/x-kotlin
    text/x-rust
    text/x-svelte
    text/x-lua
    text/x-shellscript
    text/html
    text/css
    text/xml
    application/sql
    application/toml
)

for mime in "${MIME_TYPES[@]}"; do
    xdg-mime default "$DESKTOP_FILE" "$mime"
done

update-desktop-database "$INSTALL_DIR" 2>/dev/null || true

echo "Done. NvimEdit is now the default for ${#MIME_TYPES[@]} file types."
