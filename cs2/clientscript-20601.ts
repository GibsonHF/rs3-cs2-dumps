//
function script20601(int0: number, int1: number, int2: number): void {
    if ((int0 == 1)) {
        if ((CC_FIND(comp(1494, 12), int1) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(comp(1494, 12), int2) == 1)) {
            CC_SETHIDE(false);
        };
    } else {
        if ((CC_FIND(comp(1494, 12), int1) == 1)) {
            CC_SETHIDE(false);
        };
        if ((CC_FIND(comp(1494, 12), int2) == 1)) {
            CC_SETHIDE(true);
        };
    };
    return;
}