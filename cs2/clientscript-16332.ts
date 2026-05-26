//
function script16332(): void {
    if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        varclient_7040 = (varclient_7040 + 1);
        if ((varclient_7040 == 60)) {
            varclient_7039 = (varclient_7039 - 1);
            varclient_7040 = 0;
        };
        IF_SETTEXT(script11200(varclient_7039, varclient_7040), comp(1253, 72));
    };
    return;
}