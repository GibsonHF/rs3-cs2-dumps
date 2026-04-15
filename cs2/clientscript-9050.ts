//
function script9050(): int {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(14100 as cs2enum);
    var int2 = -1 as cs2enum;
    var int3 = 0;
    while ((int0 < int1)) {
        int2 = enum_getvalue(0, 26, 14100 as cs2enum, int0);
        int3 = (int3 + ENUM_GETOUTPUTCOUNT(int2));
        int0 = (int0 + 1);
    };
    return int3;
}