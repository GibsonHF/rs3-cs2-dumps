//
function script11843(): void {
    var int0 = IF_GETWIDTH(comp(1683, 5));
    var int1 = IF_GETWIDTH(comp(1683, 4));
    var int2 = 0;
    var int3 = (int1 / 1000);
    var int4 = SCALE(int1, 1000, varbitplayer_29511);
    if ((int0 < int4)) {
        int2 = MIN((int0 + 2), int4);
    } else if ((int0 > int4)) {
        int2 = MAX((int0 - 2), int4);
    } else {
        IF_SETONTIMER(callback(), comp(1683, 5));
        return;
    };
    if ((int2 == 0)) {
        int2 = 1;
        IF_SETONTIMER(callback(), comp(1683, 5));
    };
    IF_SETSIZE(int2, 0, 0, 1, comp(1683, 5));
    if ((varbitplayer_29511 >= 200)) {
        stack(14495);
        stack(110297095);
        IF_SETGRAPHIC();
    };
    if ((varbitplayer_29511 >= 500)) {
        stack(14817);
        stack(110297096);
        IF_SETGRAPHIC();
    };
    if ((varbitplayer_29511 >= 1000)) {
        stack(14819);
        stack(110297097);
        IF_SETGRAPHIC();
    };
    return;
}