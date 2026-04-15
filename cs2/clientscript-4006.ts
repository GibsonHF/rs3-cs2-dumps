//
function script4006(int0: component): void {
    if ((MODULO(CLIENTCLOCK(), 25) != 0)) {
        return;
    };
    if ((IF_GETHIDE(int0) == true)) {
        IF_SETHIDE(false, int0);
    } else {
        IF_SETHIDE(true, int0);
    };
    return;
}