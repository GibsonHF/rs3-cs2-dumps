//
function script1557(): void {
    IF_SETPOSITION(script1552(varclient_1029, varclient_2506, 26 as fontmetrics, comp(1469, 4), -1), ((((IF_GETHEIGHT(comp(1469, 1)) - 60) - 14) / 2) + 60), 0, 0, comp(1469, 5));
    if ((APPLET_HASFOCUS() == 1)) {
        IF_SETHIDE(false, comp(1469, 5));
    } else {
        IF_SETHIDE(true, comp(1469, 5));
    };
    IF_SETONTIMER(callback(script1400, CLIENTCLOCK(), 96272389), comp(1469, 4));
    return;
}