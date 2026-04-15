//
function script478(int0: cs2enum, int1: int, int2: int): void {
    var int3 = ENUM_GETOUTPUTCOUNT(int0);
    var int4 = 0;
    var int5 = false;
    var int6 = 5;
    var int7 = 5;
    var string0 = "null";
    var int8 = -1 as struct;
    while ((int4 < int3)) {
        int8 = enum_getvalue(0, 73, int0, (int4 + 1));
        string0 = enum_getvalue(0, 36, 1563 as cs2enum, struct_getparam(int8, 460));
        if ((int4 < 32)) {
            int5 = script734(TESTBIT(int1, int4));
        } else {
            int5 = script734(TESTBIT(int2, (int4 - 32)));
        };
        script12501(comp(201, 5), comp(201, 4), 28556 as struct, (8 + ((IF_GETWIDTH(comp(201, 5)) / 2) * MODULO(int4, 2))), int6, ((IF_GETWIDTH(comp(201, 5)) - 20) / 2), 20, IF_GETNEXTSUBID(comp(201, 4)), int5, string0);
        int6 = (int6 + (23 * MODULO(int4, 2)));
        int7 = (int7 + (23 * MODULO((int4 + 1), 2)));
        int4 = (int4 + 1);
    };
    if ((IF_GETHEIGHT(comp(201, 3)) < (int7 + 5))) {
        IF_SETSCROLLSIZE(0, (int7 + 5), comp(201, 3));
        script7791(comp(201, 6), comp(201, 3));
    };
    return;
}