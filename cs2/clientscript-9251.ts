//
function script9251(int0: inv, int1: obj, int2: int): int {
    if ((int0 == -1 as inv)) {
        return -1;
    };
    var int3 = INV_SIZE(int0);
    while (((INV_GETOBJ(int0, int2) != int1) && (int2 < int3))) {
        var int2 = (int2 + 1);
    };
    if ((int2 >= int3)) {
        return -1;
    };
    return int2;
}