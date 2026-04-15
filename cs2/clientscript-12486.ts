//
function script12486(string0: string): void {
    if ((strcmp("", varclient_5191) != 0)) {
        IF_SETTEXT(`${string0}<br>${varclient_5191}`, comp(1757, 0));
    } else {
        IF_SETTEXT(string0, comp(1757, 0));
    };
    var int0 = (12 * PARAHEIGHT(IF_GETTEXT(comp(1757, 0)), IF_GETWIDTH(comp(1757, 7)), IF_GETFONTMETRICS(comp(1757, 0))));
    if ((int0 > IF_GETHEIGHT(comp(1757, 7)))) {
        IF_SETSCROLLSIZE(0, int0, comp(1757, 7));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1757, 7));
        IF_SETSCROLLPOS(0, 0, comp(1757, 7));
    };
    script7791(comp(1757, 10), comp(1757, 7));
    return;
}