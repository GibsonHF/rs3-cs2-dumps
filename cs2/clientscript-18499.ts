//
function script18499(int0: struct, int1: int): int {
    if (((int0 == -1 as struct) || (int1 == 0))) {
        return 0;
    };
    var int2 = struct_getparam(int0, 3839);
    if ((int2 == -1 as cs2enum)) {
        return 0;
    };
    var int3 = ENUM_GETOUTPUTCOUNT(int2);
    if ((int3 == 0)) {
        return 0;
    };
    if ((enum_hasoutput(0, int2, int1) == 0)) {
        return 0;
    };
    var int4 = enum_getreverseindex(0, 0, int2, int1, 0);
    var int5 = 0;
    while ((int4 < int3)) {
        int5 = enum_getvalue(0, 0, int2, int4);
        if ((enum_getvalue(0, 0, int2, (int4 + 1)) != (int5 - 1))) {
            return ((int1 - int5) + 1);
        };
        int4 = (int4 + 1);
    };
    script12478("Treasure Hunter Banner Reward Track failed to find the current promo day.");
    return 0;
}