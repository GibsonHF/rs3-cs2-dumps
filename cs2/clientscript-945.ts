//
function script945(int0: number, int1: number, int2: number): void {
    var int0 = MIN(100, int0);
    int0 = MAX(0, int0);
    var int3 = ((int0 * 25) / 10);
    IF_SETPOSITION(0, (250 - int3), 0, 0, comp(1246, 21));  // tzhaar2_egg_overlay:red_large_progress_value_layer
    IF_SETTEXT(`${inttostring(int1, 10)}%`, comp(1246, 17));  // tzhaar2_egg_overlay:hatch_percentage
    if ((int2 == 1)) {
        IF_SETPOSITION(32, 217, 0, 0, comp(1246, 5));  // tzhaar2_egg_overlay:lower
        IF_SETPOSITION(32, 167, 0, 0, comp(1246, 6));  // tzhaar2_egg_overlay:upper
    } else if ((int2 == 2)) {
        IF_SETPOSITION(32, 130, 0, 0, comp(1246, 5));  // tzhaar2_egg_overlay:lower
        IF_SETPOSITION(32, 92, 0, 0, comp(1246, 6));  // tzhaar2_egg_overlay:upper
    } else if ((int2 == 3)) {
        IF_SETPOSITION(32, 67, 0, 0, comp(1246, 5));  // tzhaar2_egg_overlay:lower
        IF_SETPOSITION(32, 42, 0, 0, comp(1246, 6));  // tzhaar2_egg_overlay:upper
    };
    return;
}