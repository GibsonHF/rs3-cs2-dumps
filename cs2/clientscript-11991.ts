//
function script11991(int0: component, int1: int, int2: int): void {
    if ((IF_GETHEIGHT(int0) == int2)) {
        IF_SETONTIMER(callback(), int0);
        script4903();
        return;
    };
    if ((IF_GETHEIGHT(int0) > int2)) {
        IF_SETSIZE(0, MAX(int2, (IF_GETHEIGHT(int0) - int1)), 1, 0, int0);
    } else if ((IF_GETHEIGHT(int0) < int2)) {
        IF_SETSIZE(0, MIN(int2, (IF_GETHEIGHT(int0) + int1)), 1, 0, int0);
    };
    return;
}