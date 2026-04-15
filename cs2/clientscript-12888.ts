//
function script12888(int0: struct): void {
    if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        script12889(int0);
        varclient_5881 = (varclient_5881 + 1);
        if ((varclient_5881 == 60)) {
            varclient_5880 = (varclient_5880 - 1);
            varclient_5881 = 0;
        };
    };
    return;
}