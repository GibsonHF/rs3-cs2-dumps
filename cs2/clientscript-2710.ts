//
function script2710(): void {
    script2707();
    CC_DELETEALL(comp(324, 47));
    CC_DELETEALL(comp(324, 48));
    CC_DELETEALL(comp(324, 49));
    IF_SETHIDE(true, comp(324, 21));
    var int0 = comp(-1, 65535);
    var int1 = 0;
    if ((varclient_6502 == 1)) {
        IF_SETPOSITION(0, ((5 + IF_GETY(comp(324, 20))) + IF_GETHEIGHT(comp(324, 20))), 0, 0, comp(324, 21));
        int0 = comp(324, 23);
        int1 = script7593(IF_GETTEXT(int0), IF_GETWIDTH(int0), IF_GETFONTMETRICS(int0), -1);
        IF_SETSIZE(0, (3 + int1), 1, 0, comp(324, 22));
        IF_SETPOSITION(0, (5 + IF_GETHEIGHT(comp(324, 22))), 0, 0, comp(324, 46));
        int1 = script2970(comp(324, 47), comp(324, 48), comp(324, 49), 1293 as dbrow, 0, 0, IF_GETWIDTH(comp(324, 21)));
        IF_SETSIZE(0, int1, 1, 0, comp(324, 46));
        IF_SETSIZE(16, (IF_GETY(comp(324, 46)) + IF_GETHEIGHT(comp(324, 46))), 1, 0, comp(324, 21));
        int1 = (IF_GETY(comp(324, 21)) + IF_GETHEIGHT(comp(324, 21)));
        IF_SETSCROLLSIZE(0, int1, comp(324, 13));
        script7791(comp(324, 14), comp(324, 13));
        IF_SETHIDE(false, comp(324, 21));
        IF_SETHIDE(false, comp(324, 14));
    } else {
        int0 = comp(324, 20);
        int1 = ((5 + IF_GETY(int0)) + IF_GETHEIGHT(int0));
        IF_SETSCROLLPOS(0, MAX(0, MIN(int1, IF_GETSCROLLY(comp(324, 13)))), comp(324, 13));
        if ((int1 > IF_GETHEIGHT(comp(324, 13)))) {
            IF_SETHIDE(false, comp(324, 14));
            IF_SETSCROLLSIZE(0, int1, comp(324, 13));
            script7791(comp(324, 14), comp(324, 13));
        } else {
            IF_SETHIDE(true, comp(324, 14));
            IF_SETSCROLLSIZE(0, 0, comp(324, 13));
        };
    };
    return;
}