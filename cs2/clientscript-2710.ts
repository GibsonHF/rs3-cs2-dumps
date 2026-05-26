//
function script2710(): void {
    script2707();
    CC_DELETEALL(21233711);
    CC_DELETEALL(21233712);
    CC_DELETEALL(21233713);
    IF_SETHIDE(1, 21233685);
    var int0 = -1;
    var int1 = 0;
    if ((varclient_6502 == 1)) {
        IF_SETPOSITION(0, ((5 + IF_GETY(21233684)) + IF_GETHEIGHT(21233684)), 0, 0, 21233685);
        int0 = 21233687;
        int1 = script7593(IF_GETTEXT(int0), IF_GETWIDTH(int0), IF_GETFONTMETRICS(int0), -1);
        IF_SETSIZE(0, (3 + int1), 1, 0, 21233686);
        IF_SETPOSITION(0, (5 + IF_GETHEIGHT(21233686)), 0, 0, 21233710);
        int1 = script2970(21233711, 21233712, 21233713, 1293, 0, 0, IF_GETWIDTH(21233685));
        IF_SETSIZE(0, int1, 1, 0, 21233710);
        IF_SETSIZE(16, (IF_GETY(21233710) + IF_GETHEIGHT(21233710)), 1, 0, 21233685);
        int1 = (IF_GETY(21233685) + IF_GETHEIGHT(21233685));
        IF_SETSCROLLSIZE(0, int1, 21233677);
        script7791(21233678, 21233677);
        IF_SETHIDE(0, 21233685);
        IF_SETHIDE(0, 21233678);
    } else {
        int0 = 21233684;
        int1 = ((5 + IF_GETY(int0)) + IF_GETHEIGHT(int0));
        IF_SETSCROLLPOS(0, MAX(0, MIN(int1, IF_GETSCROLLY(21233677))), 21233677);
        if ((int1 > IF_GETHEIGHT(21233677))) {
            IF_SETHIDE(0, 21233678);
            IF_SETSCROLLSIZE(0, int1, 21233677);
            script7791(21233678, 21233677);
        } else {
            IF_SETHIDE(1, 21233678);
            IF_SETSCROLLSIZE(0, 0, 21233677);
        };
    };
    return;
}