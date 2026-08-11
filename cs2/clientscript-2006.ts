//
function script2006(): void {
    var int0 = IF_GETX(comp(906, 154));  // lobbyscreen:mobile_sidemenu
    var int1 = 0;
    if ((IF_FIND(comp(906, 154)) == 1)) {  // lobbyscreen:mobile_sidemenu
        int1 = cc_getparam(4520);
    };
    if ((int0 <= (0 - IF_GETWIDTH(comp(815, 0))))) {  // lobbyscreen_mobile_side_menu:base
        IF_SETPARAM_INT(4520, 0, comp(906, 154));  // lobbyscreen:mobile_sidemenu
        IF_SETONTIMER(callback(script15621), comp(906, 5));  // lobbyscreen:mobile_sidemenu_timer
        IF_SETHIDE(false, comp(906, 152));  // lobbyscreen:mobile_sidemenu_blackout
    } else if ((int0 < 0)) {
        if ((int1 == 1)) {
            IF_SETPARAM_INT(4520, 0, comp(906, 154));  // lobbyscreen:mobile_sidemenu
            IF_SETONTIMER(callback(script15621), comp(906, 5));  // lobbyscreen:mobile_sidemenu_timer
            IF_SETHIDE(false, comp(906, 152));  // lobbyscreen:mobile_sidemenu_blackout
        } else {
            IF_SETPARAM_INT(4520, 1, comp(906, 154));  // lobbyscreen:mobile_sidemenu
            IF_SETONTIMER(callback(script15623), comp(906, 5));  // lobbyscreen:mobile_sidemenu_timer
        };
    } else {
        IF_SETPARAM_INT(4520, 1, comp(906, 154));  // lobbyscreen:mobile_sidemenu
        IF_SETONTIMER(callback(script15623), comp(906, 5));  // lobbyscreen:mobile_sidemenu_timer
    };
    return;
}