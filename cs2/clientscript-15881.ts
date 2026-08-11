//
function script15881(): void {
    if ((IF_GETHIDE(comp(276, 27)) == true)) {  // toplevel_v2_mobile:chat_panel
        IF_SETTEXT(`[${enum_getvalue(0, 36, 10679 as cs2enum, script655(18))}]`, comp(137, 72));  // chatdefault:mobile_channel_text
        IF_SETSIZE((IF_GETWIDTH(comp(137, 71) /*chatdefault:mobile_channel_graphic*/) + STRINGWIDTH(IF_GETTEXT(comp(137, 72) /*chatdefault:mobile_channel_text*/), IF_GETFONTMETRICS(comp(137, 72) /*chatdefault:mobile_channel_text*/))), 0, 0, 1, comp(137, 70) /*chatdefault:mobile_channel_name*/);
        IF_SETSIZE(IF_GETWIDTH(comp(137, 70) /*chatdefault:mobile_channel_name*/), 0, 1, 1, comp(137, 76) /*chatdefault:inputarea*/);
        IF_SETHIDE(true, comp(137, 69));  // chatdefault:divider_graphic
        IF_SETHIDE(false, comp(137, 70));  // chatdefault:mobile_channel_name
    } else {
        IF_SETHIDE(false, comp(137, 69));  // chatdefault:divider_graphic
        IF_SETHIDE(false, comp(137, 67));  // chatdefault:player_input_wrapper
        IF_SETSIZE(0, 0, 1, 1, comp(137, 76));  // chatdefault:inputarea
        IF_SETHIDE(true, comp(137, 70));  // chatdefault:mobile_channel_name
    };
    return;
}