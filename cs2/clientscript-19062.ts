//
function script19062(): int {
    var int0 = -1 as cs2enum;
    var int1 = -1 as cs2enum;
    var int2 = -1 as cs2enum;
    var int3 = -1 as cs2enum;
    var int4 = -1 as cs2enum;
    [int0, int1, int2, int3, int4] = script19637();
    return MAX(MAX(MAX(ENUM_GETOUTPUTCOUNT(int0), ENUM_GETOUTPUTCOUNT(int1)), MAX(ENUM_GETOUTPUTCOUNT(int2), ENUM_GETOUTPUTCOUNT(int3))), ENUM_GETOUTPUTCOUNT(int4));
}