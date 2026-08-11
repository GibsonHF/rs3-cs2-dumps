//
function script15623(): void {
    var int0 = (0 - IF_GETWIDTH(comp(815, 0)));  // lobbyscreen_mobile_side_menu:base
    var int1 = MAX(int0, (IF_GETX(comp(906, 154)) - 10));  // lobbyscreen:mobile_sidemenu
    var int2 = MIN(255, (IF_GETTRANS(comp(906, 153)) + 8));  // lobbyscreen:mobile_sidemenu_blackout_bg
    IF_SETPOSITION(int1, 0, 0, 2, comp(906, 154));  // lobbyscreen:mobile_sidemenu
    IF_SETTRANS(int2, comp(906, 153));  // lobbyscreen:mobile_sidemenu_blackout_bg
    if ((int1 <= int0)) {
        IF_SETONTIMER(callback(), comp(906, 5));  // lobbyscreen:mobile_sidemenu_timer
        IF_SETHIDE(true, comp(906, 152));  // lobbyscreen:mobile_sidemenu_blackout
        IF_SETTRANS(255, comp(906, 153));  // lobbyscreen:mobile_sidemenu_blackout_bg
    };
    return;
}