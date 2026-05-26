//
function script12486(string0: string): void {
    if ((strcmp("", varclient_5191) != 0)) {
        IF_SETTEXT(`${string0}<br>${varclient_5191}`, 115146752);
    } else {
        IF_SETTEXT(string0, 115146752);
    };
    var int0 = (12 * PARAHEIGHT(IF_GETTEXT(115146752), IF_GETWIDTH(115146759), IF_GETFONTMETRICS(115146752)));
    if ((int0 > IF_GETHEIGHT(115146759))) {
        IF_SETSCROLLSIZE(0, int0, 115146759);
    } else {
        IF_SETSCROLLSIZE(0, 0, 115146759);
        IF_SETSCROLLPOS(0, 0, 115146759);
    };
    script7791(115146762, 115146759);
    return;
}