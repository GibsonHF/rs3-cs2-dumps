//
function script301(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((CC_FIND(int1, int2) == 1)) {
        CC_SETCOLOUR(int5);
    };
    if (((int3 != -1) && (CC_FIND(int1, int3) == 1))) {
        CC_SETCOLOUR(int5);
    };
    if ((int0 == 1)) {
        if ((CC_FIND(int1, int4) == 1)) {
            CC_SETHIDE(0);
        };
    } else if ((CC_FIND(int1, int4) == 1)) {
        CC_SETHIDE(1);
    };
    return;
}