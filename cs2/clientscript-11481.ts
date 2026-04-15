//
function script11481(int0: inv, int1: obj, int2: int, int3: int): unknown_int {
    if ((((((int0 == -1 as inv) || (int1 == -1 as obj)) || (int2 < 0)) || (int3 < 0)) || (int3 < int2))) {
        return 0;
    };
    var int3 = MIN(int3, INV_SIZE(int0));
    var int4 = 0;
    while ((int2 < int3)) {
        if ((INV_GETOBJ(int0, int2) == int1)) {
            int4 = (int4 + 1);
        };
        if ((int4 > 1)) {
            return 1;
        };
        var int2 = (int2 + 1);
    };
    return 0;
}