//
function script20601(int0: number, int1: number, int2: number): void {
    if ((int0 == 1)) {
        if ((CC_FIND(97910796, int1) == 1)) {
            CC_SETHIDE(1);
        };
        if ((CC_FIND(97910796, int2) == 1)) {
            CC_SETHIDE(0);
        };
    } else {
        if ((CC_FIND(97910796, int1) == 1)) {
            CC_SETHIDE(0);
        };
        if ((CC_FIND(97910796, int2) == 1)) {
            CC_SETHIDE(1);
        };
    };
    return;
}