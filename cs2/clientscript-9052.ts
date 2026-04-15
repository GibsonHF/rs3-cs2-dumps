//
function script9052(int0: unknown_int): unknown_int {
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(14100 as cs2enum);
    var int3 = -1 as cs2enum;
    while ((int1 < int2)) {
        int3 = enum_getvalue(0, 26, 14100 as cs2enum, int1);
        if ((enum_hasoutput(33, int3, int0) == 1)) {
            return 1;
        };
        int1 = (int1 + 1);
    };
    return 0;
}