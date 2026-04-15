//
function script18512(): void {
    if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        varclient_7383 = (varclient_7383 + 1);
        if ((varclient_7383 == 60)) {
            varclient_7382 = (varclient_7382 - 1);
            varclient_7383 = 0;
        };
    };
    return;
}