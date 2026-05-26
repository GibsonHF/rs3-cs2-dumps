//
function script6512(): void {
    if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        IF_SETTEXT(script6513(), comp(7, 5));
        varclient_6568 = (varclient_6568 + 1);
        if ((varclient_6568 == 60)) {
            varclient_6567 = (varclient_6567 - 1);
            varclient_6568 = 0;
        };
    };
    return;
}