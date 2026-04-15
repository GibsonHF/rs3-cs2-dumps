//
function script747(int0: int, int1: unknown_int): void {
    var int2 = IF_GETTRANS(comp(17, 10));
    var int3 = comp(17, 10);
    var int4 = comp(17, 1);
    if ((int1 == 0)) {
        int2 = IF_GETTRANS(comp(1630, 217));
        int3 = comp(1630, 217);
        int4 = comp(1630, 208);
    };
    if ((int2 != int0)) {
        if ((int2 > int0)) {
            IF_SETTRANS(MAX(0, (int2 - 5)), int3);
        } else {
            IF_SETTRANS(MIN(255, (int2 + 5)), int3);
        };
    } else {
        IF_SETONTIMER(callback(), int4);
    };
    return;
}