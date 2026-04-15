//
function script3516(int0: int, int1: component, int2: component): void {
    if ((IF_GETSCROLLY(int1) > int0)) {
        IF_SETSCROLLPOS(0, 0, int1);
    };
    if ((int0 > IF_GETHEIGHT(int1))) {
        IF_SETSIZE(16, 60, 1, 1, int1);
        IF_SETSCROLLSIZE(0, int0, int1);
        script7791(int2, int1);
    } else {
        IF_SETSIZE(0, 60, 1, 1, int1);
        IF_SETSCROLLPOS(0, 0, int1);
        IF_SETSCROLLSIZE(0, 0, int1);
        CC_DELETEALL(int2);
    };
    return;
}