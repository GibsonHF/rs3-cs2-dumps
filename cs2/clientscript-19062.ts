//
function script19062(): number {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    [int0, int1, int2, int3, int4] = script19637();
    return MAX(MAX(MAX(ENUM_GETOUTPUTCOUNT(int0), ENUM_GETOUTPUTCOUNT(int1)), MAX(ENUM_GETOUTPUTCOUNT(int2), ENUM_GETOUTPUTCOUNT(int3))), ENUM_GETOUTPUTCOUNT(int4));
}