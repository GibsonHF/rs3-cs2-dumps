//
function script10375(int0: int, int1: component): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    IF_SETONTIMER(callback(), int1);
    IF_SETHIDE(1, int1);
    return;
}