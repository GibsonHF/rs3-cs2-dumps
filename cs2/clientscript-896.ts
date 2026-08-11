//
function script896(): void {
    var int0 = (116 / 12);
    var int1 = (int0 * varbitplayer_14338);
    var int2 = (int0 * varbitplayer_14337);
    IF_SETPOSITION(IF_GETX(comp(717, 8)), (122 + (116 - int1)), 0, 0, comp(717, 8));  // easter08_incubator_side:water_indicator
    IF_SETPOSITION(IF_GETX(comp(717, 7)), (122 + (116 - int2)), 0, 0, comp(717, 7));  // easter08_incubator_side:coal_indicator
    IF_SETSIZE(27, int1, 0, 0, comp(717, 8));  // easter08_incubator_side:water_indicator
    IF_SETSIZE(27, int2, 0, 0, comp(717, 7));  // easter08_incubator_side:coal_indicator
    return;
}