//
function script11480(int0: inv, int1: int, int2: int): int {
    if (((((int0 == -1 as inv) || (int1 < 0)) || (int2 < 0)) || (int2 < int1))) {
        return 0;
    };
    var int2 = MIN(int2, INV_SIZE(int0));
    var int3 = 0;
    while ((int1 < int2)) {
        if ((INV_GETOBJ(int0, int1) != -1 as obj)) {
            int3 = (int3 + 1);
        };
        var int1 = (int1 + 1);
    };
    return int3;
}