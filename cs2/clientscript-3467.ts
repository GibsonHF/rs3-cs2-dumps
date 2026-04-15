//
function script3467(int0: component, int1: int, int2: int): void {
    if (((CLIENTCLOCK() - int1) < int2)) {
        return;
    };
    IF_SETONTIMER(callback(), int0);
    script2766(0, 50, int0);
    return;
}