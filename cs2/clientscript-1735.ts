//
function script1735(int0: component, int1: int): void {
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETHIDE(false);
        CC_SETONTIMER(callback(script1736, int0, int1));
    };
    return;
}