//[proc,makeover_colour]
function script2380(int0: number, int1: number): void {
    if ((int1 == 58982404)) {
        IF_SETHIDE(1, 58982417);
    } else {
        IF_SETHIDE(1, 58982404);
    };
    if ((int0 == -1)) {
        IF_SETHIDE(1, int1);
        return;
    };
    IF_SETHIDE(0, int1);
    IF_SETPOSITION((IF_GETX(int0) + ((IF_GETWIDTH(int0) - IF_GETWIDTH(int1)) / 2)), (IF_GETY(int0) + ((IF_GETHEIGHT(int0) - IF_GETHEIGHT(int1)) / 2)), 0, 0, int1);
    return;
}