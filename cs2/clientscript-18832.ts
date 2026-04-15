//
function script18832(int0: int, int1: component): void {
    if (((int0 == -1) || ((CLIENTCLOCK() - int0) >= 250))) {
        IF_SETMODELANIM(34955 as seq, int1);
        IF_SETONTIMER(callback(), int1);
    };
    return;
}