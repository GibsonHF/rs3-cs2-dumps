//
function script7624(int0: int): void {
    var string0 = "";
    var string1 = "";
    var int1 = -1;
    var int2 = false;
    var int3 = 0;
    if ((CC_FIND(comp(850, 2), int0) == 1)) {
        string0 = cc_getparam(4618);
        string1 = cc_getparam(4617);
        int3 = cc_getparam(8342);
    };
    IF_SETTEXT(string0, comp(709, 9));
    script7831();
    IF_SETTEXT(string1, comp(709, 13));
    script1458(comp(709, 15), comp(-1, 65535), 28553 as struct, "Select", script734(int3));
    if ((int3 == 1)) {
        IF_SETHIDE(false, comp(709, 16));
    } else {
        IF_SETHIDE(true, comp(709, 16));
    };
    stack(dbrow_getfield(varplayer_9864, 532496, int0));
    [int1, int2, string0, string1] = stack();
    if (((varplayer_9864 != -1 as dbrow) && (int2 == true))) {
        IF_SETSIZE(8, 50, 1, 1, comp(709, 10));
        IF_SETHIDE(true, comp(709, 15));
    } else {
        IF_SETSIZE(8, 60, 1, 1, comp(709, 10));
        IF_SETHIDE(false, comp(709, 15));
    };
    script7655();
    return;
}