//
function script10341(int0: number): void {
    if ((int0 == 1)) {
        IF_SETONKEY(callback(script10342, 99811340, 99811333, -2147483639, -2147483640, 99811341), 99811340);
        IF_SETONTIMER(callback(script1400, CLIENTCLOCK(), 99811341), 99811340);
    } else {
        IF_SETONKEY(callback(), 99811340);
        IF_SETONTIMER(callback(), 99811340);
        script1594();
    };
    return;
}