//
function script13029(): [stat, stat, stat, stat, stat, stat] {
    var int0 = -1 as stat;
    var int1 = -1 as stat;
    var int2 = -1 as stat;
    var int3 = -1 as stat;
    var int4 = -1 as stat;
    var int5 = -1 as stat;
    var int6 = -1 as stat;
    var int7 = -1 as stat;
    var int8 = -1 as stat;
    var int9 = -1 as stat;
    var int10 = -1 as stat;
    var int11 = -1 as stat;
    var int12 = 1;
    var int13 = ENUM_GETOUTPUTCOUNT(681 as cs2enum);
    var int14 = -1 as stat;
    while ((int12 <= int13)) {
        int14 = enum_getvalue(0, 17, 681 as cs2enum, int12);
        [int0, int1, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11] = script13030(int0, int1, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, int14);
        int12 = (int12 + 1);
    };
    if ((int0 == -1 as stat)) {
        int0 = int6;
    };
    if ((int1 == -1 as stat)) {
        int1 = int7;
    };
    if ((int2 == -1 as stat)) {
        int2 = int8;
    };
    if ((int3 == -1 as stat)) {
        int3 = int9;
    };
    if ((int4 == -1 as stat)) {
        int4 = int10;
    };
    if ((int5 == -1 as stat)) {
        int5 = int11;
    };
    return [int0, int1, int2, int3, int4, int5];
}