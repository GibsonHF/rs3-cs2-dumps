//
function script13689(): void {
    var int0 = comp(1639, 6);  // slayer_count:graphic_layer
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = script8138(1031);
    script13691(int2);
    if (((varbitplayer_27169 == 1) || (int1 == 0))) {
        IF_SETOP(1, "Expand", int0);
        IF_SETSIZE(60, 30, 0, 0, comp(1639, 3));  // slayer_count:slayer_window_wrapper
    } else {
        IF_SETOP(1, "Shrink", int0);
        IF_SETSIZE(struct_getparam(31708, 3484), struct_getparam(31708, 3485), 0, 0, comp(1639, 3));  // slayer_count:slayer_window_wrapper
    };
    if ((varbitplayer_40059 == 0)) {
        IF_SETOP(2, "Reaper", int0);
        IF_SETGRAPHIC(13214 as graphic, comp(1639, 4));  // slayer_count:slayer_graphic
    } else {
        IF_SETOP(2, "Slayer", int0);
        IF_SETGRAPHIC(23991 as graphic, comp(1639, 4));  // slayer_count:slayer_graphic
    };
    IF_SETCOLOUR(script10495(0), comp(1639, 10));  // slayer_count:slayer_count
    IF_SETCOLOUR(script10495(0), comp(1639, 11));  // slayer_count:slayer_target
    return;
}