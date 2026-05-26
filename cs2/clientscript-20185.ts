//
function script20185(): void {
    if ((((PLAYERMEMBER() == 1) || (varplayer_1750 > varplayer_1752)) || (varplayer_1751 > varplayer_1752))) {
        IF_SETENABLED(0, 91488279);
        IF_SETENABLED(1, 91488271);
    } else {
        IF_SETHIDE(0, 91488279);
        IF_SETENABLED(0, 91488280);
    };
    if ((varbitplayer_58379 == 0)) {
        IF_SETHIDE(0, 91488267);
        IF_SETHIDE(0, 91488272);
        IF_SETPOSITION(0, 0, 0, 0, 91488267);
        IF_SETSIZE(300, 40, 0, 1, 91488267);
        IF_SETPOSITION(0, 0, 2, 0, 91488272);
        IF_SETSIZE(300, 40, 0, 1, 91488272);
        IF_SETHIDE(1, 91488278);
        IF_SETPOSITION(0, 4, 1, 2, 91488280);
        IF_SETPOSITION(0, 40, 1, 2, 91488279);
    } else {
        IF_SETHIDE(1, 91488267);
        IF_SETHIDE(0, 91488272);
        IF_SETPOSITION(0, 0, 1, 0, 91488272);
        IF_SETSIZE(13108, 40, 2, 1, 91488272);
        IF_SETHIDE(0, 91488278);
        IF_SETPOSITION(-150, 4, 1, 2, 91488278);
        IF_SETPOSITION(150, 4, 1, 2, 91488280);
        IF_SETPOSITION(150, 40, 1, 2, 91488279);
        IF_SETTEXT("Enter Lobby", 91488271);
    };
    return;
}