//
function script14671(int0: cs2enum): int {
    var int1 = ENUM_GETOUTPUTCOUNT(int0);
    var int2 = -1 as dbrow;
    var int3 = -1;
    while ((++int3 < int1)) {
        int2 = enum_getvalue(0, 74, int0, int3);
        if ((script14669(int2) == 1)) {
            return int3;
        };
    };
    return -1;
}