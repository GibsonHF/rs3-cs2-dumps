//
function script2775(int0: number, int1: number): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    IF_SETONTIMER(callback(), int1);
    IF_SETCOLOUR(16724016, int1);
    return;
}