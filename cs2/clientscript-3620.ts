//
function script3620(int0: number, int1: number): void {
    if ((CC_FIND(41549848, int0) == 1)) {
        varclient_6739 = MIN(10515, MAX(0, (CC_GETY() - 400)));
    };
    if ((int1 == 1)) {
        IF_SETSCROLLPOS(0, varclient_6739, 41549834);
        varclient_6741 = varclient_6739;
        varclient_6739 = 0;
    } else {
        varclient_6740 = IF_GETSCROLLY(41549834);
    };
    return;
}