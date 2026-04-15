//
function script12494(int0: component, int1: unknown_int, int2: int): void {
    if ((IF_FIND(int0) == 1)) {
        if ((CC_GETHEIGHT() < int2)) {
            CC_SETSIZE(3, MIN(int2, (CC_GETHEIGHT() + 2)), 0, 0);
            CC_SETONTIMER(callback(script12494, int0, int1, int2));
        } else {
            CC_SETONTIMER(callback());
        };
    };
    return;
}