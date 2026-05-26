//
function script3467(int0: number, int1: number, int2: number): void {
    if (((CLIENTCLOCK() - int1) < int2)) {
        return;
    };
    IF_SETONTIMER(callback(), int0);
    script2766(0, 50, int0);
    return;
}