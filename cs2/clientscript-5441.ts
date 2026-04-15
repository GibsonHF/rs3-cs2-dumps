//
function script5441(): void {
    IF_SETHIDE(false, comp(1168, 10));
    IF_SETHIDE(false, comp(1168, 13));
    IF_SETHIDE(true, comp(1168, 11));
    IF_SETHIDE(true, comp(1168, 12));
    if ((IF_GETSCROLLHEIGHT(comp(1168, 10)) > IF_GETHEIGHT(comp(1168, 10)))) {
        IF_SETHIDE(false, comp(1168, 13));
    };
    IF_SETCOLOUR(16777215, comp(1168, 79));
    IF_SETCOLOUR(16101953, comp(1168, 78));
    varclient_1682 = 0;
    return;
}