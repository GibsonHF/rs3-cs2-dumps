//
function script7167(int0: int, int1: unknown_int): unknown_int {
    var int2 = 1;
    var int3 = enum_getvalue(0, 17, 681 as cs2enum, int2);
    while ((int3 != -1 as stat)) {
        if ((STAT_BASE(int3) < int0)) {
            if ((int3 != 26 as stat)) {
                return 0;
            };
            if ((int1 == 1)) {
                return 0;
            };
        };
        int2 = (int2 + 1);
        int3 = enum_getvalue(0, 17, 681 as cs2enum, int2);
    };
    return 1;
}