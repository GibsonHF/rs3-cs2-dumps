//
function script13729(): void {
    if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        IF_SETTEXT(script11200(varclient_6297, varclient_6298), comp(1253, 72));
        varclient_6298 = (varclient_6298 + 1);
        if ((varclient_6298 == 60)) {
            varclient_6297 = (varclient_6297 - 1);
            varclient_6298 = 0;
        };
    };
    return;
}