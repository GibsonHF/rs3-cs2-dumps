//
function script18832(int0: number, int1: number): void {
    if (((int0 == -1) || ((CLIENTCLOCK() - int0) >= 250))) {
        IF_SETMODELANIM(34955, int1);
        IF_SETONTIMER(callback(), int1);
    };
    return;
}