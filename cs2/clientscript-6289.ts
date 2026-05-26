//
function script6289(): void {
    var int0 = 0;
    if (((MODULO(CLIENTCLOCK(), 4) == 0) && (CC_FIND(comp(1296, 2), 0) == 1))) {
        if ((varclient_1932 == 0)) {
            int0 = CC_GETY();
            if ((++int0 > 30)) {
                varclient_1932 = 1;
            } else {
                CC_SETPOSITION(0, int0, 0, 0);
            };
        } else {
            varclient_1932 = (varclient_1932 + 1);
            if ((varclient_1932 == 30)) {
                CC_DELETE();
                IF_SETONTIMER(callback(), comp(1296, 2));
            };
        };
    };
    return;
}