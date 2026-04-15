//
function script7627(int0: int, int1: int): void {
    var int0 = (int0 - script351(int0, int1));
    var int2 = ((int0 * (32 + 4)) - 4);
    if ((int2 > IF_GETHEIGHT(comp(709, 4)))) {
        IF_SETSIZE((IF_GETWIDTH(comp(709, 4)) - 18), IF_GETHEIGHT(comp(850, 0)), 0, 0, comp(850, 0));
        IF_SETSCROLLSIZE(0, int2, comp(850, 0));
        IF_SETSCROLLPOS(0, 0, comp(850, 0));
        script7791(comp(850, 3), comp(850, 0));
    } else {
        IF_SETSIZE(0, 0, 1, 1, comp(850, 0));
        IF_SETSCROLLPOS(0, 0, comp(850, 0));
        IF_SETSCROLLSIZE(0, 0, comp(850, 0));
        CC_DELETEALL(comp(850, 3));
    };
    return;
}