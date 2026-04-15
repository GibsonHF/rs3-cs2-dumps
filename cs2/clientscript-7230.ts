//
function script7230(int0: unknown_int, int1: unknown_int): int {
    var int2 = -1;
    var int3 = 1;
    while ((int3 < 28)) {
        if ((push_array(int3) == 1)) {
        } else if ((int2 == -1)) {
            int2 = int3;
        } else if ((script7231(enum_getvalue(0, 17, 681 as cs2enum, int3), enum_getvalue(0, 17, 681 as cs2enum, int2), int1) == 1)) {
            int2 = int3;
        };
        int3 = (int3 + 1);
    };
    return int2;
}