//
function script20601(int0: number, int1: number, int2: number, int3: number): void {
    if ((int1 == 1)) {
        if ((CC_FIND(int0, int2) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(int0, int3) == 1)) {
            CC_SETHIDE(false);
        };
    } else {
        if ((CC_FIND(int0, int2) == 1)) {
            CC_SETHIDE(false);
        };
        if ((CC_FIND(int0, int3) == 1)) {
            CC_SETHIDE(true);
        };
    };
    return;
}