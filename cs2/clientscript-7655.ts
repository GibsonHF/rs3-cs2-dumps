//
function script7655(): void {
    var int0 = IF_GETFONTMETRICS(comp(709, 13));
    var int1 = (script11432(int0) * PARAHEIGHT(IF_GETTEXT(comp(709, 13)), IF_GETWIDTH(comp(709, 11)), int0));
    if ((int1 > IF_GETHEIGHT(comp(709, 11)))) {
        IF_SETSIZE((IF_GETWIDTH(comp(709, 10)) - 18), IF_GETHEIGHT(comp(709, 10)), 0, 0, comp(709, 11));
        IF_SETSCROLLSIZE(0, (int1 + 4), comp(709, 11));
        IF_SETSCROLLPOS(0, 0, comp(709, 11));
        script7791(comp(709, 12), comp(709, 11));
    } else {
        IF_SETSIZE(0, 0, 1, 1, comp(709, 11));
        IF_SETSCROLLPOS(0, 0, comp(709, 11));
        IF_SETSCROLLSIZE(0, 0, comp(709, 11));
        CC_DELETEALL(comp(709, 12));
    };
    return;
}