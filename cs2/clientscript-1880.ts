//
function script1880(int0: number, int1: number): void {
    if (((MODULO((CLIENTCLOCK() - int0), 40) < 20) && (APPLET_HASFOCUS() == 1))) {
        IF_SETHIDE(0, int1);
    } else {
        IF_SETHIDE(1, int1);
    };
    return;
}