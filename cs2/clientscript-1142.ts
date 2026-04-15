//[proc,scrollbar_horizontal]
function script1142(int0: component, int1: component, int2: struct): void {
    CC_DELETEALL(int0);
    var int2 = script9984(int2, -1);
    if ((int2 == -1 as struct)) {
        int2 = 30756 as struct;
    };
    if ((varbitplayer_22875 == 2)) {
        script8937(int0, int1, int2);
        return;
    };
    var int3 = struct_getparam(int2, 1388);
    var int4 = struct_getparam(int2, 1389);
    var int5 = struct_getparam(int2, 1394);
    var int6 = struct_getparam(int2, 1395);
    var int7 = struct_getparam(int2, 1396);
    var int8 = struct_getparam(int2, 1393);
    var int9 = IF_GETSCROLLWIDTH(int1);
    var int10 = IF_GETWIDTH(int0);
    var int11 = (int10 - 32);
    var int12 = 0;
    if ((int9 > 0)) {
        int12 = SCALE(IF_GETWIDTH(int1), int9, int11);
    } else {
        int12 = int11;
    };
    int12 = MAX(int12, 10);
    var int13 = IF_GETSCROLLX(int1);
    var int14 = 0;
    var int15 = 0;
    if ((int13 > 0)) {
        int14 = MAX(1, (int9 - IF_GETWIDTH(int1)));
        if ((int13 > int14)) {
            IF_SETSCROLLPOS(int14, 0, int1);
            int13 = int14;
        };
        int15 = SCALE(int13, int14, (int11 - int12));
        int15 = MIN(MAX(int15, 0), (int11 - int12));
    };
    var int16 = script12611(int0);
    CC_CREATE(int0, 5, 0);
    CC_SETPOSITION(21, 0, 0, 0);
    CC_SETSIZE(42, 16, 1, 0);
    CC_CREATE(int0, 5, 1);
    CC_SETPOSITION((21 + int15), 0, 0, 0);
    CC_SETGRAPHIC(int6);
    script12591(4, int16);
    CC_SETTILING(true);
    CC_SETDRAGGABLE(int0, 0);
    CC_SETDRAGRENDERBEHAVIOUR(3);
    CC_SETSIZE((int12 - 10), 16, 0, 0);
    CC_SETONDRAG(callback(script1700, int0, int1, -2147483647, 0));
    CC_SETONDRAGCOMPLETE(callback(script1700, int0, int1, -2147483647, 1));
    CC_CREATE(int0, 5, 2);
    CC_SETPOSITION((16 + int15), 0, 0, 0);
    CC_SETSIZE(5, 16, 0, 0);
    CC_SETGRAPHIC(int5);
    script12591(4, int16);
    CC_SETTILING(0);
    CC_CREATE(int0, 5, 3);
    CC_SETPOSITION((((16 + int15) + int12) - 5), 0, 0, 0);
    CC_SETSIZE(5, 16, 0, 0);
    CC_SETGRAPHIC(int7);
    script12591(4, int16);
    CC_SETTILING(0);
    CC_CREATE(int0, 5, 4);
    CC_SENDTOBACK();
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(16, 16, 0, 0);
    CC_SETGRAPHIC(int3);
    script12591(4, int16);
    if ((struct_getparam(int2, 4895) == 1)) {
        CC_SET2DANGLE(16384);
    };
    CC_SETTILING(false);
    CC_SETONHOLD(callback(script13131, int0, int1, 1, -2147483643));
    CC_CREATE(int0, 5, 5);
    CC_SENDTOBACK();
    CC_SETPOSITION(0, 0, 2, 0);
    CC_SETSIZE(16, 16, 0, 0);
    CC_SETGRAPHIC(int4);
    script12591(4, int16);
    if ((struct_getparam(int2, 4895) == 1)) {
        CC_SET2DANGLE(16384);
    };
    CC_SETTILING(false);
    CC_SETONHOLD(callback(script13131, int0, int1, 0, -2147483643));
    CC_CREATE(int0, 5, 6);
    CC_SENDTOBACK();
    CC_SETPOSITION(16, 0, 0, 0);
    CC_SETSIZE(32, 16, 1, 0);
    CC_SETGRAPHIC(int8);
    script12591(4, int16);
    CC_SETTILING(1);
    CC_SETONCLICK(callback(script1698, int0, int1, -2147483647));
    IF_SETONSCROLLWHEEL(callback(script1701, int0, int1, -2147483646), int0);
    IF_SETONSCROLLWHEEL(callback(script1701, int0, int1, -2147483646), int1);
    script14179(int0, int1);
    return;
}