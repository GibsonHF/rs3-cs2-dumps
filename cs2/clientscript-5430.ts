//
function script5430(): void {
    var int0 = 0;
    if ((varclient_1668 == 1)) {
        if (((varclient_1667 == 1) && (MODULO(CLIENTCLOCK(), 50) == 0))) {
            varclient_1665 = (varclient_1665 + 1);
        };
        if ((MODULO(CLIENTCLOCK(), varclient_1665) == 0)) {
            int0 = script5431(0);
            if ((int0 == 0)) {
                return;
            };
            int0 = script5431(1);
            if ((int0 == 0)) {
                return;
            };
            int0 = script5431(2);
            if ((int0 == 0)) {
                return;
            };
        };
    } else if (((varclient_1668 == 2) && (MODULO(CLIENTCLOCK(), varclient_1665) == 0))) {
        int0 = script5431(0);
        if ((int0 == 0)) {
            return;
        };
        int0 = script5431(1);
        if ((int0 == 0)) {
            return;
        };
        int0 = script5431(2);
        if ((int0 == 0)) {
            return;
        };
    };
    return;
}