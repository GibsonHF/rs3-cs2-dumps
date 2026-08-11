//
function script5708(int0: number, int1: number): void {
    if ((CLIENTCLOCK() < int1)) {
        return;
    };
    if ((varclient_6791 == false)) {
        varclient_6515 = 0;
        IF_SETONTIMER(callback(), int0);
        IF_SETHIDE(true, comp(1477, 904));  // toplevel_v2:interface_zoom_under_attack_display
        return;
    } else if (((varbitplayer_1899 == 0) && (varbitplayer_27003 == 0))) {
        varclient_6515 = 0;
        IF_SETONTIMER(callback(), int0);
        IF_SETHIDE(true, comp(1477, 904));  // toplevel_v2:interface_zoom_under_attack_display
        return;
    };
    var int2 = 126;
    var int3 = SCALE(varplayer_13537, script2915(), 100);
    if ((int3 < 10)) {
        int2 = 51;
    } else if ((int3 < 25)) {
        int2 = 76;
    } else if ((int3 < 50)) {
        int2 = 101;
    };
    var int1 = (CLIENTCLOCK() + int2);
    if ((IF_FIND(comp(1477, 905)) == 1)) {  // toplevel_v2:interface_zoom_under_attack_lefttop
        CC_SETONTIMER(callback(script5709, -2147483645, 0));
    };
    if ((IF_FIND(comp(1477, 906)) == 1)) {  // toplevel_v2:interface_zoom_under_attack_righttop
        CC_SETONTIMER(callback(script5709, -2147483645, 0));
    };
    if ((IF_FIND(comp(1477, 907)) == 1)) {  // toplevel_v2:interface_zoom_under_attack_leftbottom
        CC_SETONTIMER(callback(script5709, -2147483645, 0));
    };
    if ((IF_FIND(comp(1477, 908)) == 1)) {  // toplevel_v2:interface_zoom_under_attack_rightbottom
        CC_SETONTIMER(callback(script5709, -2147483645, 0));
    };
    IF_SETONTIMER(callback(script5708, int0, int1), int0);
    return;
}