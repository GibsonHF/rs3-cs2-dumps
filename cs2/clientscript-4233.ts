//
function script4233(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int): void {
    IF_SETONTIMER(callback(script4234, int0, int1, int2, CLIENTCLOCK(), int3), int0);
    IF_SETONOP(callback(), int0);
    return;
}