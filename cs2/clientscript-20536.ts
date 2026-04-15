//
function script20536(int0: component, int1: struct, int2: int, int3: int, int4: unknown_int, int5: unknown_int): void {
    var int6 = struct_getparam(int1, 3578);
    var int7 = struct_getparam(int1, 3577);
    var int8 = struct_getparam(int1, 8350);
    var int9 = struct_getparam(int1, 8656);
    var int10 = script8374(int0);
    var int11 = MAX(1, (IF_GETWIDTH(int0) / int6));
    var int12 = MAX(1, ((int10 / int11) + MIN(1, MODULO(int10, int11))));
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = int2;
    var int21 = (int2 + int3);
    while ((int13 < int10)) {
        var int5 = int4;
        if (((int13 >= int3) && (int13 < (int3 + int2)))) {
            [int15, int14] = script20535(int10, int11, int12, int19);
            int19 = (int19 + 1);
        } else if ((int13 < int3)) {
            [int15, int14] = script20535(int10, int11, int12, int20);
            int20 = (int20 + 1);
            int5 = 1;
        } else {
            [int15, int14] = script20535(int10, int11, int12, int21);
            int21 = (int21 + 1);
        };
        int16 = (int14 * int6);
        int17 = (int15 * int7);
        int18 = (int13 * 4);
        if (((CC_FIND(int0, int18) == 1) && (int5 == 0))) {
            int16 = (int16 - ((int16 - CC_GETX()) / 2));
            int17 = (int17 - ((int17 - CC_GETY()) / 2));
        };
        if ((CC_FIND(int0, int18) == 1)) {
            CC_SETPOSITION(int16, int17, 0, 0);
        };
        if ((CC_FIND(int0, (int18 + 1)) == 1)) {
            CC_SETPOSITION((int16 + int8), (int17 + ((int7 - CC_GETHEIGHT()) / 2)), 0, 0);
            if ((CC_FIND[1](int0, (int18 + 2)) == 1)) {
                CC_SETPOSITION[1]((int16 + (MIN(CC_GETWIDTH(), CC_GETHEIGHT()) / 2)), (int17 + (CC_GETHEIGHT() / 2)), 0, 0);
            };
            if ((CC_FIND[1](int0, (int18 + 3)) == 1)) {
                CC_SETPOSITION[1]((int16 + (MIN(CC_GETWIDTH(), CC_GETHEIGHT()) / 2)), (int17 + (CC_GETHEIGHT() / 2)), 0, 0);
            };
        };
        int13 = (int13 + 1);
    };
    return;
}