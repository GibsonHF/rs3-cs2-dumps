//
function script19507(): void {
    if ((varbitplayer_27169 == 1)) {
        script19508(struct_getparam(21308, 3503), 714);
        IF_SETHIDE(true, comp(1313, 103));
    } else {
        IF_SETHIDE(false, comp(1313, 103));
    };
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int0, int2, int1, int3] = script2956();
    IF_SETPOSITION(int0, int2, 0, 0, comp(1313, 2));
    IF_SETSIZE((int0 + int1), (int2 + int3), 1, 1, comp(1313, 2));
    var int4 = 213;
    var int5 = script6431();
    if ((int5 == true)) {
        IF_SETPOSITION(70, 12, 2, 0, comp(1313, 120));
        int4 = 253;
    } else {
        IF_SETPOSITION(50, 15, 2, 0, comp(1313, 120));
    };
    var int6 = IF_GETHEIGHT(comp(1313, 4));
    IF_SETSIZE(int4, 0, 0, 1, comp(1313, 5));
    IF_SETSIZE((int4 + 4), 0, 1, 1, comp(1313, 65));
    if (((varbitplayer_45140 != 0) || (varbitplayer_39433 == 1))) {
        IF_SETPOSITION(0, 0, 1, 2, comp(1313, 68));
    } else {
        IF_SETPOSITION(0, 0, 2, 2, comp(1313, 68));
    };
    return;
}