//
function script1557(): void {
    IF_SETPOSITION(script1552(varclient_1029, varclient_2506, 26, 96272388, -1), ((((IF_GETHEIGHT(96272385) - 60) - 14) / 2) + 60), 0, 0, 96272389);
    if ((APPLET_HASFOCUS() == 1)) {
        IF_SETHIDE(0, 96272389);
    } else {
        IF_SETHIDE(1, 96272389);
    };
    IF_SETONTIMER(callback(script1400, CLIENTCLOCK(), 96272389), 96272388);
    return;
}