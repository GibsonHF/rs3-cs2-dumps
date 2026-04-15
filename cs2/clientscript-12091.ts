//
function script12091(int0: component, int1: int): void {
    if ((int1 == -1)) {
        IF_SETONMOUSEREPEAT(callback(), int0);
    } else if ((CC_FIND(int0, int1) == 1)) {
        CC_SETONMOUSEREPEAT(callback());
    };
    return;
}