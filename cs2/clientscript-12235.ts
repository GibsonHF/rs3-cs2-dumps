//
function script12235(int0: component, int1: struct, int2: int): [int, int, int, int] {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    [int3, int4, int5, int6] = script12005();
    var int7 = 0;
    var int8 = script6431();
    var int9 = 0;
    var int10 = 0;
    if (((int1 != 37672 as struct) && (varbitplayer_45116 == 1))) {
        int10 = (IF_GETHEIGHT(struct_getparam(int1, 8144)) + IF_GETHEIGHT(struct_getparam(int1, 8127)));
    };
    int9 = (int9 + int10);
    int9 = (int9 + IF_GETHEIGHT(struct_getparam(int1, 8130)));
    if ((int0 != comp(1890, 38))) {
        if ((int8 == true)) {
            IF_SETPOSITION((16 / 2), int10, 0, 0, struct_getparam(int1, 8122));
            IF_SETSIZE(16, int9, 1, 1, struct_getparam(int1, 8122));
            IF_SETHIDE(false, struct_getparam(int1, 8123));
            IF_SETSIZE(0, IF_GETHEIGHT(struct_getparam(int1, 8122)), 1, 0, struct_getparam(int1, 8123));
        } else if (((varbitplayer_27169 == 1) && (int8 == false))) {
            IF_SETPOSITION(0, int10, 0, 0, struct_getparam(int1, 8122));
            IF_SETSIZE(16, int9, 1, 1, struct_getparam(int1, 8122));
            IF_SETHIDE(true, struct_getparam(int1, 8123));
        } else {
            IF_SETPOSITION((16 / 2), int10, 0, 0, struct_getparam(int1, 8122));
            IF_SETSIZE(16, int9, 1, 1, struct_getparam(int1, 8122));
            IF_SETHIDE(false, struct_getparam(int1, 8123));
            IF_SETSIZE(0, IF_GETHEIGHT(struct_getparam(int1, 8122)), 1, 0, struct_getparam(int1, 8123));
        };
    };
    var int11 = IF_GETWIDTH(struct_getparam(int1, 8122));
    var int12 = IF_GETHEIGHT(struct_getparam(int1, 8122));
    var int13 = (int12 - (2 + 2));
    var int14 = int5;
    var int15 = MAX(int6, 1);
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    [int18, int16, int17] = script8107(int11, int14);
    var int19 = MAX((int2 / int18), 1);
    if (((MODULO(int2, int18) > 0) && (int2 > int18))) {
        int19 = (int19 + 1);
    };
    int19 = MAX(1, int19);
    if ((((int19 * int15) - 2) > int13)) {
        int7 = 1;
        IF_SETPOSITION(0, int10, 2, 0, struct_getparam(int1, 8123));
        IF_SETSIZE(16, IF_GETHEIGHT(struct_getparam(int1, 8122)), 0, 0, struct_getparam(int1, 8123));
    } else {
        CC_DELETEALL(struct_getparam(int1, 8123));
        if (((varbitplayer_27169 == 1) && (int8 == false))) {
            IF_SETPOSITION(0, int10, 0, 0, struct_getparam(int1, 8122));
            IF_SETSIZE(0, int9, 1, 1, struct_getparam(int1, 8122));
        };
    };
    int11 = IF_GETWIDTH(struct_getparam(int1, 8122));
    int12 = IF_GETHEIGHT(struct_getparam(int1, 8122));
    int13 = (int12 - (2 + 2));
    [int18, int16, int17] = script8107(int11, int14);
    int19 = MAX((int2 / int18), 1);
    if (((MODULO(int2, int18) > 0) && (int2 > int18))) {
        int19 = (int19 + 1);
    };
    int19 = MAX(1, int19);
    var int20 = ((int19 * int15) + (2 + 2));
    IF_SETSCROLLSIZE(0, int20, struct_getparam(int1, 8122));
    if ((int7 == 1)) {
        script1704(struct_getparam(int1, 8123), struct_getparam(int1, 8122));
    };
    return [int15, int17, int16, int18];
}