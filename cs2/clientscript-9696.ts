//
function script9696(int0: inv, int1: int, int2: unknown_int): int {
    var int3 = -1 as obj;
    if ((int0 == 94 as inv)) {
        int3 = INV_GETOBJ(94 as inv, 13);
        if ((int3 == -1 as obj)) {
            return -1;
        };
        if ((OC_CATEGORY(int3) != 5087 as category)) {
            return -1;
        };
    };
    if ((enum_getreversecount(33, 16608 as cs2enum, int2) == 0)) {
        return -1;
    };
    var int4 = enum_getreverseindex(33, 0, 16608 as cs2enum, int2, 0);
    if ((INV_GETVAR(int0, int1, 50372) == int4)) {
        return 0;
    };
    if ((INV_GETVAR(int0, int1, 50374) == int4)) {
        return 1;
    };
    if ((INV_GETVAR(int0, int1, 50378) == int4)) {
        return 2;
    };
    return -1;
}