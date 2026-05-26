//
function script2891(int0: number, int1: number): void {
    if ((CLIENTCLOCK() >= int0)) {
        script1728(31195153);
        IF_SETHIDE(1, 31195153);
        IF_SETONTIMER(callback(), int1);
    };
    return;
}