//
function script15920(int0: unknown_int, int1: component, int2: int, int3: component): void {
    if ((CC_FIND(int1, int2) == 1)) {
        if ((int0 == 1)) {
            IF_SETHIDE(false, int3);
            IF_SETPOSITION(CC_GETX(), CC_GETY(), 0, 0, int3);
            IF_SETSIZE(0, CC_GETHEIGHT(), 1, 0, int3);
        } else {
            IF_SETHIDE(true, int3);
        };
    };
    return;
}