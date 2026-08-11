//
function script20729(): void {
    if (((IF_GETWIDTH(comp(1512, 9) /*house_furniture_catalogue:mainmodal_window_content*/) == 0) || (CC_FIND(comp(1512, 19) /*house_furniture_catalogue:mainmodal_window_border*/, 0) == 0))) {
        IF_SETONTIMER(callback(script20729), comp(1512, 9));  // house_furniture_catalogue:mainmodal_window_content
        return;
    };
    varclient_8423 = varplayer_12904;
    varclient_8424 = varplayer_12905;
    varclient_8425 = varplayer_12906;
    varclient_8429 = 2;
    var int0 = SCALE(IF_GETWIDTH(comp(1477, 26)), 100, 33);  // toplevel_v2:background_colour
    var int1 = script20789(int0, 0, 1);
    if ((script6431() == 0)) {
        IF_SETSIZE(int1, SCALE(16384, 100, 66), 0, 2, comp(1512, 7));  // house_furniture_catalogue:mainmodal_window
    } else {
        IF_SETSIZE(int1, MAX(470, SCALE(IF_GETHEIGHT(comp(1477, 26) /*toplevel_v2:background_colour*/), 100, 66)), 0, 0, comp(1512, 7) /*house_furniture_catalogue:mainmodal_window*/);
    };
    script20742(int1);
    script20738();
    IF_SETONTIMER(callback(), comp(1512, 9));  // house_furniture_catalogue:mainmodal_window_content
    script20790(99090441, 99090452, 99090444, 99090442, 99090453, 99090443, 99090454, -1, -1, 0);
    script20791(99090442);
    script20801(99090443, varbitclient_61226, varbitclient_61227, 99090446, 99090450, 99090447, 99090448, 99090449, -1);
    script20806(99090446, 99090450, 99090447, 99090448, 99090449, varbitclient_61228, -1, 1);
    if ((CC_FIND(comp(1512, 19), 7) == 1)) {  // house_furniture_catalogue:mainmodal_window_border
        CC_SETMOUSEOVERCURSOR(191);
        CC_SETDRAGRENDERBEHAVIOUR(3);
        CC_SETDRAGGABLE(comp(1477, 27), -1);  // toplevel_v2:viewport
        CC_SETDRAGDEADTIME(1);
        CC_SETDRAGDEADZONE(1);
        CC_SETONDRAG(callback(script20739, -2147483645, -2147483643, int1, -1, 0));
        CC_SETONDRAGCOMPLETE(callback(script20739, -2147483645, -2147483643, int1, -1, 1));
    };
    script8841(106, 1);
    return;
}