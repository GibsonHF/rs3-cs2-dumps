//
function script301(int0: unknown_int, int1: component, int2: int, int3: int, int4: int, int5: int): void {
    if ((CC_FIND(int1, int2) == 1)) {
        CC_SETCOLOUR(int5);
    };
    if (((int3 != -1) && (CC_FIND(int1, int3) == 1))) {
        CC_SETCOLOUR(int5);
    };
    if ((int0 == 1)) {
        if ((CC_FIND(int1, int4) == 1)) {
            CC_SETHIDE(false);
        };
    } else if ((CC_FIND(int1, int4) == 1)) {
        CC_SETHIDE(true);
    };
    return;
}