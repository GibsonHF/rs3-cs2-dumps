//
function script902(): void {
    IF_SETMODELANGLE(0, 0, 0, 0, 0, 400, comp(717, 14));  // easter08_incubator_side:water_button
    IF_SETPOSITION((IF_GETX(comp(717, 14)) + 2), (IF_GETY(comp(717, 14)) + 2), 0, 0, comp(717, 14));  // easter08_incubator_side:water_button
    return;
}