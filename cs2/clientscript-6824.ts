//
function script6824(int0: number): void {
    script6829();
    if ((int0 == 0)) {
        IF_SETONTIMER(callback(script6825, CLIENTCLOCK(), 88539196), comp(1351, 60));  // ozan1_scales_puzzle:left_scale_plate
        IF_SETONTIMER(callback(script6825, CLIENTCLOCK(), 88539197), comp(1351, 61));  // ozan1_scales_puzzle:right_scale_plate
    } else if ((int0 == 1)) {
        IF_SETONTIMER(callback(script6827, CLIENTCLOCK(), 88539196), comp(1351, 60));  // ozan1_scales_puzzle:left_scale_plate
        IF_SETONTIMER(callback(script6826, CLIENTCLOCK(), 88539197), comp(1351, 61));  // ozan1_scales_puzzle:right_scale_plate
    } else if ((int0 == 2)) {
        IF_SETONTIMER(callback(script6826, CLIENTCLOCK(), 88539196), comp(1351, 60));  // ozan1_scales_puzzle:left_scale_plate
        IF_SETONTIMER(callback(script6827, CLIENTCLOCK(), 88539197), comp(1351, 61));  // ozan1_scales_puzzle:right_scale_plate
    };
    return;
}