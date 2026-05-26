//
function script18769(int0: number, int1: number, int2: number): void {
    if ((CLIENTCLOCK() <= varclient_7414)) {
        return;
    };
    switch (int1) {
        case 1: {
            IF_SETONTIMER(callback(), 50069513);
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