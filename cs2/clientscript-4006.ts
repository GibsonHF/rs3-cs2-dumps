//
function script4006(int0: number): void {
    if ((MODULO(CLIENTCLOCK(), 25) != 0)) {
        return;
    };
    if ((IF_GETHIDE(int0) == 1)) {
        IF_SETHIDE(0, int0);
    } else {
        IF_SETHIDE(1, int0);
    };
    return;
}