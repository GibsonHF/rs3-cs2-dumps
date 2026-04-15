//
function script18898(int0: unknown_int, int1: int): void {
    var int2 = 0;
    CC_DELETEALL(comp(1284, 30));
    if ((int1 <= IF_GETHEIGHT(comp(1284, 22)))) {
        IF_SETHIDE(true, comp(1284, 30));
        IF_SETSCROLLSIZE(0, 0, comp(1284, 22));
        IF_SETSCROLLPOS(0, 0, comp(1284, 24));
    } else {
        if ((int0 == 0)) {
            int2 = MIN(int1, IF_GETSCROLLY(comp(1284, 24)));
        };
        IF_SETHIDE(false, comp(1284, 30));
        IF_SETSCROLLSIZE(0, int1, comp(1284, 22));
        IF_SETSCROLLPOS(0, int2, comp(1284, 24));
        script7791(comp(1284, 30), comp(1284, 22));
    };
    return;
}