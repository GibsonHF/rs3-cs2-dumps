//
function script4233(int0: number, int1: number, int2: number, int3: number): void {
    IF_SETONTIMER(callback(script4234, int0, int1, int2, CLIENTCLOCK(), int3), int0);
    IF_SETONOP(callback(), int0);
    return;
}