//
function script19045(int0: number, int1: number): void {
    if (((int0 == -1) || ((CLIENTCLOCK() - int0) >= int1))) {
        IF_TRIGGEROP(82117164, 0, 4);
        IF_SETONTIMER(callback(), 66453541);
    };
    return;
}