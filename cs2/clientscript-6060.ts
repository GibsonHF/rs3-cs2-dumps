//
function script6060(int0: number): void {
    var int1 = false;
    if ((int0 == 255)) {
        int1 = true;
    };
    IF_SETTRANS(int0, comp(137, 2));  // chatdefault:mobile_listener_graphic
    var int2 = (IF_GETNEXTSUBID(comp(137, 86)) - 1);  // chatdefault:scrollarea
    while ((int2 >= 0)) {
        if ((CC_FIND(comp(137, 86), int2) == 1)) {  // chatdefault:scrollarea
            CC_SETTRANS(int0);
            CC_SETHIDE(int1);
        };
        int2 = (int2 - 1);
    };
    IF_SETHIDE(int1, comp(137, 86));  // chatdefault:scrollarea
    int2 = (IF_GETNEXTSUBID(comp(137, 87)) - 1);  // chatdefault:scrollbar
    while ((int2 >= 0)) {
        if ((CC_FIND(comp(137, 87), int2) == 1)) {  // chatdefault:scrollbar
            CC_SETTRANS(int0);
            CC_SETHIDE(int1);
        };
        int2 = (int2 - 1);
    };
    if ((int1 == true)) {
        IF_SETNOCLICKTHROUGH(0, comp(1477, 418));  // toplevel_v2:chat_window
        IF_SETNOCLICKTHROUGH(0, comp(137, 87));  // chatdefault:scrollbar
        script3415(1, 96797095);
    } else {
        IF_SETNOCLICKTHROUGH(1, comp(137, 87));  // chatdefault:scrollbar
        script1850(18, varbitplayer_20188);
    };
    IF_SETHIDE(int1, comp(137, 85));  // chatdefault:mobile_render_background
    return;
}