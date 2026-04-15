//
function script753(int0: unknown_int, int1: int, int2: int): int {
    var int3 = 0;
    var int4 = -1 as struct;
    var int5 = 0;
    var int6 = script383(int2);
    while ((int3 < int1)) {
        int4 = enum_getvalue(0, 73, 10680 as cs2enum, int3);
        if ((((int4 != -1 as struct) && (TESTBIT(struct_getparam(int4, 6651), int6) == 1)) && (script19379(int4) == 1))) {
            pop_array(int5, int3);
            int5 = (int5 + 1);
        };
        int3 = (int3 + 1);
    };
    return int5;
}