//
function script12664(): void {
    var int0 = IF_GETHEIGHT(comp(1778, 3));
    var int1 = 210;
    var int2 = 1;
    var int3 = MAX(1, SCALE(int1, 100, varbitplayer_33371));
    var int4 = SCALE((int3 - 1), int1, 28);
    if ((int0 < int3)) {
        int2 = MIN((int0 + 2), int3);
    } else if ((int0 > int3)) {
        int2 = MAX((int0 - 2), int3);
    } else {
        IF_SETONTIMER(callback(), comp(1778, 3));
        return;
    };
    if ((int2 == 0)) {
        int2 = 1;
        IF_SETONTIMER(callback(), comp(1778, 3));
    };
    IF_SETSIZE(41, int2, 0, 0, comp(1778, 3));
    if ((varbitplayer_33371 >= 5)) {
        IF_SETGRAPHIC(27789 as graphic, comp(1778, 11));
    };
    if ((varbitplayer_33371 >= 15)) {
        IF_SETGRAPHIC(27791 as graphic, comp(1778, 10));
    };
    if ((varbitplayer_33371 >= 35)) {
        IF_SETGRAPHIC(27793 as graphic, comp(1778, 9));
    };
    if ((varbitplayer_33371 >= 60)) {
        IF_SETGRAPHIC(27795 as graphic, comp(1778, 8));
    };
    if ((varbitplayer_33371 >= 100)) {
        IF_SETGRAPHIC(27797 as graphic, comp(1778, 7));
    };
    return;
}