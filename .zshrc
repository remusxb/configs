############## Oh My Zsh ##############
export ZSH="$HOME/.oh-my-zsh"
ZSH_THEME="robbyrussell"
DISABLE_AUTO_TITLE="true"

############## Homebrew ##############
# macOS (Apple Silicon /opt/homebrew or Intel /usr/local) and Linux (Linuxbrew).
if [ -x /opt/homebrew/bin/brew ]; then
        eval "$(/opt/homebrew/bin/brew shellenv)"
elif [ -x /usr/local/bin/brew ]; then
        eval "$(/usr/local/bin/brew shellenv)"
elif [ -x /home/linuxbrew/.linuxbrew/bin/brew ]; then
        eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
fi

plugins=(
        brew
        git
        zsh-autosuggestions
        zsh-syntax-highlighting
)

source $ZSH/oh-my-zsh.sh

############## Key Bindings ##############
bindkey "^[[1;3D" backward-word
bindkey "^[[1;3C" forward-word

############## Editor ##############
if [[ -n $SSH_CONNECTION ]]; then
  export EDITOR='vim'
else
  export EDITOR='nvim'
fi

############## Aliases ##############
alias python='python3'
alias pip='pip3'
alias vim='nvim'

alias dcu="docker compose up"
alias dce="docker compose exec"
alias dcd="docker compose down"
alias dcr="docker compose restart"
alias gcout="git checkout"
alias gac="git add . && git commit -m"
alias gplo="git pull origin"
alias ca="cursor-agent"
alias clai="claude"

############## Oh My Posh ##############
eval "$(oh-my-posh init zsh --config ~/.config/oh-my-posh/custom.omp.json)"

############## PATH ##############
export PATH="$PATH:$(go env GOPATH)/bin"
export PATH="$HOME/.local/bin:$PATH"

############## NVM ##############
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

############## Python ##############
export PATH="$PATH:/Users/remus_glai/Library/Python/3.13/bin"

# Disable npm package telemetry (Scarf, etc.)
export SCARF_ANALYTICS=false
export DO_NOT_TRACK=1

############# kubectx #############
export KUBECONFIG=$(find "$HOME/.kube/configs" \
	-mindepth 1 -maxdepth 1 -type f \
    | sort \
    | tr '\n' ':')
export KUBECONFIG=${KUBECONFIG%:}
