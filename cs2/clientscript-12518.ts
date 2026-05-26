//
function script12518(int0: number, int1: number, int2: number): number {
    if ((int0 == -1)) {
        return -1;
    };
    var int3 = INV_SIZE(int0);
    if (((int2 < 0) || (int2 >= int3))) {
        return -1;
    };
    var int4 = -1;
    while ((int2 < int3)) {
        int4 = INV_GETOBJ(int0, int2);
        if (((int4 != -1) && (OC_CATEGORY(int4) == int1))) {
            return int2;
        };
        var int2 = (int2 + 1);
    };
    return -1;
}