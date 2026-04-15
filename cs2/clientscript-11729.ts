//
function script11729(int0: int, int1: component, int2: component): void {
    if ((int0 > IF_GETHEIGHT(int1))) {
        IF_SETSCROLLSIZE(0, int0, int1);
        script7791(int2, int1);
    } else {
        IF_SETSCROLLSIZE(0, 0, int1);
        CC_DELETEALL(int2);
    };
    return;
}