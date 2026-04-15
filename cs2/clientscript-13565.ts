//
function script13565(int0: int, int1: unknown_int): int {
    var int2 = 1;
    var int3 = ENUM_GETOUTPUTCOUNT(681 as cs2enum);
    var int4 = -1 as stat;
    while ((int2 <= int3)) {
        int4 = enum_getvalue(0, 17, 681 as cs2enum, int2);
        if ((int4 != -1 as stat)) {
            if ((int1 == 1)) {
                if ((STAT_BASE(int4) >= int0)) {
                    return 1;
                };
            } else if ((STAT_BASE(int4) > int0)) {
                return 1;
            };
        };
        int2 = (int2 + 1);
    };
    return 0;
}