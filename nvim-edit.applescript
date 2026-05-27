on open theFiles
    set fileArgs to ""
    repeat with f in theFiles
        set fileArgs to fileArgs & " " & quoted form of POSIX path of f
    end repeat

    set launcher to quoted form of (POSIX path of (path to me) & "Contents/Resources/nvim-edit-launcher.sh")
    do shell script "/bin/zsh " & launcher & fileArgs & " &"
end open

on run
    set launcher to quoted form of (POSIX path of (path to me) & "Contents/Resources/nvim-edit-launcher.sh")
    do shell script "/bin/zsh " & launcher & " &"
end run
