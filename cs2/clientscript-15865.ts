//
function script15865(): void {
    var int0 = comp(858, 14);  // mobile_chat_panel_settings:left_settings_build_wrapper
    var int1 = comp(858, 15);  // mobile_chat_panel_settings:left_settings_build
    var int2 = comp(858, 16);  // mobile_chat_panel_settings:left_settings_click
    var int3 = comp(858, 17);  // mobile_chat_panel_settings:left_settings_scrollbar
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    IF_SETSCROLLPOS(0, 0, int0);
    IF_SETSCROLLSIZE(0, 0, int0);
    script9525(int1, 0, -1);
    return;
}