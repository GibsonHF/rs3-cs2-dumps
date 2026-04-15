//
function script2896(int0: component): void {
    if ((MODULO(CLIENTCLOCK(), 5) == 0)) {
        if ((SCALE(varclient_1078, (20 * 100), 200) > SCALE(varbitplayer_5746, (20 * 100), 200))) {
            IF_SETSIZE(20, SCALE(varclient_1078, (20 * 100), 200), 0, 0, int0);
            varclient_1078 = (varclient_1078 - 1);
        } else {
            IF_SETONTIMER(callback(), int0);
            varclient_1079 = 0;
        };
    };
    return;
}