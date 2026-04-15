//
function script10739(int0: component, int1: int): void {
    if ((int1 < 25)) {
        IF_SETONTIMER(callback(script10739, int0, (int1 + 1)), int0);
        return;
    };
    IF_SETONTIMER(callback(), int0);
    if ((CC_FIND[1](101842966, 1) == 1)) {
        CC_SETHIDE[1](true);
    };
    script10742(varplayer_4903);
    return;
}