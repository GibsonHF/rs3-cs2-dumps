//
function script19070(int0: cs2enum): dbrow {
    var int1 = ENUM_GETOUTPUTCOUNT(int0);
    var int2 = -1 as dbrow;
    var int3 = 0;
    while ((++int3 < (int1 + 1))) {
        int2 = enum_getvalue(0, 74, int0, int3);
        if ((script19068(int2) == 0)) {
            return int2;
        };
    };
    script12478("No blueprints available");
    return -1 as dbrow;
}