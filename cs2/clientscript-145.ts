//
function script145(int0: number, int1: number): void {
    if ((CLIENTCLOCK() >= int1)) {
        IF_SETONTIMER(callback(), int0);
        IF_SETHIDE(true, int0);
    };
    return;
}