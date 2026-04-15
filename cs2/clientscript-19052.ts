//
function script19052(int0: unknown_int, int1: unknown_int): void {
    IF_SETONTIMER(callback(script19053, (CLIENTCLOCK() + 30), int0, int1), int1);
    return;
}