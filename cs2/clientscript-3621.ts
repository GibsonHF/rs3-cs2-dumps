//
function script3621(): void {
    if (((varclient_6739 == 0) && (varclient_6740 == 0))) {
        return;
    };
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    IF_SETGRAPHIC(11946, 41549867);
    IF_SETMOUSEOVERCURSOR(46, 41549867);
    int1 = (varclient_6739 - varclient_6740);
    if ((int1 != 0)) {
        int2 = (varclient_6739 - IF_GETSCROLLY(41549834));
        int0 = (int1 / 50);
        int0 = (((2 * int0) * int2) / int1);
        if ((int0 > 0)) {
            int0 = MIN(MAX(25, int0), int2);
        } else {
            int0 = MAX(MIN((0 - 25), int0), int2);
        };
    };
    if ((ABS(int0) < 5)) {
        varclient_6739 = 0;
        varclient_6740 = 0;
    };
    varclient_6741 = IF_GETSCROLLY(41549834);
    IF_SETSCROLLPOS(IF_GETSCROLLX(41549834), (IF_GETSCROLLY(41549834) + int0), 41549834);
    script3660(IF_GETSCROLLY(41549834));
    return;
}