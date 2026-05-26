//
function script10944(int0: number, int1: number, int2: number): void {
    if ((int0 > IF_GETHEIGHT(int1))) {
        IF_SETSCROLLSIZE(0, int0, int1);
        IF_SETHIDE(0, int2);
    } else {
        IF_SETSCROLLSIZE(0, 0, int1);
        IF_SETHIDE(1, int2);
    };
    script7791(int2, int1);
    return;
}