//
function script903(): void {
    IF_SETMODELANGLE(0, 0, 0, 0, 1024, 400, comp(717, 13));  // easter08_incubator_side:coal_button
    IF_SETPOSITION((IF_GETX(comp(717, 13)) - 2), (IF_GETY(comp(717, 13)) - 2), 0, 0, comp(717, 13));  // easter08_incubator_side:coal_button
    return;
}