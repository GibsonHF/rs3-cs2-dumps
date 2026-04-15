//
function script1876(int0: int, int1: component): void {
    var int2 = true;
    if (((MODULO((CLIENTCLOCK() - int0), 40) < 20) && (APPLET_HASFOCUS() == 1))) {
        int2 = false;
    };
    IF_SETHIDE(int2, int1);
    return;
}