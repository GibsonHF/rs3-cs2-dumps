//
function script3620(int0: int, int1: unknown_int): void {
    if ((CC_FIND(comp(634, 24), int0) == 1)) {
        varclient_6739 = MIN(10515, MAX(0, (CC_GETY() - 400)));
    };
    if ((int1 == 1)) {
        IF_SETSCROLLPOS(0, varclient_6739, comp(634, 10));
        varclient_6741 = varclient_6739;
        varclient_6739 = 0;
    } else {
        varclient_6740 = IF_GETSCROLLY(comp(634, 10));
    };
    return;
}