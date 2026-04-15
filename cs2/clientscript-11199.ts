//
function script11199(): void {
    if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        IF_SETTEXT(script11200(varclient_4752, varclient_4753), comp(1253, 72));
        varclient_4753 = (varclient_4753 + 1);
        if ((varclient_4753 == 60)) {
            varclient_4752 = (varclient_4752 - 1);
            varclient_4753 = 0;
        };
    };
    return;
}