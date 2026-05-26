//
function script19507(): void {
    if ((varbitplayer_27169 == 1)) {
        script19508(struct_getparam(21308, 3503), 714);
        IF_SETHIDE(1, 86048871);
    } else {
        IF_SETHIDE(0, 86048871);
    };
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int0, int2, int1, int3] = script2956();
    IF_SETPOSITION(int0, int2, 0, 0, 86048770);
    IF_SETSIZE((int0 + int1), (int2 + int3), 1, 1, 86048770);
    var int4 = 213;
    var int5 = script6431();
    if ((int5 == 1)) {
        IF_SETPOSITION(70, 12, 2, 0, 86048888);
        int4 = 253;
    } else {
        IF_SETPOSITION(50, 15, 2, 0, 86048888);
    };
    var int6 = IF_GETHEIGHT(86048772);
    IF_SETSIZE(int4, 0, 0, 1, 86048773);
    IF_SETSIZE((int4 + 4), 0, 1, 1, 86048833);
    if (((varbitplayer_45140 != 0) || (varbitplayer_39433 == 1))) {
        IF_SETPOSITION(0, 0, 1, 2, 86048836);
    } else {
        IF_SETPOSITION(0, 0, 2, 2, 86048836);
    };
    return;
}