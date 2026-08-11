//
function script10341(int0: number): void {
    if ((int0 == 1)) {
        IF_SETONKEY(callback(script10342, 99811340, 99811333, -2147483639, -2147483640, 99811341), comp(1523, 12));  // group_name_input:text_input
        IF_SETONTIMER(callback(script1400, CLIENTCLOCK(), 99811341), comp(1523, 12));  // group_name_input:text_input
    } else {
        IF_SETONKEY(callback(), comp(1523, 12));  // group_name_input:text_input
        IF_SETONTIMER(callback(), comp(1523, 12));  // group_name_input:text_input
        script1594();
    };
    return;
}