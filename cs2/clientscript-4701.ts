//
function script4701(int0: number, int1: number, int2: number, string0: string): void {
    varclient_1553 = int1;
    varclient_1554 = int2;
    varclient_2482 = string0;
    if ((int0 == 1)) {
        if (((varclient_1100 == 43) || (varclient_1100 == 42))) {
            script3093(varclient_1100, 4038, "Leave Queue", `Are you sure you wish to leave the queue for World ${IF_GETTEXT(comp(906, 87))}? You will lose your position if you do.`, 2611, "Leave Queue", "Stay In Queue");  // lobbyscreen:login_queue_world
            return;
        };
        script3141(int2, string0);
        if (((int1 > -1) && (CC_FIND(comp(910, 64), int1) == 1))) {  // lobbyscreen_pane_worldselect:ws_bg
            IF_SETHIDE(false, comp(910, 65));  // lobbyscreen_pane_worldselect:ws_selected_bg
            IF_SETPOSITION(0, CC_GETY(), 0, 0, comp(910, 65));  // lobbyscreen_pane_worldselect:ws_selected_bg
        };
        if ((MAP_WORLD() == script20335(1))) {
            if ((CC_FIND(comp(910, 17), 1) == 1)) {  // lobbyscreen_pane_worldselect:list_fav1
                CC_SETHIDE(false);
            };
        } else if ((CC_FIND(comp(910, 17), 1) == 1)) {  // lobbyscreen_pane_worldselect:list_fav1
            CC_SETHIDE(true);
        };
        if ((MAP_WORLD() == script20335(2))) {
            if ((CC_FIND(comp(910, 18), 1) == 1)) {  // lobbyscreen_pane_worldselect:list_fav2
                CC_SETHIDE(false);
            };
        } else if ((CC_FIND(comp(910, 18), 1) == 1)) {  // lobbyscreen_pane_worldselect:list_fav2
            CC_SETHIDE(true);
        };
        if ((MAP_WORLD() == script20335(3))) {
            if ((CC_FIND(comp(910, 19), 1) == 1)) {  // lobbyscreen_pane_worldselect:list_fav3
                CC_SETHIDE(false);
            };
        } else if ((CC_FIND(comp(910, 19), 1) == 1)) {  // lobbyscreen_pane_worldselect:list_fav3
            CC_SETHIDE(true);
        };
        script3064(1);
    };
    return;
}