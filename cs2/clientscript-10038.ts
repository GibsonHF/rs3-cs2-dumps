//
function script10038(int0: number, int1: number, int2: number): void {
    var int3 = comp(-1, 65535);
    var int4 = -1;
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = -1;
    var int8 = -1;
    switch (int0) {
        case 0: {
            int8 = 13088;
            break;
        }
        case 1: {
            int8 = 13087;
            break;
        }
        case 2: {
            int8 = 13089;
            break;
        }
        default: {
            script12478("Unexpected slot type when setting the secondary slots in the lobby.");
            return;
        }
    };
    if ((int2 == -1)) {
        switch (int0) {
            case 0: {
                int8 = 13088;
                break;
            }
            case 1: {
                int8 = 13087;
                break;
            }
            case 2: {
                int8 = 13089;
                break;
            }
            default: {
                script12478("Unexpected slot type when setting the secondary slots in the lobby.");
                return;
            }
        };
        if ((script18461(int8) == 1)) {
            script18464(int8);
        } else {
            if ((CC_FIND(dbrow_getfield(int8, 733184, 0), 0) == 1)) {
                CC_DELETE();
            };
            script10038(int0, 0, 0);
        };
        script10051();
        return;
    };
    switch (int0) {
        case 0: {
            IF_SETONVARCTRANSMIT(callback(script10037, 0, varclient_4263, 4263, 1), comp(907, 71));  // lobbyscreen_pane_playerinfo:bottom_left
            int3 = comp(907, 78);  // lobbyscreen_pane_playerinfo:bottom_left_graphic
            int4 = 59441224;
            int5 = comp(907, 95);  // lobbyscreen_pane_playerinfo:bottom_left_overlay_layer
            int6 = comp(907, 96);  // lobbyscreen_pane_playerinfo:bottom_left_highlight_layer
            int7 = 2;
            break;
        }
        case 1: {
            IF_SETONVARCTRANSMIT(callback(script10037, 1, varclient_4264, 4264, 1), comp(907, 44));  // lobbyscreen_pane_playerinfo:bottom_centre
            int3 = comp(907, 50);  // lobbyscreen_pane_playerinfo:bottom_centre_graphic
            int4 = 59441197;
            int5 = comp(907, 67);  // lobbyscreen_pane_playerinfo:bottom_centre_overlay_layer
            int6 = comp(907, 68);  // lobbyscreen_pane_playerinfo:bottom_centre_highlight_layer
            break;
        }
        case 2: {
            IF_SETONVARCTRANSMIT(callback(script10037, 2, varclient_4265, 4265, 1), comp(907, 97));  // lobbyscreen_pane_playerinfo:bottom_right
            int3 = comp(907, 104);  // lobbyscreen_pane_playerinfo:bottom_right_graphic
            int4 = 59441250;
            int5 = comp(907, 121);  // lobbyscreen_pane_playerinfo:bottom_right_overlay_layer
            int6 = comp(907, 122);  // lobbyscreen_pane_playerinfo:bottom_right_highlight_layer
            int7 = 2;
            break;
        }
        default: {
            return;
        }
    };
    script4161(int6, 255);
    IF_SETONTIMER(callback(), int6);
    IF_SETHIDE(true, int6);
    IF_SETOP(callback(script1), int3);
    IF_SETONOP(callback(), int3);
    IF_SETONMOUSEREPEAT(callback(), int3);
    IF_SETONCLICK(callback(), int3);
    switch (int7) {
        case 0: {
            script10046(int3, int4, int5, int6, int0);
            break;
        }
        case 1: {
            script10041(int3, int4, int5, int6, int0);
            break;
        }
        case 2: {
            script10045(int3, int4, int5, int6, int0);
            break;
        }
        case -1: {
            script10044(int3, int4, int5, int6, int0);
            break;
        }
    };
    if ((int0 == 0)) {
        CC_DELETEALL(int5);
    };
    script10051();
    return;
}