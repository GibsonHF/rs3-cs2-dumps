//[proc,makeover_colour]
function script2380(int0: number, int1: number): void {
    if ((int1 == comp(900, 39))) {
        IF_SETHIDE(true, comp(900, 32));
    } else {
        IF_SETHIDE(true, comp(900, 39));
    };
    if ((int0 == comp(-1, 65535))) {
        IF_SETHIDE(true, int1);
        return;
    };
    IF_SETHIDE(false, int1);
    IF_SETPOSITION((IF_GETX(int0) + ((IF_GETWIDTH(int0) - IF_GETWIDTH(int1)) / 2)), (IF_GETY(int0) + ((IF_GETHEIGHT(int0) - IF_GETHEIGHT(int1)) / 2)), 0, 0, int1);
    return;
}