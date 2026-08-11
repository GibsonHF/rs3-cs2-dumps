//
function script12491(): void {
    var int0 = script12472();
    var int1 = MAX(1, (int0 * 20));
    IF_SETONTIMER(callback(script12492, int1, 97, 115146754, 115146849), comp(1757, 97));  // mm16_cases:blue_large_progress_value_bounds_layer
    IF_SETTEXT(`${TOSTRING_LOCALISED(int0, 1)}/30 cases solved`, comp(1757, 80));  // mm16_cases:progress
    return;
}