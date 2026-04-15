//
function script6558(string0: string, string1: string): void {
    IF_SETHIDE(false, comp(1709, 7));
    IF_SETTEXT(string0, comp(1709, 15));
    IF_SETTEXT(string1, comp(1709, 16));
    var int0 = script7593(IF_GETTEXT(comp(1709, 16)), IF_GETWIDTH(comp(1709, 16)), IF_GETFONTMETRICS(comp(1709, 16)), 0);
    IF_SETSIZE(10, int0, 1, 0, comp(1709, 16));
    int0 = (IF_GETY(comp(1709, 16)) + IF_GETHEIGHT(comp(1709, 16)));
    CC_DELETEALL(comp(1709, 17));
    IF_SETSIZE(0, 45, 1, 1, comp(1709, 14));
    IF_SETSCROLLSIZE(0, 0, comp(1709, 14));
    IF_SETSCROLLPOS(0, 0, comp(1709, 14));
    if ((int0 > IF_GETHEIGHT(comp(1709, 14)))) {
        IF_SETSIZE(16, 45, 1, 1, comp(1709, 14));
        IF_SETSCROLLSIZE(0, int0, comp(1709, 14));
        script7791(comp(1709, 17), comp(1709, 14));
    };
    return;
}