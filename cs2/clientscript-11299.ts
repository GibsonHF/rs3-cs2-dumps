//
function script11299(): void {
    if ((script6431() == 1)) {
        ACTIVECLANCHANNEL_FIND_AFFINED(1);
    };
    IF_SETSCROLLSIZE(178, 1146, comp(1613, 62));  // poh_aquarium:buttons
    IF_SETSCROLLSIZE(178, 1146, comp(1613, 63));  // poh_aquarium:dummy_scroll_bar_layer
    script31(105709629, 105709630, 792, 789, 790, 791, 773, 788);
    IF_SETONSCROLLWHEEL(callback(), comp(1613, 62));  // poh_aquarium:buttons
    IF_SETONSCROLLWHEEL(callback(script36, 105709629, 105709630, -2147483646), comp(1613, 63));  // poh_aquarium:dummy_scroll_bar_layer
    return;
}