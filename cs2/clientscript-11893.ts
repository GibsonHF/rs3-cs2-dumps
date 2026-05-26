//
function script11893(int0: number, int1: number, int2: number): void {
    if ((IF_FIND(int0) == 1)) {
        if ((CC_GETHEIGHT() < int2)) {
            CC_SETSIZE(3, MIN(int2, (CC_GETHEIGHT() + 2)), 0, 0);
            CC_SETONTIMER(callback(script11893, int0, int1, int2));
        } else {
            CC_SETONTIMER(callback());
        };
    };
    return;
}