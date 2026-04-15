//
function script7665(int0: int): void {
    var int1 = 0;
    if ((int0 == 1)) {
        int1 = ((PARAHEIGHT(varclient_2758, IF_GETWIDTH(comp(1405, 12)), 26 as fontmetrics) * 12) + 12);
        if ((int1 < IF_GETHEIGHT(comp(1405, 1)))) {
            IF_SETHIDE(true, comp(1405, 13));
        } else {
            IF_SETHIDE(false, comp(1405, 13));
        };
        IF_SETSCROLLSIZE(IF_GETSCROLLWIDTH(comp(1405, 1)), int1, comp(1405, 1));
        script31(comp(1405, 13), comp(1405, 1), 7900 as graphic, 7897 as graphic, 7898 as graphic, 7899 as graphic, 7902 as graphic, 7901 as graphic);
        script958(comp(1405, 12), comp(1405, 15), varclient_2758, int0);
    } else if ((int0 == 2)) {
        int1 = ((PARAHEIGHT(varclient_2759, IF_GETWIDTH(comp(1405, 26)), 26 as fontmetrics) * 12) + 12);
        if ((int1 < IF_GETHEIGHT(comp(1405, 25)))) {
            IF_SETHIDE(true, comp(1405, 28));
        } else {
            IF_SETHIDE(false, comp(1405, 28));
        };
        IF_SETSCROLLSIZE(IF_GETSCROLLWIDTH(comp(1405, 25)), int1, comp(1405, 25));
        script31(comp(1405, 28), comp(1405, 25), 7900 as graphic, 7897 as graphic, 7898 as graphic, 7899 as graphic, 7902 as graphic, 7901 as graphic);
        script958(comp(1405, 26), comp(1405, 27), varclient_2759, int0);
    };
    return;
}