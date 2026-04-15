//
function script2684(): void {
    CC_DELETEALL(comp(324, 29));
    CC_DELETEALL(comp(324, 30));
    CC_DELETEALL(comp(324, 31));
    if (((varclient_6502 < 0) || (varclient_6502 > 1))) {
        varclient_6502 = 0;
    };
    var int0 = 0;
    int0 = script2970(comp(324, 29), comp(324, 30), comp(324, 31), 1292 as dbrow, 0, int0, IF_GETWIDTH(comp(324, 19)));
    var int1 = comp(324, 19);
    IF_SETSIZE(16, int0, 1, 0, int1);
    IF_SETPOSITION(0, ((5 + IF_GETY(int1)) + IF_GETHEIGHT(int1)), 0, 0, comp(324, 20));
    int0 = IF_GETWIDTH(comp(324, 25));
    int1 = comp(324, 27);
    var int2 = STRINGWIDTH(IF_GETTEXT(int1), IF_GETFONTMETRICS(int1));
    IF_SETSIZE(int2, IF_GETHEIGHT(int1), 0, 0, int1);
    int2 = (++int2 + 5);
    int0 = (int0 / 2);
    int2 = (int2 / 2);
    int0 = (int0 - int2);
    IF_SETPOSITION(int0, IF_GETY(int1), 0, 0, int1);
    IF_SETPOSITION(((5 + IF_GETX(int1)) + IF_GETWIDTH(int1)), IF_GETY(comp(324, 28)), 0, 0, comp(324, 28));
    script2685();
    int1 = comp(324, 20);
    int0 = ((5 + IF_GETY(int1)) + IF_GETHEIGHT(int1));
    if ((int0 > IF_GETHEIGHT(comp(324, 13)))) {
        IF_SETHIDE(false, comp(324, 14));
        IF_SETSCROLLSIZE(0, int0, comp(324, 13));
        script7791(comp(324, 14), comp(324, 13));
    };
    script2710();
    return;
}