//
function script10944(int0: int, int1: component, int2: component): void {
    if ((int0 > IF_GETHEIGHT(int1))) {
        IF_SETSCROLLSIZE(0, int0, int1);
        IF_SETHIDE(false, int2);
    } else {
        IF_SETSCROLLSIZE(0, 0, int1);
        IF_SETHIDE(true, int2);
    };
    script7791(int2, int1);
    return;
}