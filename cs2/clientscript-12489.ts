//
function script12489(): void {
    var int0 = (12 * PARAHEIGHT(IF_GETTEXT(comp(1759, 9)), IF_GETWIDTH(comp(1759, 9)), IF_GETFONTMETRICS(comp(1759, 9))));  // mm16_tracking:task_progress
    if ((int0 > IF_GETHEIGHT(comp(1759, 5)))) {  // mm16_tracking:progress
        IF_SETSCROLLSIZE(0, int0, comp(1759, 5));  // mm16_tracking:progress
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1759, 5));  // mm16_tracking:progress
        IF_SETSCROLLPOS(0, 0, comp(1759, 5));  // mm16_tracking:progress
    };
    script7791(115277830, 115277829);
    return;
}