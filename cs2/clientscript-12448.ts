//
function script12448(): void {
    if ((MODULO(CLIENTCLOCK(), 30) == 0)) {
        varbitclient_23075 = 0;
        IF_SETONTIMER(callback(), comp(1477, 16));
    };
    return;
}