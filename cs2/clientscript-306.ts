//
function script306(int0: number, int1: number): void {
    if (((CLIENTCLOCK() - int0) < 15)) {
        return;
    };
    IF_SETONTIMER(callback(), int1);
    IF_SETCOLOUR(script10495(3), int1);
    return;
}