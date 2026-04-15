//
function script12489(): void {
    var int0 = (12 * PARAHEIGHT(IF_GETTEXT(comp(1759, 9)), IF_GETWIDTH(comp(1759, 9)), IF_GETFONTMETRICS(comp(1759, 9))));
    if ((int0 > IF_GETHEIGHT(comp(1759, 5)))) {
        IF_SETSCROLLSIZE(0, int0, comp(1759, 5));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1759, 5));
        IF_SETSCROLLPOS(0, 0, comp(1759, 5));
    };
    script7791(comp(1759, 6), comp(1759, 5));
    return;
}