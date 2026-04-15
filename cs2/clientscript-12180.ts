//
function script12180(int0: component, int1: int, int2: int): void {
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETONTIMER(callback());
    };
    if ((CC_FIND(int0, int2) == 1)) {
        CC_SETHIDE(false);
    };
    return;
}