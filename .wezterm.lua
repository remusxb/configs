local wezterm = require("wezterm")
local config = wezterm.config_builder()
local act = wezterm.action

-------------- Font --------------
-- Note: FiraMono Nerd Font ships only Regular / Medium / Bold, so DemiBold
-- resolves to FiraMonoNerdFont-Bold.otf. "Medium" is the real middle weight.
config.font = wezterm.font_with_fallback({
	{ family = "FiraMono Nerd Font", weight = "DemiBold" },
	{ family = "JetBrains Mono", weight = "DemiBold" },
	{ family = "Menlo", weight = "DemiBold" },
	{ family = "Consolas", weight = "DemiBold" },
	{ family = "monospace", weight = "DemiBold" },
})
config.font_size = 18
config.line_height = 1.1

-------------- Font Rasterization --------------
-- WezTerm rasterizes with FreeType (macOS-native apps use CoreText), so the
-- defaults look softer here than in Ghostty/Terminal.app. "Light" hints glyphs
-- vertically to the pixel grid but leaves them unhinted horizontally: crisper
-- stems without distorting letter shapes. Matters most on non-Retina displays.
config.freetype_load_target = "Light"
-- Subpixel (RGB) antialiasing would be a further jump in sharpness on the 1x
-- external monitor, but it needs an opaque background to blend against. If you
-- ever drop window_background_opacity to 1.0, add:
config.freetype_render_target = "HorizontalLcd"
-- On the built-in Retina display alone, freetype_load_flags = "NO_HINTING"
-- gives the most macOS-native look (softer, but no grid-fitting distortion).

-------------- Window Size --------------
config.initial_cols = 150
config.initial_rows = 35

-------------- Appearance --------------
config.color_scheme = "Ashes (dark) (terminal.sexy)"
config.window_background_opacity = 1
config.macos_window_background_blur = 7

-------------- Performance / Refresh Rate --------------
-- WezTerm defaults to the OpenGL front end, which macOS deprecated and now
-- emulates on top of Metal. "WebGpu" targets Metal directly: better frame
-- pacing and noticeably smoother scrolling. If it ever misrenders, the
-- fallback is config.front_end = "OpenGL".
config.front_end = "WebGpu"

-- Render up to 120 fps (default is 60). Use this on a 120Hz display.
config.max_fps = 120
config.animation_fps = 120

-------------- Cursor --------------
config.default_cursor_style = "SteadyBlock"
config.cursor_blink_rate = 0

-------------- macOS Option Key --------------
config.send_composed_key_when_left_alt_is_pressed = false
config.send_composed_key_when_right_alt_is_pressed = false

-------------- Scrollback --------------
config.scrollback_lines = 10000
config.enable_scroll_bar = false

-------------- Window Title --------------
wezterm.on("format-window-title", function(tab, pane, tabs, panes, cfg)
	return tab.active_pane.title
end)

-------------- Tab Bar --------------
config.use_fancy_tab_bar = false
config.hide_tab_bar_if_only_one_tab = true
config.tab_bar_at_bottom = true
config.tab_max_width = 40

local CAP_LEFT = wezterm.nerdfonts.ple_lower_right_triangle
local CAP_RIGHT = wezterm.nerdfonts.ple_upper_left_triangle
local BAR_BG = "#1c2023"

-------------- Tab Title --------------
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

-------------- Window --------------
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

-------------- Bell --------------
config.audible_bell = "Disabled"
config.visual_bell = {
	fade_in_duration_ms = 0,
	fade_out_duration_ms = 0,
}

-------------- Terminal --------------
config.term = "xterm-256color"
config.enable_csi_u_key_encoding = true

-------------- Mouse --------------
local is_mac = wezterm.target_triple:find("darwin") ~= nil
-- CMD on macOS, CTRL elsewhere.
local LINK_MOD = is_mac and "CMD" or "CTRL"

-- Hold this modifier + drag to select text in apps that grabbed the mouse
-- (nvim, tmux, k9s). macOS convention is CMD; everywhere else it's SHIFT.
config.bypass_mouse_reporting_modifiers = is_mac and "CMD" or "SHIFT"

-- Don't eat the click that focuses the window: on macOS WezTerm defaults to
-- swallowing it, so the first click on an unfocused window only raises it and
-- links/selection need a second click.
config.swallow_mouse_click_on_window_focus = false
config.swallow_mouse_click_on_pane_focus = false

