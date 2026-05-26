//
function script9696(int0: number, int1: number, int2: number): number {
    var int3 = -1;
    if ((int0 == 94)) {
        int3 = INV_GETOBJ(94, 13);
        if ((int3 == -1)) {
            return -1;
        };
        if ((OC_CATEGORY(int3) != 5087)) {
            return -1;
        };
    };
    if ((enum_getreversecount(33, 16608, int2) == 0)) {
        return -1;
    };
    var int4 = enum_getreverseindex(33, 0, 16608, int2, 0);
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