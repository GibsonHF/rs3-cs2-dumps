//
function script18792(): void {
    var int0 = 0;
    var int1 = IF_GETGRAPHIC(comp(488, 26));  // trh184_overlay:bonus_window_background
    if ((int1 == 19529 as graphic)) {
        int0 = 1;
    };
    if ((int0 == 1)) {
        IF_SETHIDE(true, comp(488, 28));  // trh184_overlay:bonus_window_overview
        IF_SETGRAPHIC(26179 as graphic, comp(488, 26));  // trh184_overlay:bonus_window_background
        IF_SETPOSITION(0, -22, 1, 0, comp(488, 26));  // trh184_overlay:bonus_window_background
    } else {
        IF_SETHIDE(false, comp(488, 28));  // trh184_overlay:bonus_window_overview
        IF_SETGRAPHIC(19529 as graphic, comp(488, 26));  // trh184_overlay:bonus_window_background
        IF_SETPOSITION(0, 0, 1, 0, comp(488, 26));  // trh184_overlay:bonus_window_background
    };
    return;
}