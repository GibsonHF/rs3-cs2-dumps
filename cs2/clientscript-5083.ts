//
function script5083(int0: component, int1: unknown_int, int2: int): void {
    if ((CLIENTCLOCK() < int2)) {
        return;
    };
    IF_SETONTIMER(callback(), int0);
    if ((int1 == varclient_160)) {
        script72(comp(1114, 27), comp(1114, 26), IF_GETSCROLLY(comp(1114, 26)));
    };
    return;
}