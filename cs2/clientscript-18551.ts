//
function script18551(int0: number, int1: number): void {
    var int2 = (CLIENTCLOCK() - int1);
    if ((int2 > (30 / 4))) {
        script7794(int0, 21363);
        IF_SETONTIMER(callback(), int0);
    };
    return;
}