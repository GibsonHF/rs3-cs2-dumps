//
function script2858(int0: unknown_int): void {
    var int1 = comp(1566, 58);
    var int2 = IF_GETX(int1);
    var int3 = IF_GETY(int1);
    var int4 = 102629433;
    var int5 = 102629432;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    [int6, int7, int8, int9, int10, int11, int12, int13, int14] = script2861();
    if ((((((((((int6 + int7) + int8) + int9) + int10) + int11) + int12) + int13) + int14) == 0)) {
        IF_SETPOSITION(0, 0, 0, 0, int1);
        IF_SETHIDE(true, int1);
        IF_SETHIDE(true, comp(1566, 69));
        script10828();
        return;
    };
    IF_SETHIDE(false, int1);
    var int15 = (int2 + 2);
    if ((int15 > 117)) {
        IF_SETPOSITION(0, 109, 0, 0, int1);
        script2860(int2, int3);
    } else if (((int15 < 8) || (int15 >= 114))) {
        script2859(int6, int2, int3, int1, 0);
    } else if ((int15 < 22)) {
        script2859(int8, int2, int3, int1, int6);
    } else if ((int15 < 35)) {
        script2859(int7, int2, int3, int1, int8);
    } else if ((int15 < 48)) {
        script2859(int9, int2, int3, int1, int7);
    } else if ((int15 < 61)) {
        script2859(int10, int2, int3, int1, int9);
    } else if ((int15 < 74)) {
        script2859(int11, int2, int3, int1, int10);
    } else if ((int15 < 87)) {
        script2859(int12, int2, int3, int1, int11);
    } else if ((int15 < 99)) {
        script2859(int13, int2, int3, int1, int12);
    } else if ((int15 < 114)) {
        script2859(int14, int2, int3, int1, int13);
    };
    return;
}