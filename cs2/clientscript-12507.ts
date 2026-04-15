//
function script12507(int0: component): void {
    if ((varclient_5207 == -1)) {
        IF_SETONTIMER(callback(), int0);
        return;
    };
    if ((varclient_5207 == -2147483648)) {
        varclient_5207 = MODULO(CLIENTCLOCK(), 3000);
        script12511();
        return;
    };
    var int1 = MODULO((CLIENTCLOCK() - varclient_5207), 3000);
    var int2 = -1;
    if ((int1 == 0)) {
        script12512(-1);
        script12511();
        return;
    };
    if ((MODULO(int1, 50) == 0)) {
        int2 = ((int1 / 50) - 1);
        if ((int2 > 46)) {
            return;
        };
        if ((script12510(int2) == 1)) {
            script12512(int2);
        };
    };
    return;
}