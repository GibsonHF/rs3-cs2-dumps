//
function script12662(): void {
    var int0 = 210;
    if ((varbitplayer_33371 >= 5)) {
        IF_SETGRAPHIC(27789 as graphic, comp(1778, 11));  // trh93_overlay_new:marker_1
    };
    if ((varbitplayer_33371 >= 15)) {
        IF_SETGRAPHIC(27791 as graphic, comp(1778, 10));  // trh93_overlay_new:marker_2
    };
    if ((varbitplayer_33371 >= 35)) {
        IF_SETGRAPHIC(27793 as graphic, comp(1778, 9));  // trh93_overlay_new:marker_3
    };
    if ((varbitplayer_33371 >= 60)) {
        IF_SETGRAPHIC(27795 as graphic, comp(1778, 8));  // trh93_overlay_new:marker_4
    };
    if ((varbitplayer_33371 >= 100)) {
        IF_SETGRAPHIC(27797 as graphic, comp(1778, 7));  // trh93_overlay_new:marker_5
    };
    var int1 = MAX(1, SCALE(int0, 100, varbitplayer_33371));
    var int2 = SCALE(int1, int0, 28);
    IF_SETSIZE(41, int1, 0, 0, comp(1778, 3));  // trh93_overlay_new:progress_bar_fill
    IF_SETONVARTRANSMIT(callback(script12663, 6451, 1), comp(1778, 3));  // trh93_overlay_new:progress_bar_fill
    return;
}