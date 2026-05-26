//
function script582(int0: number, int1: number, int2: number): void {
    if (((int0 == -1) || (int1 == comp(-1, 65535)))) {
        return;
    };
    IF_SETSCROLLPOS(0, IF_GETSCROLLY(int1), int1);
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(int1), (int2 * (113 + 6))), int1);
    script7791(int0, int1);
    return;
}