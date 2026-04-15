//
function script13274(int0: int): int {
    var int1 = 1;
    var int2 = ENUM_GETOUTPUTCOUNT(1482 as cs2enum);
    var int3 = -1 as stat;
    while ((int1 <= int2)) {
        int3 = enum_getvalue(0, 17, 681 as cs2enum, int1);
        if ((int3 != -1 as stat)) {
            int3 = enum_getvalue(17, 17, 744 as cs2enum, int3);
            if (((int3 != -1 as stat) && (STAT_BASE(int3) < int0))) {
                return 0;
            };
        };
        int1 = (int1 + 1);
    };
    return 1;
}