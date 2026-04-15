//
function script11867(): int {
    var int0 = 0;
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(7674 as cs2enum);
    var int3 = -1 as stat;
    while ((int1 < int2)) {
        int3 = struct_getparam(enum_getvalue(0, 73, 7674 as cs2enum, int1), 3440);
        if ((script10782(int3) == script10781(int3))) {
            int0 = (int0 + script11849(int3, script10783(int3), -1));
        } else {
            int0 = (int0 + script10782(int3));
        };
        int1 = (int1 + 1);
    };
    return int0;
}