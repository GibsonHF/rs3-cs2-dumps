//
function script2037(): void {
    if ((IF_GETHIDE(comp(1351, 86)) == false)) {  // ozan1_scales_puzzle:box_one
        IF_SETHIDE(true, comp(1351, 86));  // ozan1_scales_puzzle:box_one
        IF_SETHIDE(false, comp(1351, 87));  // ozan1_scales_puzzle:box_two
    } else if ((IF_GETHIDE(comp(1351, 87)) == false)) {  // ozan1_scales_puzzle:box_two
        IF_SETHIDE(true, comp(1351, 87));  // ozan1_scales_puzzle:box_two
        IF_SETHIDE(false, comp(1351, 88));  // ozan1_scales_puzzle:box_three
    } else if ((IF_GETHIDE(comp(1351, 88)) == false)) {  // ozan1_scales_puzzle:box_three
        IF_SETHIDE(true, comp(1351, 84));  // ozan1_scales_puzzle:help_layer
        IF_SETHIDE(true, comp(1351, 88));  // ozan1_scales_puzzle:box_three
    };
    return;
}