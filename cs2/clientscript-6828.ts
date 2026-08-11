//
function script6828(): void {
    IF_SETONTIMER(callback(), comp(1351, 60));  // ozan1_scales_puzzle:left_scale_plate
    IF_SETONTIMER(callback(), comp(1351, 61));  // ozan1_scales_puzzle:right_scale_plate
    IF_SETPOSITION(0, 15, 1, 1, comp(1351, 60));  // ozan1_scales_puzzle:left_scale_plate
    IF_SETPOSITION(0, 15, 1, 1, comp(1351, 61));  // ozan1_scales_puzzle:right_scale_plate
    script6830();
    return;
}