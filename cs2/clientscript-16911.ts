//
function script16911(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = script16916(int1);
    var int5 = script16917(int1);
    var int6 = script16916(int2);
    var int7 = script16917(int2);
    if (((int0 < 50) || (int3 == 1))) {
        IF_SETPARAM_INT(8704, int2, comp(907, 69));  // lobbyscreen_pane_playerinfo:rotator_buttons
        IF_SETTRANS((255 - SCALE(int0, 50, 255)), int7);
        if ((int1 != -1)) {
            IF_SETTRANS(SCALE(int0, 50, 255), int5);
        };
        if (((IF_GETTRANS(int7) >= 128) || (int3 == 1))) {
            if ((int1 != -1)) {
                IF_SETHIDE(true, int4);
            };
            IF_SETHIDE(false, int6);
            script16905(int2);
        };
        if ((int3 == 0)) {
            IF_SETONTIMER(callback(script16910, (int0 + 1), int1, int2), comp(907, 4));  // lobbyscreen_pane_playerinfo:latest_update_layer
            return;
        };
    };
    script16908(1);
    IF_SETONTIMER(callback(), comp(907, 4));  // lobbyscreen_pane_playerinfo:latest_update_layer
    IF_SETONTIMER(callback(script16909, int2, 0), comp(907, 2));  // lobbyscreen_pane_playerinfo:promo_layer
    return;
}