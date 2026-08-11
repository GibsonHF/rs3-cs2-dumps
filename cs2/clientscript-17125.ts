//
function script17125(int0: number): void {
    if ((varclient_7113 == int0)) {
        script17130(68419634, 0, 1, 0, 0);
        if ((CC_FIND(comp(1044, 43), int0) == 1)) {  // lobbyscreen_pane_mobile_social:player_list_content_bg
            if ((MODULO(int0, 2) == 0)) {
                script1341(28679);
            } else {
                script1341(28680);
            };
        };
        varclient_7113 = -1;
    } else {
        script17130(68419634, 1, 1, 0, 0);
        if (((varclient_7113 != -1) && (CC_FIND(comp(1044, 43), varclient_7113) == 1))) {  // lobbyscreen_pane_mobile_social:player_list_content_bg
            if ((MODULO(varclient_7113, 2) == 0)) {
                script1341(28679);
            } else {
                script1341(28680);
            };
        };
        if ((CC_FIND(comp(1044, 43), int0) == 1)) {  // lobbyscreen_pane_mobile_social:player_list_content_bg
            script1341(28682);
        };
        varclient_7113 = int0;
    };
    return;
}