config.mouse_bindings = {
	-- Plain left click only ever completes a selection -- never opens a link,
	-- so click-dragging over a URL to copy it can't accidentally launch it.
	{
		event = { Up = { streak = 1, button = "Left" } },
		mods = "NONE",
		action = act.CompleteSelection("ClipboardAndPrimarySelection"),
	},
	-- Same for shift-click / shift-alt-click, which extend a selection: by
	-- default those also open links when the resulting selection is empty.
	{
		event = { Up = { streak = 1, button = "Left" } },
		mods = "SHIFT",
		action = act.CompleteSelection("ClipboardAndPrimarySelection"),
	},
	{
		event = { Up = { streak = 1, button = "Left" } },
		mods = "SHIFT|ALT",
		action = act.CompleteSelection("PrimarySelection"),
	},
	-- CMD/CTRL + click opens the link under the cursor.
	{
		event = { Up = { streak = 1, button = "Left" } },
		mods = LINK_MOD,
		action = act.OpenLinkAtMouseCursor,
	},
	-- Same, but while a TUI has mouse reporting enabled.
	{
		event = { Up = { streak = 1, button = "Left" } },
		mods = LINK_MOD,
		mouse_reporting = true,
		action = act.OpenLinkAtMouseCursor,
	},
	-- Swallow the matching press there so the app underneath doesn't also
	-- receive the click. (Left alone outside mouse reporting, so CMD+drag
	-- still moves the window.)
	{
		event = { Down = { streak = 1, button = "Left" } },
		mods = LINK_MOD,
		mouse_reporting = true,
		action = act.Nop,
	},
}

-------------- Keys --------------
config.keys = {
	-- Line navigation (Ctrl+A / Ctrl+E / Ctrl+U)
	{ key = "LeftArrow", mods = "CMD", action = act.SendString("\x01") },
	{ key = "RightArrow", mods = "CMD", action = act.SendString("\x05") },
	{ key = "Backspace", mods = "CMD", action = act.SendString("\x15") },

	-- Window maximize / restore
	{ key = "UpArrow", mods = "OPT", action = wezterm.action_callback(function(window)
		window:maximize()
	end) },
	{ key = "DownArrow", mods = "OPT", action = wezterm.action_callback(function(window)
		window:restore()
	end) },

	-- Tab switching: CMD+1..9 (CMD+9 = last tab)
	{ key = "1", mods = "CMD", action = act.ActivateTab(0) },
	{ key = "2", mods = "CMD", action = act.ActivateTab(1) },
	{ key = "3", mods = "CMD", action = act.ActivateTab(2) },
	{ key = "4", mods = "CMD", action = act.ActivateTab(3) },
	{ key = "5", mods = "CMD", action = act.ActivateTab(4) },
	{ key = "6", mods = "CMD", action = act.ActivateTab(5) },
	{ key = "7", mods = "CMD", action = act.ActivateTab(6) },
	{ key = "8", mods = "CMD", action = act.ActivateTab(7) },
	{ key = "9", mods = "CMD", action = act.ActivateTab(-1) },

	-- Split panes: CMD+D horizontal, CMD+Shift+D vertical
	{ key = "d", mods = "CMD", action = act.SplitHorizontal({ domain = "CurrentPaneDomain" }) },
	{ key = "d", mods = "CMD|SHIFT", action = act.SplitVertical({ domain = "CurrentPaneDomain" }) },

	-- Pane navigation: CMD+[ prev, CMD+] next
	{ key = "[", mods = "CMD", action = act.ActivatePaneDirection("Prev") },
	{ key = "]", mods = "CMD", action = act.ActivatePaneDirection("Next") },

	-- Close pane (closes tab if last pane)
	{ key = "w", mods = "CMD", action = act.CloseCurrentPane({ confirm = true }) },

	-- Pane resize: CMD+Shift+Arrow
	{ key = "LeftArrow", mods = "CMD|SHIFT", action = act.AdjustPaneSize({ "Left", 3 }) },
	{ key = "RightArrow", mods = "CMD|SHIFT", action = act.AdjustPaneSize({ "Right", 3 }) },
	{ key = "UpArrow", mods = "CMD|SHIFT", action = act.AdjustPaneSize({ "Up", 3 }) },
	{ key = "DownArrow", mods = "CMD|SHIFT", action = act.AdjustPaneSize({ "Down", 3 }) },
}

return config
