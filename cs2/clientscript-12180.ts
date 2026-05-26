//
function script12180(int0: number, int1: number, int2: number): void {
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETONTIMER(callback());
    };
    if ((CC_FIND(int0, int2) == 1)) {
        CC_SETHIDE(0);
    };
    return;
}