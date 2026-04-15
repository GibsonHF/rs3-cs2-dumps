//
function script58(int0: int, int1: unknown_int, int2: int, int3: int): void {
    if ((int1 == -1)) {
        var int1 = CAM2_ADDEFFECT_ZTILT(0);
    };
    script9193(int1, int0);
    if ((int3 > int0)) {
        var int0 = MIN(int3, (int0 + int2));
    } else {
        int0 = MAX(int3, (int0 - int2));
    };
    if ((int0 == int3)) {
        IF_SETONTIMER(callback(), comp(1465, 20));
    } else {
        IF_SETONTIMER(callback(script58, int0, int1, int2, int3), 96010260);
    };
    return;
}