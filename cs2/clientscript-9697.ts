//
function script9697(int0: inv, int1: int): unknown_int {
    var int2 = INV_GETOBJ(int0, int1);
    var int3 = item_getparam(int2, 8605);
    if (((int3 >= 1) && (INV_GETVAR(int0, int1, 50372) == 0))) {
        return 0;
    };
    if (((int3 >= 2) && (INV_GETVAR(int0, int1, 50374) == 0))) {
        return 1;
    };
    if (((int3 >= 3) && (INV_GETVAR(int0, int1, 50378) == 0))) {
        return 2;
    };
    return -1;
}