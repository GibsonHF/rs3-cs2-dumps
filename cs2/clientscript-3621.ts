//
function script3621(): void {
    if (((varclient_6739 == 0) && (varclient_6740 == 0))) {
        return;
    };
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    stack(11946);
    stack(41549867);
    IF_SETGRAPHIC();
    IF_SETMOUSEOVERCURSOR(46, 41549867);
    int1 = (varclient_6739 - varclient_6740);
    if ((int1 != 0)) {
        int2 = (varclient_6739 - IF_GETSCROLLY(comp(634, 10)));
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
    varclient_6741 = IF_GETSCROLLY(comp(634, 10));
    IF_SETSCROLLPOS(IF_GETSCROLLX(comp(634, 10)), (IF_GETSCROLLY(comp(634, 10)) + int0), comp(634, 10));
    script3660(IF_GETSCROLLY(comp(634, 10)));
    return;
}