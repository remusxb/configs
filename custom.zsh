############## Terminal Flow Control ##############
stty -ixon -ixoff 2>/dev/null
bindkey -r '^S' 2>/dev/null

############## OSC 7: Report CWD to WezTerm ##############
# Tells WezTerm the current working directory so new tabs/splits open here.
__wezterm_osc7() {
  printf '\e]7;file://%s%s\e\\' "${HOST}" "${PWD}"
}
autoload -Uz add-zsh-hook
add-zsh-hook chpwd __wezterm_osc7
__wezterm_osc7

############## FZF ##############
if command -v fzf &>/dev/null; then
  export FZF_DEFAULT_OPTS="
    --height=40% --layout=reverse --border=rounded
    --color=bg+:#333840,fg+:#c7ccd1,hl:#ae95c7,hl+:#ae95c7
    --color=info:#95aec7,prompt:#c7ae95,pointer:#c795ae,marker:#aec795
    --color=border:#414950,header:#747c84
    --bind='ctrl-d:half-page-down,ctrl-u:half-page-up'
  "

  export FZF_CTRL_R_OPTS="--prompt='history ❯ '"

  if command -v fd &>/dev/null; then
    export FZF_DEFAULT_COMMAND="fd --type f --hidden --follow --exclude .git"
    export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"
    export FZF_ALT_C_COMMAND="fd --type d --hidden --follow --exclude .git"
  fi
  export FZF_CTRL_T_OPTS="--prompt='file ❯ ' --preview='head -80 {}'"
  export FZF_ALT_C_OPTS="--prompt='cd ❯ ' --preview='ls -1 --color=always {}'"

  source <(fzf --zsh 2>/dev/null) || {
    [ -f ~/.fzf.zsh ] && source ~/.fzf.zsh
  }
fi

############## Project Quick-Nav ##############
# Jump into a project under ~/Work. With no arg, fuzzy-pick from ~/Work/* and ~/Work/*/*.
proj() {
  local base="$HOME/Work"
  if [[ $# -eq 1 ]]; then
    cd "$base/$1" 2>/dev/null || echo "not found: $base/$1"
    return
  fi
  if command -v fzf &>/dev/null; then
    local dir
    dir=$( (
      for d in "$base"/*(N/); do
        print -r -- "${d#$base/}"
        for sub in "$d"/*(N/); do
          print -r -- "${sub#$base/}"
        done
      done
    ) | fzf --prompt="project ❯ " --preview="ls -1 --color=always $base/{}")
    [[ -n "$dir" ]] && cd "$base/$dir"
  else
    echo "usage: proj <name>"
    ls -1 "$base"
  fi
}

############## Git + FZF Helpers ##############
if command -v fzf &>/dev/null; then
  # Fuzzy-pick a git branch (local or remote, newest first) and check it out.
  gbf() {
    local branch
    branch=$(git branch --all --sort=-committerdate --format='%(refname:short)' 2>/dev/null |
      fzf --prompt="branch ❯ " --preview="git log --oneline -15 {}")
    [[ -n "$branch" ]] && git checkout "${branch#origin/}"
  }

  # Fuzzy-browse recent commits; preview shows --stat, Enter opens full diff in less.
  glf() {
    git log --oneline --color=always --decorate -50 |
      fzf --ansi --no-sort --prompt="commit ❯ " \
        --preview="echo {} | cut -d' ' -f1 | xargs git show --stat --color=always" \
        --bind="enter:execute(echo {} | cut -d' ' -f1 | xargs git show --color=always | less -R)"
  }

  # Fuzzy-pick a stash and apply / pop / drop it interactively.
  gsf() {
    local stash
    stash=$(git stash list --color=always 2>/dev/null |
      fzf --ansi --prompt="stash ❯ " \
        --preview="echo {} | cut -d: -f1 | xargs git stash show -p --color=always" |
      cut -d: -f1)
    if [[ -n "$stash" ]]; then
      echo "apply / pop / drop? [a/p/d] "
      read -r action
      case "$action" in
        a) git stash apply "$stash" ;;
        p) git stash pop "$stash" ;;
        d) git stash drop "$stash" ;;
        *) echo "cancelled" ;;
      esac
    fi
  }
fi

############## Docker Helpers ##############
# Tail the last 100 lines and follow logs for the given compose service(s).
dlogs() { docker compose logs -f --tail=100 "${@}" ; }
# Exec into a compose service with bash if available, else sh.
dsh()   { docker compose exec "${1:?container required}" sh -c "bash 2>/dev/null || sh" ; }

############## Utility Functions ##############
# mkdir -p then cd into it.
mkcd() { mkdir -p "$1" && cd "$1" ; }
# Show which process is listening on a given port.
port() { lsof -i :"${1:?port required}" ; }

# Retry a command up to N times with a delay between attempts. Usage: retry 5 2 curl …
retry() {
  local n="${1:?times}" delay="${2:-1}" ; shift 2
  for i in $(seq 1 "$n"); do
    "$@" && return 0
    echo "attempt $i/$n failed, retrying in ${delay}s..."
    sleep "$delay"
  done
  return 1
}

# Pretty-print JSON currently on the macOS clipboard.
jsonclip() { pbpaste | python3 -m json.tool ; }
