//
function script19747(int0: int, int1: unknown_int): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1;
    var int9 = -1;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 7717 as cs2enum;
    var int14 = 0;
    var int15 = ENUM_GETOUTPUTCOUNT(int13);
    var int16 = 0;
    while ((int14 < int15)) {
        int16 = enum_getvalue(0, 0, int13, int14);
        [int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, int12] = script8701(int0, int16);
        script19699(int1, int0, int16, int2, int3, int6, int7, int8, int9, int10, int11);
        int14 = (int14 + 1);
    };
    return;
}