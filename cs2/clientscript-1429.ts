//
function script1429(int0: number, int1: number): void {
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETONCLICKREPEAT(callback());
        CC_SETONRELEASE(callback());
        CC_SETONTIMER(callback());
    };
    return;
}