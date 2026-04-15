//
function script7752(int0: inv, int1: obj, int2: int): unknown_int {
    var int3 = item_getparam(int1, 4068);
    if (((int3 == -1 as cs2enum) && (int2 < 1))) {
        return 1;
    };
    if (((int3 == -1 as cs2enum) && (int2 >= 1))) {
        return 0;
    };
    var int4 = ENUM_GETOUTPUTCOUNT(int3);
    var int5 = -1 as obj;
    var int6 = 0;
    var int7 = 0;
    while ((int7 < int4)) {
        int5 = enum_getvalue(0, 33, int3, int7);
        if (((int5 != -1 as obj) && (INV_TOTAL(int0, int5) > 0))) {
            int6 = 1;
            int7 = int4;
        };
        int7 = (int7 + 1);
    };
    if (((int6 == 1) && ((int2 < 1) || ((int2 >= 1) && (script10504(int5, int2) == 1))))) {
        return 1;
    };
    return 0;
}