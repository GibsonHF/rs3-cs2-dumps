//
function script14989(): void {
    if ((script6431() == 0)) {
        return;
    };
    if ((varclient_6791 == false)) {
        varclient_6515 = 0;
        IF_SETONTIMER(callback(), comp(1477, 918));  // toplevel_v2:interface_zoom_under_attack_righttop
        IF_SETHIDE(true, comp(1477, 918));  // toplevel_v2:interface_zoom_under_attack_righttop
        return;
    } else if (((varbitplayer_1899 == 0) && (varbitplayer_27003 == 0))) {
        varclient_6515 = 0;
        IF_SETONTIMER(callback(), comp(1477, 918));  // toplevel_v2:interface_zoom_under_attack_righttop
        IF_SETHIDE(true, comp(1477, 918));  // toplevel_v2:interface_zoom_under_attack_righttop
        return;
    };
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    if ((varclient_6515 == 1)) {
        [int0, int1, int2, int3] = VIEWPORT_GETBOUNDS();
        if ((varclient_6403 == 0)) {
            int2 = IF_GETWIDTH(comp(1477, 27));  // toplevel_v2:background_colour
            int3 = IF_GETHEIGHT(comp(1477, 27));  // toplevel_v2:background_colour
        };
        IF_SETSIZE(int2, int3, 0, 0, comp(1477, 918));  // toplevel_v2:interface_zoom_under_attack_righttop
        IF_SETPOSITION(int0, int1, 0, 0, comp(1477, 918));  // toplevel_v2:interface_zoom_under_attack_righttop
        return;
    };
    varclient_6515 = 1;
    if ((IF_FIND(comp(1477, 919)) == 1)) {  // toplevel_v2:interface_zoom_under_attack_leftbottom
        CC_SETTRANS(255);
    };
    if ((IF_FIND(comp(1477, 920)) == 1)) {  // toplevel_v2:interface_zoom_under_attack_rightbottom
        CC_SETTRANS(255);
    };
    if ((IF_FIND(comp(1477, 921)) == 1)) {  // toplevel_v2:tooltips_layer
        CC_SETTRANS(255);
    };
    if ((IF_FIND(comp(1477, 922)) == 1)) {  // toplevel_v2:tooltips_param_layer
        CC_SETTRANS(255);
    };
    IF_SETHIDE(false, comp(1477, 918));  // toplevel_v2:interface_zoom_under_attack_righttop
    IF_SETONTIMER(callback(script5708, 96797590, 0), comp(1477, 918));  // toplevel_v2:interface_zoom_under_attack_righttop
    return;
}