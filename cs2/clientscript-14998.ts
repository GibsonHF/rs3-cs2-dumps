//
function script14998(): void {
    IF_SETGRAPHIC(11300 as graphic, comp(705, 3));  // trh62:multiplier_single_x2
    IF_SETGRAPHIC(11301 as graphic, comp(705, 5));  // trh62:multiplier_single_x3
    IF_SETGRAPHIC(11302 as graphic, comp(705, 7));  // trh62:multiplier_single_x4
    IF_SETGRAPHIC(11303 as graphic, comp(705, 9));  // trh62:multiplier_single_x5
    IF_SETGRAPHIC(11305 as graphic, comp(705, 11));  // trh62:multiplier_double_x6
    IF_SETGRAPHIC(11306 as graphic, comp(705, 13));  // trh62:multiplier_double_x8
    IF_SETGRAPHIC(11307 as graphic, comp(705, 15));  // trh62:multiplier_double_x10
    IF_SETHIDE(true, comp(705, 2));  // trh62:multiplier_single_x2_glow
    IF_SETHIDE(true, comp(705, 4));  // trh62:multiplier_single_x3_glow
    IF_SETHIDE(true, comp(705, 6));  // trh62:multiplier_single_x4_glow
    IF_SETHIDE(true, comp(705, 8));  // trh62:multiplier_single_x5_glow
    IF_SETHIDE(true, comp(705, 10));  // trh62:multiplier_double_x6_glow
    IF_SETHIDE(true, comp(705, 12));  // trh62:multiplier_double_x8_glow
    IF_SETHIDE(true, comp(705, 14));  // trh62:multiplier_double_x10_glow
    return;
}