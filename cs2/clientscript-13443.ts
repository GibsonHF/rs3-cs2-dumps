//
function script13443(int0: number, int1: number): void {
    if ((CC_FIND(int0, int1) == 1)) {
        if ((CC_GETWIDTH() == 17)) {
            CC_SETONTIMER(callback());
        };
        CC_SETHIDE(false);
        CC_SETSIZE(MIN(17, (CC_GETHEIGHT() + 1)), 3, 0, 0);
    };
    return;
}