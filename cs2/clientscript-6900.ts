//
function script6900(int0: component, int1: int): void {
    if ((CLIENTCLOCK() < int1)) {
        return;
    };
    IF_SETHIDE(false, comp(1365, 14));
    IF_SETONTIMER(callback(), int0);
    return;
}