//
function script473(int0: stat, int1: int, int2: unknown_int): unknown_int {
    var int3 = 1;
    var int4 = -1;
    var int5 = -1 as stat;
    define_array(28);
    while ((int3 < 28)) {
        if ((script7292(enum_getvalue(0, 17, 681 as cs2enum, int3)) >= 2000000000)) {
            pop_array(int3, 1);
        } else {
            pop_array(int3, 0);
        };
        int3 = (int3 + 1);
    };
    if ((script12970(26 as stat) == 0)) {
        pop_array(enum_getvalue(17, 0, 1482 as cs2enum, 26 as stat), 1);
    };
    int3 = 0;
    while ((int3 < int1)) {
        int4 = script7230(0, int2);
        if ((int4 < 1)) {
            return 0;
        };
        int5 = enum_getvalue(0, 17, 681 as cs2enum, int4);
        if ((int0 == int5)) {
            return 1;
        };
        pop_array(int4, 1);
        int3 = (int3 + 1);
    };
    return 0;
}