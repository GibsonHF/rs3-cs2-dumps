//
function script12664(): void {
    var int0 = IF_GETHEIGHT(116523011);
    var int1 = 210;
    var int2 = 1;
    var int3 = MAX(1, SCALE(int1, 100, varbitplayer_33371));
    var int4 = SCALE((int3 - 1), int1, 28);
    if ((int0 < int3)) {
        int2 = MIN((int0 + 2), int3);
    } else if ((int0 > int3)) {
        int2 = MAX((int0 - 2), int3);
    } else {
        IF_SETONTIMER(callback(), 116523011);
        return;
    };
    if ((int2 == 0)) {
        int2 = 1;
        IF_SETONTIMER(callback(), 116523011);
    };
    IF_SETSIZE(41, int2, 0, 0, 116523011);
    if ((varbitplayer_33371 >= 5)) {
        IF_SETGRAPHIC(27789, 116523019);
    };
    if ((varbitplayer_33371 >= 15)) {
        IF_SETGRAPHIC(27791, 116523018);
    };
    if ((varbitplayer_33371 >= 35)) {
        IF_SETGRAPHIC(27793, 116523017);
    };
    if ((varbitplayer_33371 >= 60)) {
        IF_SETGRAPHIC(27795, 116523016);
    };
    if ((varbitplayer_33371 >= 100)) {
        IF_SETGRAPHIC(27797, 116523015);
    };
    return;
}