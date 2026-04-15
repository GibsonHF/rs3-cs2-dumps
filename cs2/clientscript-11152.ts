//
function script11152(int0: component, int1: component, int2: component): void {
    IF_SETPOSITION(script1552(varclient_1029, varclient_2250, IF_GETFONTMETRICS(int1), int0, -1), IF_GETY(int2), 0, 0, int2);
    if ((APPLET_HASFOCUS() == 1)) {
        IF_SETHIDE(false, int2);
    } else {
        IF_SETHIDE(true, int2);
    };
    IF_SETONTIMER(callback(script1400, CLIENTCLOCK(), int2), int0);
    return;
}