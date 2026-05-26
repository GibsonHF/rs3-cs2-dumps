//
function script7672(int0: number, int1: number): void {
    if (((MODULO((CLIENTCLOCK() - int0), 40) < 20) && (APPLET_HASFOCUS() == 1))) {
        if ((((varclient_2753 == 1) && (int1 != 92078095)) || ((varclient_2753 == 2) && (int1 != 92078107)))) {
            IF_SETHIDE(1, int1);
            return;
        };
        IF_SETHIDE(0, int1);
    } else {
        IF_SETHIDE(1, int1);
    };
    return;
}