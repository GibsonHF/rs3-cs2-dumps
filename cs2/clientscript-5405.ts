//
function script5405(int0: unknown_int, int1: component, int2: component): void {
    var int3 = 0;
    if ((MODULO(CLIENTCLOCK(), 1) == 0)) {
        int3 = IF_GETWIDTH(int2);
        int3 = (int3 - 490);
        if ((varclient_1669 > int3)) {
            IF_SETONTIMER(callback(), comp(1172, 5));
            return;
        };
        if ((int0 == 0)) {
            IF_SETPOSITION(varclient_1669, 100, 0, 0, int1);
        } else {
            IF_SETPOSITION(varclient_1669, 100, 2, 2, int1);
        };
        if ((varclient_1669 < 25)) {
            varclient_1669 = (varclient_1669 + 14);
        } else if ((varclient_1669 < 50)) {
            varclient_1669 = (varclient_1669 + 12);
        } else if ((varclient_1669 < 100)) {
            varclient_1669 = (varclient_1669 + 10);
        } else if ((varclient_1669 < 150)) {
            varclient_1669 = (varclient_1669 + 8);
        } else if ((varclient_1669 < 200)) {
            varclient_1669 = (varclient_1669 + 5);
        } else if ((varclient_1669 < 250)) {
            varclient_1669 = (varclient_1669 + 3);
        } else {
            varclient_1669 = (varclient_1669 + 1);
        };
    };
    return;
}