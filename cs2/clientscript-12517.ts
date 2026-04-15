//
function script12517(int0: inv, int1: obj, int2: int): int {
    if ((int0 == -1 as inv)) {
        return -1;
    };
    var int3 = INV_SIZE(int0);
    if (((int2 < 0) || (int2 >= int3))) {
        return -1;
    };
    if ((INV_TOTAL(int0, int1) < 1)) {
        return -1;
    };
    var int4 = -1 as obj;
    while ((int2 < int3)) {
        int4 = INV_GETOBJ(int0, int2);
        if ((int4 == int1)) {
            return int2;
        };
        var int2 = (int2 + 1);
    };
    return -1;
}