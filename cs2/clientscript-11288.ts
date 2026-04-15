//
function script11288(int0: unknown_int, int1: cs2enum): void {
    var int2 = comp(645, 8);
    var int3 = comp(645, 9);
    var int4 = comp(645, 11);
    var int5 = comp(645, 12);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    var int6 = ENUM_GETOUTPUTCOUNT(int1);
    var int7 = 0;
    var int8 = -1 as struct;
    var int9 = IF_GETWIDTH(int2);
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = -1;
    var int14 = 0;
    var string0 = "";
    while ((++int13 < int6)) {
        int7 = enum_getvalue(0, 0, int1, int13);
        [int14, string0] = script236(int0, int7);
        if ((int14 == 1)) {
            int8 = 35508 as struct;
        } else {
            int8 = 35515 as struct;
        };
        if (((int13 > 0) && (MODULO(int13, 2) == 0))) {
            [int11, int12] = [0, ((int12 + 20) + 4)];
            int10 = (int12 + 20);
        };
        script12501(int2, int3, int8, int11, int12, ((int9 / 2) - 2), 20, int13, false, enum_getvalue(0, 36, 6187 as cs2enum, int7));
        if ((CC_FIND(int2, ((int13 * 11) + 9)) == 1)) {
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETMAXLINES(1);
        };
        if ((CC_FIND(int3, int13) == 1)) {
            CC_SETOPBASE(enum_getvalue(0, 36, 6187 as cs2enum, int7));
            CC_SETOPCURSOR(1, 46);
        };
        int11 = ((int9 / 2) + 2);
    };
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(int4), int10), int4);
    IF_SETSCROLLPOS(0, IF_GETSCROLLY(int4), int4);
    script7791(int5, int4);
    return;
}