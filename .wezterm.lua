local wezterm = require("wezterm")
local config = wezterm.config_builder()

-- Font
config.font = wezterm.font("Cousine Nerd Font Propo", { weight = "Bold" })
config.font_size = 18
config.line_height = 1.1

-- Window size
config.initial_cols = 150
config.initial_rows = 35

-- Appearance
config.color_scheme = "Ashes (dark) (terminal.sexy)"
config.window_background_opacity = 0.93
config.macos_window_background_blur = 7

-- Cursor
config.default_cursor_style = "SteadyBlock"

-- macOS Option key sends Esc+ (terminal Alt/Meta, not composed characters)
config.send_composed_key_when_left_alt_is_pressed = false
config.send_composed_key_when_right_alt_is_pressed = false

-- Scrollback
config.scrollback_lines = 10000
config.enable_scroll_bar = false

-- Tab bar
config.use_fancy_tab_bar = false
config.hide_tab_bar_if_only_one_tab = true
config.tab_bar_at_bottom = true
config.tab_max_width = 40

local CAP_LEFT = wezterm.nerdfonts.ple_lower_right_triangle
local CAP_RIGHT = wezterm.nerdfonts.ple_upper_left_triangle
local BAR_BG = "#1c2023"

wezterm.on("format-tab-title", function(tab, tabs, panes, cfg, hover, max_width)
	local pane = tab.active_pane
	local title = pane.title
	local cwd = pane.current_working_dir
	if cwd then
		local path = cwd.file_path or tostring(cwd)
		title = path:match("([^/]+)/?$") or path
	end
	if title and #title > max_width - 4 then
		title = wezterm.truncate_right(title, max_width - 6) .. "…"
	end

	local bg = "#272b2e"
	local fg = "#747c84"
	if tab.is_active then
		bg = "#414950"
		fg = "#c7ccd1"
	elseif hover then
		bg = "#333840"
		fg = "#adb3ba"
	end

	local overlap = ""
	if tab.tab_index > 0 then
		overlap = ""
	end

	return {
		{ Background = { Color = BAR_BG } },
		{ Text = overlap },
		{ Foreground = { Color = bg } },
		{ Background = { Color = BAR_BG } },
		{ Text = CAP_LEFT },
		{ Background = { Color = bg } },
		{ Foreground = { Color = fg } },
		{ Attribute = { Intensity = tab.is_active and "Bold" or "Normal" } },
		{ Text = " " .. (tab.tab_index + 1) .. ": " .. title .. " " },
		{ Foreground = { Color = bg } },
		{ Background = { Color = BAR_BG } },
		{ Text = CAP_RIGHT },
	}
end)

-- Window
config.window_decorations = "TITLE | RESIZE"
config.window_frame = {
	border_left_width = "0.2cell",
	border_right_width = "0.2cell",
	border_bottom_height = "0.1cell",
	border_top_height = "0.1cell",
	border_left_color = "#333333",
	border_right_color = "#333333",
	border_bottom_color = "#333333",
	border_top_color = "#333333",
}
config.window_close_confirmation = "AlwaysPrompt"
config.window_padding = {
	left = 0,
	right = 8,
	top = 8,
	bottom = 0,
}

-- Bell
config.audible_bell = "Disabled"
config.visual_bell = {
	fade_in_duration_ms = 0,
	fade_out_duration_ms = 0,
}

-- Terminal
config.term = "xterm-256color"
config.enable_csi_u_key_encoding = true

-- Keys & Mouse
local act = wezterm.action

config.mouse_bindings = {
	{
		event = { Up = { streak = 1, button = "Left" } },
		mods = "CMD",
		action = act.OpenLinkAtMouseCursor,
	},
}
config.keys = {
	{ key = "LeftArrow", mods = "CMD", action = act.SendString("\x01") },
	{ key = "RightArrow", mods = "CMD", action = act.SendString("\x05") },
	{ key = "Backspace", mods = "CMD", action = act.SendString("\x15") },
	{ key = "UpArrow", mods = "OPT", action = wezterm.action_callback(function(window)
		window:maximize()
	end) },
	{ key = "DownArrow", mods = "OPT", action = wezterm.action_callback(function(window)
		window:restore()
	end) },
}

return config
