//
function script306(int0: int, int1: component): void {
    if (((CLIENTCLOCK() - int0) < 15)) {
        return;
    };
    IF_SETONTIMER(callback(), int1);
    IF_SETCOLOUR(script10495(3), int1);
    return;
}