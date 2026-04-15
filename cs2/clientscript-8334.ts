//
function script8334(int0: unknown_int, int1: int, int2: unknown_int, int3: int, int4: int): void {
    IF_SETONDRAG(callback(script8335, int1, int2, -2147483647, -2147483646), int0);
    IF_SETONDRAGCOMPLETE(callback(script8334, -2147483645, int1, int2, -2147483647, -2147483646), int0);
    var int5 = script10405(int1);
    if ((int5 == -1)) {
        return;
    };
    var int6 = script8418(int5, 0);
    if ((int6 == -1 as struct)) {
        return;
    };
    var int7 = struct_getparam(int5, 3505);
    if ((int7 == comp(-1, 65535))) {
        return;
    };
    var int8 = struct_getparam(int5, 3511);
    if ((int8 == comp(-1, 65535))) {
        return;
    };
    var int9 = 0;
    var int10 = 3;
    var int11 = 4;
    var int12 = 5;
    if ((int2 == 1)) {
        int9 = 8;
        int10 = 11;
        int11 = 12;
        int12 = 13;
    };
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = IF_GETSCROLLX(int7);
    var int19 = IF_GETSCROLLY(int7);
    if (((CC_FIND(int8, int9) == 1) && (CC_FIND[1](int8, int10) == 1))) {
        if ((int2 == 1)) {
            int13 = CC_GETX();
            CC_SETPOSITION[1]((int13 + int3), CC_GETY[1](), 0, 0);
        } else {
            int13 = CC_GETY();
            CC_SETPOSITION[1](CC_GETX[1](), (int13 + int4), 0, 0);
        };
    };
    IF_SETSCROLLPOS(int18, int19, int7);
    script8332(int1);
    return;
}