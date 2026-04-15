//
function script3955(int0: int, int1: component): void {
    if ((((MODULO((CLIENTCLOCK() - int0), 40) < 20) && (APPLET_HASFOCUS() == 1)) && (varclient_1412 == false))) {
        IF_SETHIDE(false, int1);
    } else {
        IF_SETHIDE(true, int1);
    };
    return;
}