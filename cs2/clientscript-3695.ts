//
function script3695(int0: number): void {
    if ((INV_TOTALCAT(int0, 4359) <= 1)) {
        IF_SETHIDE(true, comp(90, 114));  // pof_animal:previous_animal
        IF_SETHIDE(true, comp(90, 115));  // pof_animal:next_animal
    } else {
        IF_SETHIDE(false, comp(90, 114));  // pof_animal:previous_animal
        IF_SETHIDE(false, comp(90, 115));  // pof_animal:next_animal
    };
    return;
}