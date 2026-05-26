//
function script1738(int0: number, int1: number): void {
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETTRANS(0);
        CC_SETONTIMER(callback());
    };
    return;
}