//
function script13305(): unknown_int {
    var int0 = 0;
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(9448 as cs2enum);
    var int3 = -1 as obj;
    while ((int0 < int2)) {
        int3 = enum_getvalue(0, 33, 9448 as cs2enum, int0);
        if (((int3 != -1 as obj) && (item_getparam(int3, 2641) == 62))) {
            int1 = item_getparam(int3, 2646);
            if (((int1 > 0) && (script7611(int1) == 0))) {
                return 0;
            };
        };
        int0 = (int0 + 1);
    };
    return 1;
}