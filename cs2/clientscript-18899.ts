//
function script18899(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = 0;
    IF_SETHIDE(int0, comp(1284, 20));  // calendar_main:today_highlight_outline_inner
    IF_SETHIDE(int0, comp(1284, 21));  // calendar_main:today_highlight_outline_outer
    if ((int0 == false)) {
        int2 = ((int1 * (91 + 4)) + 46);
        int3 = (((script18858() * (41 + 4)) + 35) + 6);
        int3 = MIN(int3, (((IF_GETHEIGHT(comp(1284, 22)) + 35) + 4) + 6));  // calendar_main:rows_container
        IF_SETSIZE((91 + 4), int3, 0, 0, comp(1284, 20));  // calendar_main:today_highlight_outline_inner
        IF_SETPOSITION(int2, 47, 0, 0, comp(1284, 20));  // calendar_main:today_highlight_outline_inner
        IF_SETSIZE((91 + 6), (int3 + 2), 0, 0, comp(1284, 21));  // calendar_main:today_highlight_outline_outer
        IF_SETPOSITION((int2 - 1), (47 - 1), 0, 0, comp(1284, 21));  // calendar_main:today_highlight_outline_outer
    };
    return;
}