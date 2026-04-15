//
function script11048(): void {
    var int0 = IF_GETHEIGHT(comp(1631, 4));
    var int1 = ((IF_GETHEIGHT(comp(1631, 3)) * 1000) / 5000);
    var int2 = ((int1 * varbitplayer_28193) / 1000);
    var int3 = 0;
    if ((int0 < int2)) {
        int3 = MIN((int0 + 1), int2);
    } else if ((int0 == int2)) {
        IF_SETONTIMER(callback(), comp(1631, 3));
        return;
    };
    if ((int3 != 0)) {
        IF_SETSIZE(0, int3, 1, 0, comp(1631, 4));
    } else {
        IF_SETSIZE(0, 1, 1, 0, comp(1631, 4));
        IF_SETONTIMER(callback(), comp(1631, 3));
        return;
    };
    script11564();
    return;
}