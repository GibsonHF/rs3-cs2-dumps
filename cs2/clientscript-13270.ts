//
function script13270(int0: int): unknown_int {
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(5472 as cs2enum);
    var int3 = -1 as stat;
    while ((int1 < int2)) {
        int3 = enum_getvalue(0, 17, 5472 as cs2enum, int1);
        if (((int3 != -1 as stat) && (STAT_BASE(int3) > int0))) {
            return 1;
        };
        int1 = (int1 + 1);
    };
    return 0;
}