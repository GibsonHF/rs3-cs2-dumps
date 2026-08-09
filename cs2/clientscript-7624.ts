//
function script7624(int0: number): void {
    var string0 = "";
    var string1 = "";
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    if ((CC_FIND(comp(850, 2), int0) == 1)) {
        string0 = cc_getparam(4618);
        string1 = cc_getparam(4617);
        int3 = cc_getparam(8342);
    };
    IF_SETTEXT(string0, comp(709, 9));
    script7831();
    IF_SETTEXT(string1, comp(709, 13));
    script1458(46465039, -1, 28553, "Select", script734(int3));
    if ((int3 == 1)) {
        IF_SETHIDE(false, comp(709, 16));
    } else {
        IF_SETHIDE(true, comp(709, 16));
    };
    [int1, int2, string0, string1] = dbrow_getfield(varplayer_9864, 532496, int0);
    if ((varplayer_9864 != -1)) {
        if ((int2 == 1)) {
            IF_SETSIZE(8, 50, 1, 1, comp(709, 10));
            IF_SETHIDE(true, comp(709, 15));
        } else {
            IF_SETSIZE(8, 60, 1, 1, comp(709, 10));
            IF_SETHIDE(false, comp(709, 15));
        };
    } else {
        IF_SETSIZE(8, 60, 1, 1, comp(709, 10));
        IF_SETHIDE(false, comp(709, 15));
    };
    script7655();
    return;
}