//
function script11821(int0: int, int1: unknown_int, int2: struct, int3: unknown_int): void {
    var int4 = 114163736;
    var int5 = comp(1742, 16);
    var int6 = IF_GETWIDTH(comp(1742, 54));
    var int7 = (int6 / 10);
    script9554(comp(1742, 14), comp(1742, 29), comp(1742, 15), struct_getparam(int2, 5675), 21218 as struct);
    var int8 = MAX(1, (SCALE(int0, 1000, int6) + 1));
    IF_SETONTIMER(callback(script11858, int0, int1, int8, int7, 114163764, 114163766), 114163766);
    var int9 = MAX(1, (SCALE(int1, 1000, int6) + 1));
    IF_SETONTIMER(callback(script11858, int0, int1, int9, int7, 114163790, 114163789), 114163789);
    var string0 = "";
    var int10 = 0;
    CC_DELETEALL(int4);
    int10 = 0;
    var int11 = 1;
    var int12 = 104;
    var int13 = 0;
    var int14 = -1;
    var int15 = -1;
    var int16 = -1;
    var int17 = -1;
    var int18 = script11838(int2);
    var int19 = MIN(SCALE(int0, 1000, 100), SCALE(int1, 1000, 100));
    while ((int11 <= 10)) {
        int13 = (int12 + (60 * int11));
        int10 = IF_GETNEXTSUBID(int5);
        if ((int19 >= (int11 * 10))) {
            int17 = 28303 as struct;
        } else {
            int17 = 21363 as struct;
        };
        script10764(int5, int17, (int13 - 18), 131, 36, 36, -1);
        int14 = enum_getvalue(0, 33, int18, (int11 - 1));
        CC_CREATE(int5, 6, IF_GETNEXTSUBID(int5));
        CC_SETOBJECT(int14, 1);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION((int13 - 18), 133, 0, 0);
        [int14, int15, int16] = script13265(int14);
        int16 = 819 as inv;
        if (((int15 != -1 as obj) && (int15 != int14))) {
            script14994(int14, -1 as inv, -1, int15, int16, 1);
        } else {
            script14994(int14, -1 as inv, -1, int15, int16, 0);
        };
        if ((int19 < (int11 * 10))) {
            CC_CREATE(int5, 5, IF_GETNEXTSUBID(int5));
            CC_SETGRAPHIC(14794 as graphic);
            CC_SETSIZE(36, 36, 0, 0);
            CC_SETPOSITION((int13 - 18), 131, 0, 0);
        };
        if ((MODULO(int11, 2) == 1)) {
            CC_CREATE(int5, 5, IF_GETNEXTSUBID(int5));
            CC_SETGRAPHIC(18390 as graphic);
            CC_SETPOSITION((int13 - 55), 178, 0, 0);
            CC_SETSIZE(110, 90, 0, 0);
            CC_CREATE(int5, 4, IF_GETNEXTSUBID(int5));
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETCOLOUR(script10495(3));
            CC_SETTEXT(item_getparam(int14, 4085));
            CC_SETPOSITION((int13 - 48), 183, 0, 0);
            CC_SETSIZE(95, 80, 0, 0);
            CC_SETTEXTALIGN(1, 1, 12);
        };
        int11 = (int11 + 1);
    };
    return;
}