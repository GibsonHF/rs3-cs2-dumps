//
function script20601(int0: unknown_int, int1: int, int2: int, int3: int): void {
    if ((int0 == 1)) {
        if ((CC_FIND(comp(1494, 12), int1) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(comp(1494, 12), int2) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(comp(1494, 12), int3) == 1)) {
            CC_SETHIDE(false);
        };
    } else {
        if ((CC_FIND(comp(1494, 12), int1) == 1)) {
            CC_SETHIDE(false);
        };
        if ((CC_FIND(comp(1494, 12), int2) == 1)) {
            CC_SETHIDE(false);
        };
        if ((CC_FIND(comp(1494, 12), int3) == 1)) {
            CC_SETHIDE(true);
        };
    };
    return;
}