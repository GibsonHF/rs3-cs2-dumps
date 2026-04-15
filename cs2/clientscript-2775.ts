//
function script2775(int0: int, int1: component): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    IF_SETONTIMER(callback(), int1);
    IF_SETCOLOUR(16724016, int1);
    return;
}