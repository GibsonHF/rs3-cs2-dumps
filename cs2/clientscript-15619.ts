//
function script15619(int0: number): void {
    var int1 = IF_GETX(comp(906, 154));  // lobbyscreen:mobile_sidemenu
    var int2 = 0;
    if ((IF_FIND(comp(906, 154)) == 1)) {  // lobbyscreen:mobile_sidemenu
        int2 = cc_getparam(4520);
    };
    if ((int1 < 0)) {
        IF_SETPOSITION((0 - int0), 0, 0, 2, comp(906, 154));  // lobbyscreen:mobile_sidemenu
    };
    return;
}