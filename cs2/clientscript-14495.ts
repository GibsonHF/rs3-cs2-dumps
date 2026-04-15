//
function script14495(int0: struct): int {
    var int1 = struct_getparam(int0, 6426);
    if ((int1 == -1 as cs2enum)) {
        return 0;
    };
    var int2 = ENUM_GETOUTPUTCOUNT(int1);
    var int3 = -1 as dbrow;
    var int4 = 0;
    var int5 = -1;
    while ((++int5 < int2)) {
        int3 = enum_getvalue(0, 74, int1, int5);
        if ((script14630(int3) == 1)) {
            int4 = SETBIT(int4, int5);
        };
    };
    return int4;
}