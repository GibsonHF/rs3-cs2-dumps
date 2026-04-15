//
function script12887(int0: component, int1: int): void {
    if ((CC_FIND(int0, int1) == 1)) {
        if ((CC_GETHEIGHT() == 17)) {
            CC_SETONTIMER(callback());
        };
        CC_SETHIDE(false);
        CC_SETSIZE(3, MIN(17, (CC_GETHEIGHT() + 1)), 0, 0);
    };
    return;
}