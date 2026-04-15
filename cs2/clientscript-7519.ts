//
function script7519(int0: component, int1: int): void {
    if ((CLIENTCLOCK() < int1)) {
        return;
    };
    if ((varclient_2709 < 710)) {
        script7518(int0, 30);
    } else {
        IF_SETONTIMER(callback(), int0);
    };
    return;
}