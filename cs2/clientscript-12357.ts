//
function script12357(): void {
    var int0 = (IF_GETWIDTH(comp(1745, 1)) - 2);  // trh87_overlay:progress_bar_outer
    var int1 = script12362(varplayer_6200);
    if ((int1 == 0)) {
        IF_SETSIZE(1, 0, 0, 1, comp(1745, 4));  // trh87_overlay:progress_bar
    } else {
        IF_SETSIZE(SCALE(int0, 32, int1), 0, 0, 1, comp(1745, 4));  // trh87_overlay:progress_bar
    };
    IF_SETHIDE(true, comp(1253, 8));  // wheel_of_fortune:chests_layer
    IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
    IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
    if ((int1 == 32)) {
        IF_SETGRAPHIC(27053 as graphic, comp(1745, 7));  // trh87_overlay:background_butterfly_left
        IF_SETGRAPHIC(27053 as graphic, comp(1745, 8));  // trh87_overlay:background_butterfly_right
        IF_SETHIDE(true, comp(1745, 35));  // trh87_overlay:locked
    } else {
        IF_SETGRAPHIC(27052 as graphic, comp(1745, 7));  // trh87_overlay:background_butterfly_left
        IF_SETGRAPHIC(27052 as graphic, comp(1745, 8));  // trh87_overlay:background_butterfly_right
        IF_SETHIDE(false, comp(1745, 35));  // trh87_overlay:locked
    };
    IF_SETGRAPHIC(27051 as graphic, comp(1253, 5));  // wheel_of_fortune:background
    return;
}