//
function script7213(int0: number, int1: number): void {
    IF_SETPOSITION(script1552(varclient_1029, varclient_2250, 26, int0, -1), IF_GETY(int1), 0, 0, int1);
    if ((APPLET_HASFOCUS() == 1)) {
        IF_SETHIDE(0, int1);
    } else {
        IF_SETHIDE(1, int1);
    };
    IF_SETONTIMER(callback(script1400, CLIENTCLOCK(), int1), int0);
    return;
}