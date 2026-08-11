//
function script14989(): void {
    if ((script6431() == 0)) {
        return;
    };
    if ((varclient_6791 == false)) {
        varclient_6515 = 0;
        IF_SETONTIMER(callback(), comp(1477, 904));  // toplevel_v2:interface_zoom_under_attack_display
        IF_SETHIDE(true, comp(1477, 904));  // toplevel_v2:interface_zoom_under_attack_display
        return;
    } else if (((varbitplayer_1899 == 0) && (varbitplayer_27003 == 0))) {
        varclient_6515 = 0;
        IF_SETONTIMER(callback(), comp(1477, 904));  // toplevel_v2:interface_zoom_under_attack_display
        IF_SETHIDE(true, comp(1477, 904));  // toplevel_v2:interface_zoom_under_attack_display
        return;
    };
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    if ((varclient_6515 == 1)) {
        [int0, int1, int2, int3] = VIEWPORT_GETBOUNDS();
        if ((varclient_6403 == 0)) {
            int2 = IF_GETWIDTH(comp(1477, 26));  // toplevel_v2:background_colour
            int3 = IF_GETHEIGHT(comp(1477, 26));  // toplevel_v2:background_colour
        };
        IF_SETSIZE(int2, int3, 0, 0, comp(1477, 904));  // toplevel_v2:interface_zoom_under_attack_display
        IF_SETPOSITION(int0, int1, 0, 0, comp(1477, 904));  // toplevel_v2:interface_zoom_under_attack_display
        return;
    };
    varclient_6515 = 1;
    if ((IF_FIND(comp(1477, 905)) == 1)) {  // toplevel_v2:interface_zoom_under_attack_lefttop
        CC_SETTRANS(255);
    };
    if ((IF_FIND(comp(1477, 906)) == 1)) {  // toplevel_v2:interface_zoom_under_attack_righttop
        CC_SETTRANS(255);
    };
    if ((IF_FIND(comp(1477, 907)) == 1)) {  // toplevel_v2:interface_zoom_under_attack_leftbottom
        CC_SETTRANS(255);
    };
    if ((IF_FIND(comp(1477, 908)) == 1)) {  // toplevel_v2:interface_zoom_under_attack_rightbottom
        CC_SETTRANS(255);
    };
    IF_SETHIDE(false, comp(1477, 904));  // toplevel_v2:interface_zoom_under_attack_display
    IF_SETONTIMER(callback(script5708, 96797576, 0), comp(1477, 904));  // toplevel_v2:interface_zoom_under_attack_display
    return;
}