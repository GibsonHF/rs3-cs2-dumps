//
function script15621(): void {
    var int0 = MIN(0, (IF_GETX(comp(906, 154)) + 10));  // lobbyscreen:mobile_sidemenu
    var int1 = MAX(180, (IF_GETTRANS(comp(906, 153)) - 8));  // lobbyscreen:mobile_sidemenu_blackout_bg
    IF_SETPOSITION(int0, 0, 0, 2, comp(906, 154));  // lobbyscreen:mobile_sidemenu
    IF_SETTRANS(int1, comp(906, 153));  // lobbyscreen:mobile_sidemenu_blackout_bg
    if ((int0 >= 0)) {
        IF_SETONTIMER(callback(), comp(906, 5));  // lobbyscreen:mobile_sidemenu_timer
        IF_SETTRANS(180, comp(906, 153));  // lobbyscreen:mobile_sidemenu_blackout_bg
    };
    return;
}