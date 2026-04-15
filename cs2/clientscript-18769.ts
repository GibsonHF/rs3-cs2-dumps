//
function script18769(int0: component, int1: unknown_int, int2: int): void {
    if ((CLIENTCLOCK() <= varclient_7414)) {
        return;
    };
    switch (int1) {
        case 1: {
            IF_SETONTIMER(callback(), comp(764, 9));
            script18777();
            script18771(0);
            break;
        }
    };
    var int3 = 0;
    int3 = ((255 / int2) * (CLIENTCLOCK() - varclient_7414));
    if ((int3 > 0)) {
        script18774(MIN(int3, 255));
    };
    if ((int3 >= 255)) {
        IF_SETONTIMER(callback(), int0);
    };
    return;
}