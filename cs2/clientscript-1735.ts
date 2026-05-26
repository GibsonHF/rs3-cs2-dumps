//
function script1735(int0: number, int1: number): void {
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETHIDE(false);
        CC_SETONTIMER(callback(script1736, int0, int1));
    };
    return;
}