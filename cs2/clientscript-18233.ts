//
function script18233(int0: int): void {
    if ((MODULO(CLIENTCLOCK(), 250) == 0)) {
        if ((script8292(3, 3) == 1)) {
            script18234(int0);
        } else {
            IF_SETONTIMER(callback(), comp(1343, 209));
        };
    };
    return;
}