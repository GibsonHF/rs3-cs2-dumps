//
function script11843(): void {
    var int0 = IF_GETWIDTH(comp(1683, 5));  // trh70_overlay:progress_bar
    var int1 = IF_GETWIDTH(comp(1683, 4));  // trh70_overlay:progress_bar_foreground_layer
    var int2 = 0;
    var int3 = (int1 / 1000);
    var int4 = SCALE(int1, 1000, varbitplayer_29511);
    if ((int0 < int4)) {
        int2 = MIN((int0 + 2), int4);
    } else if ((int0 > int4)) {
        int2 = MAX((int0 - 2), int4);
    } else {
        IF_SETONTIMER(callback(), comp(1683, 5));  // trh70_overlay:progress_bar
        return;
    };
    if ((int2 == 0)) {
        int2 = 1;
        IF_SETONTIMER(callback(), comp(1683, 5));  // trh70_overlay:progress_bar
    };
    IF_SETSIZE(int2, 0, 0, 1, comp(1683, 5));  // trh70_overlay:progress_bar
    if ((varbitplayer_29511 >= 200)) {
        IF_SETGRAPHIC(14495 as graphic, comp(1683, 7));  // trh70_overlay:reward_1
    };
    if ((varbitplayer_29511 >= 500)) {
        IF_SETGRAPHIC(14817 as graphic, comp(1683, 8));  // trh70_overlay:reward_2
    };
    if ((varbitplayer_29511 >= 1000)) {
        IF_SETGRAPHIC(14819 as graphic, comp(1683, 9));  // trh70_overlay:red_gem
    };
    return;
}