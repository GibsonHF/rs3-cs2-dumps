//
function script12726(): void {
    var int0 = (IF_GETWIDTH(comp(1786, 10)) - 2);  // trh104_overlay:progress_bar_outer
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = script12742();
    if ((int1 == 0)) {
        IF_SETSIZE(1, 0, 0, 1, comp(1786, 13));  // trh104_overlay:progress_bar
    } else {
        IF_SETSIZE(SCALE(int0, int2, int1), 0, 0, 1, comp(1786, 13));  // trh104_overlay:progress_bar
    };
    IF_SETHIDE(true, comp(1253, 8));  // wheel_of_fortune:chests_layer
    IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
    IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
    IF_SETGRAPHIC(28095 as graphic, comp(1253, 5));  // wheel_of_fortune:background
    IF_SETGRAPHIC(script12723(), comp(1786, 1));  // trh104_overlay:background_map
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    [int3, int4, int5] = script12705(varbitplayer_33712);
    if ((int5 == 1)) {
        int3 = MIN((int3 + 1), 8);
    };
    IF_SETTEXT(inttostring(int1, 10), comp(1786, 17));  // trh104_overlay:num
    IF_SETTEXT(`/ ${inttostring(int2, 10)}`, comp(1786, 18));  // trh104_overlay:total
    IF_SETTEXT(inttostring(varbitplayer_33716, 10), comp(1786, 22));  // trh104_overlay:tokens
    script12736();
    script12733();
    script12738();
    script12749();
    return;
}