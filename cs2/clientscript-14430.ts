//
function script14430(): void {
    if ((MODULO(CLIENTCLOCK(), 30) != 0)) {
        return;
    };
    script8841(22, 0);
    IF_SETONTIMER(callback(), comp(1444, 0));
    return;
}