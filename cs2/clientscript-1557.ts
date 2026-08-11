//
function script1557(): void {
    IF_SETPOSITION(script1552(varclient_1029, varclient_2506, 26, 96272388, -1), ((((IF_GETHEIGHT(comp(1469, 1) /*meslayer:mes_layer*/) - 60) - 14) / 2) + 60), 0, 0, comp(1469, 5) /*meslayer:caret*/);
    if ((APPLET_HASFOCUS() == 1)) {
        IF_SETHIDE(false, comp(1469, 5));  // meslayer:caret
    } else {
        IF_SETHIDE(true, comp(1469, 5));  // meslayer:caret
    };
    IF_SETONTIMER(callback(script1400, CLIENTCLOCK(), 96272389), comp(1469, 4));  // meslayer:mes_text2
    return;
}