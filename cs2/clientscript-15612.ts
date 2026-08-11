//
function script15612(): void {
    var int0 = script13749();
    if ((int0 == 1)) {
        IF_SETHIDE(true, comp(906, 29));  // lobbyscreen:tabs
        IF_SETHIDE(false, comp(906, 107));  // lobbyscreen:mobile_tabs
    } else {
        IF_SETHIDE(false, comp(906, 29));  // lobbyscreen:tabs
        IF_SETHIDE(true, comp(906, 107));  // lobbyscreen:mobile_tabs
    };
    IF_SETHIDE(true, comp(906, 42));  // lobbyscreen:background
    script15613(59375647, 59375724, "Updates", 0, int0, 12766, 12767);
    script15613(59375648, 59375725, "World", 1, int0, 12768, 12769);
    script15613(59375649, 59375726, "Friends", 2, int0, 18727, 18727);
    script15613(59375650, -1, "Friends Chat", 3, int0, 20976, 20976);
    script15613(59375651, -1, "Clan Chat", 4, int0, 20978, 20978);
    script15613(59375652, -1, "Options", 5, 0, -1, -1);
    return;
}