//
function script6687(int0: obj, int1: int, int2: unknown_int): unknown_int {
    if ((script4034(int0) == 1)) {
        var int0 = 20767 as obj;
    };
    if ((item_getparam(int0, 258) == 0)) {
        return 0;
    };
    if (((item_getparam(int0, 6295) == 1) || (item_getparam(int0, 7393) == 1))) {
        return script13041(int0, int1, int2);
    };
    if (((int2 == 1) && (item_getparam(int0, 4244) == 0))) {
        return 0;
    };
    if (((int1 == 31) && (item_getparam(int0, 6296) == 1))) {
        return 1;
    };
    if ((enum_getvalue(0, 17, 681 as cs2enum, int1) != item_getparam(int0, 277))) {
        return 0;
    };
    return 1;
}