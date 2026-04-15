//
function script582(int0: component, int1: component, int2: int): void {
    if (((int0 == comp(-1, 65535)) || (int1 == comp(-1, 65535)))) {
        return;
    };
    IF_SETSCROLLPOS(0, IF_GETSCROLLY(int1), int1);
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(int1), (int2 * (113 + 6))), int1);
    script7791(int0, int1);
    return;
}