//
function script14390(int0: unknown_int, int1: component, int2: int): void {
    if ((CC_FIND(int1, int2) == 1)) {
        if ((int0 == 1)) {
            IF_SETHIDE(false, comp(517, 274));
            IF_SETPOSITION(CC_GETX(), CC_GETY(), 0, 0, comp(517, 274));
            IF_SETSIZE(0, (CC_GETHEIGHT() + 2), 1, 0, comp(517, 274));
        } else {
            IF_SETHIDE(true, comp(517, 274));
        };
    };
    return;
}