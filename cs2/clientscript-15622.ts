//
function script15622(): void {
    IF_SETPARAM_INT(4520, 1, comp(906, 154));  // lobbyscreen:mobile_sidemenu
    IF_SETONTIMER(callback(script15623), comp(906, 5));  // lobbyscreen:mobile_sidemenu_timer
    return;
}