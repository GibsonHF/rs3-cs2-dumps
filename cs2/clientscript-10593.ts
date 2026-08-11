//
function script10593(int0: number): void {
    script4161(59441195, 255);
    IF_SETONTIMER(callback(), comp(907, 43));  // lobbyscreen_pane_playerinfo:special_border
    if ((int0 == 1)) {
        IF_SETHIDE(false, comp(907, 43));  // lobbyscreen_pane_playerinfo:special_border
    } else {
        IF_SETHIDE(true, comp(907, 43));  // lobbyscreen_pane_playerinfo:special_border
    };
    return;
}