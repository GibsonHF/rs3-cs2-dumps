//
function script10375(int0: number, int1: number): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    IF_SETONTIMER(callback(), int1);
    IF_SETHIDE(true, int1);
    return;
}