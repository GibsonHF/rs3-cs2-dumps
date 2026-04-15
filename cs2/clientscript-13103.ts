//
function script13103(int0: inv, int1: int): int {
    var int2 = -1;
    if (((int1 < 0) || (INV_SIZE(int0) <= int1))) {
        return int2;
    };
    var int3 = INV_GETOBJ(int0, int1);
    if ((int3 == -1 as obj)) {
        return int2;
    };
    if ((item_getparam(int3, 2500) != -1 as struct)) {
        int2 = INV_GETVAR(int0, int1, 4289);
    };
    return int2;
}