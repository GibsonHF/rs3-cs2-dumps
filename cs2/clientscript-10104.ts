//
function script10104(int0: number): void {
    if ((int0 == -1337)) {
        IF_SETCOLOUR(51455, 99287069);
    } else if ((int0 != -1)) {
        IF_SETCOLOUR(16757760, 99287069);
        var int0 = (CLIENTCLOCK() + (int0 * 50));
    } else {
        IF_SETCOLOUR(65280, 99287069);
    };
    IF_SETONTIMER(callback(script10105, CLIENTCLOCK(), int0), 99287060);
    return;
}