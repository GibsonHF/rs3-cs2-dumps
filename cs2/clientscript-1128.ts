//
function script1128(int0: stat, int1: unknown_int): int {
    var int2 = enum_getvalue(0, 0, 7891 as cs2enum, STAT_BASE(int0));
    if ((int1 == 1)) {
        int2 = SCALE(150, 100, int2);
    };
    return int2;
}