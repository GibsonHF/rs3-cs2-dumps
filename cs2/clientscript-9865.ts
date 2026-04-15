//
function script9865(int0: obj, int1: obj): unknown_int {
    if ((item_getparam(int0, 4338) != -1 as obj)) {
        var int0 = item_getparam(int0, 4338);
    };
    if (((int0 != -1 as obj) && (item_getparam(int0, 4329) == 1))) {
        return 1;
    };
    if ((item_getparam(int1, 4338) != -1 as obj)) {
        var int1 = item_getparam(int1, 4338);
    };
    if (((int1 != -1 as obj) && (item_getparam(int1, 4329) == 1))) {
        return 2;
    };
    return 0;
}