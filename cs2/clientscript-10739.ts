//
function script10739(int0: number, int1: number): void {
    if ((int1 < 25)) {
        IF_SETONTIMER(callback(script10739, int0, (int1 + 1)), int0);
        return;
    };
    IF_SETONTIMER(callback(), int0);
    if ((CC_FIND[1](comp(1554, 22), 1) == 1)) {  // elfcity_meilyr_maw_swap:highlight_area
        CC_SETHIDE[1](true);
    };
    script10742(varplayer_4903);
    return;
}