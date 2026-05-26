//
function script11843(): void {
    var int0 = IF_GETWIDTH(110297093);
    var int1 = IF_GETWIDTH(110297092);
    var int2 = 0;
    var int3 = (int1 / 1000);
    var int4 = SCALE(int1, 1000, varbitplayer_29511);
    if ((int0 < int4)) {
        int2 = MIN((int0 + 2), int4);
    } else if ((int0 > int4)) {
        int2 = MAX((int0 - 2), int4);
    } else {
        IF_SETONTIMER(callback(), 110297093);
        return;
    };
    if ((int2 == 0)) {
        int2 = 1;
        IF_SETONTIMER(callback(), 110297093);
    };
    IF_SETSIZE(int2, 0, 0, 1, 110297093);
    if ((varbitplayer_29511 >= 200)) {
        IF_SETGRAPHIC(14495, 110297095);
    };
    if ((varbitplayer_29511 >= 500)) {
        IF_SETGRAPHIC(14817, 110297096);
    };
    if ((varbitplayer_29511 >= 1000)) {
        IF_SETGRAPHIC(14819, 110297097);
    };
    return;
}