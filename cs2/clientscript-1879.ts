//
function script1879(int0: number, int1: number, string0: string): void {
    IF_SETPOSITION(script1551(varclient_1097, string0, 26, IF_GETX(int0)), 0, 0, 1, int1);
    if ((APPLET_HASFOCUS() == 1)) {
        IF_SETHIDE(0, int1);
    } else {
        IF_SETHIDE(1, int1);
    };
    IF_SETONTIMER(callback(script1880, CLIENTCLOCK(), int1), int0);
    return;
}