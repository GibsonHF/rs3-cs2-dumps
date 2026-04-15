//
function script20185(): void {
    if ((((PLAYERMEMBER() == true) || (varplayer_1750 > varplayer_1752)) || (varplayer_1751 > varplayer_1752))) {
        IF_SETENABLED(false, comp(1396, 23));
        IF_SETENABLED(true, comp(1396, 15));
    } else {
        IF_SETHIDE(false, comp(1396, 23));
        IF_SETENABLED(false, comp(1396, 24));
    };
    if ((varbitplayer_58379 == 0)) {
        IF_SETHIDE(false, comp(1396, 11));
        IF_SETHIDE(false, comp(1396, 16));
        IF_SETPOSITION(0, 0, 0, 0, comp(1396, 11));
        IF_SETSIZE(300, 40, 0, 1, comp(1396, 11));
        IF_SETPOSITION(0, 0, 2, 0, comp(1396, 16));
        IF_SETSIZE(300, 40, 0, 1, comp(1396, 16));
        IF_SETHIDE(true, comp(1396, 22));
        IF_SETPOSITION(0, 4, 1, 2, comp(1396, 24));
        IF_SETPOSITION(0, 40, 1, 2, comp(1396, 23));
    } else {
        IF_SETHIDE(true, comp(1396, 11));
        IF_SETHIDE(false, comp(1396, 16));
        IF_SETPOSITION(0, 0, 1, 0, comp(1396, 16));
        IF_SETSIZE(13108, 40, 2, 1, comp(1396, 16));
        IF_SETHIDE(false, comp(1396, 22));
        IF_SETPOSITION(-150, 4, 1, 2, comp(1396, 22));
        IF_SETPOSITION(150, 4, 1, 2, comp(1396, 24));
        IF_SETPOSITION(150, 40, 1, 2, comp(1396, 23));
        IF_SETTEXT("Enter Lobby", comp(1396, 15));
    };
    return;
}