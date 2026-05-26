//
function script2684(): void {
    CC_DELETEALL(21233693);
    CC_DELETEALL(21233694);
    CC_DELETEALL(21233695);
    if (((varclient_6502 < 0) || (varclient_6502 > 1))) {
        varclient_6502 = 0;
    };
    var int0 = 0;
    int0 = script2970(21233693, 21233694, 21233695, 1292, 0, int0, IF_GETWIDTH(21233683));
    var int1 = 21233683;
    IF_SETSIZE(16, int0, 1, 0, int1);
    IF_SETPOSITION(0, ((5 + IF_GETY(int1)) + IF_GETHEIGHT(int1)), 0, 0, 21233684);
    int0 = IF_GETWIDTH(21233689);
    int1 = 21233691;
    var int2 = STRINGWIDTH(IF_GETTEXT(int1), IF_GETFONTMETRICS(int1));
    IF_SETSIZE(int2, IF_GETHEIGHT(int1), 0, 0, int1);
    int2 = (++int2 + 5);
    int0 = (int0 / 2);
    int2 = (int2 / 2);
    int0 = (int0 - int2);
    IF_SETPOSITION(int0, IF_GETY(int1), 0, 0, int1);
    IF_SETPOSITION(((5 + IF_GETX(int1)) + IF_GETWIDTH(int1)), IF_GETY(21233692), 0, 0, 21233692);
    script2685();
    int1 = 21233684;
    int0 = ((5 + IF_GETY(int1)) + IF_GETHEIGHT(int1));
    if ((int0 > IF_GETHEIGHT(21233677))) {
        IF_SETHIDE(0, 21233678);
        IF_SETSCROLLSIZE(0, int0, 21233677);
        script7791(21233678, 21233677);
    };
    script2710();
    return;
}