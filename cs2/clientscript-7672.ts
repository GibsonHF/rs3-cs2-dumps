//
function script7672(int0: int, int1: component): void {
    if (((MODULO((CLIENTCLOCK() - int0), 40) < 20) && (APPLET_HASFOCUS() == 1))) {
        if ((((varclient_2753 == 1) && (int1 != comp(1405, 15))) || ((varclient_2753 == 2) && (int1 != comp(1405, 27))))) {
            IF_SETHIDE(true, int1);
            return;
        };
        IF_SETHIDE(false, int1);
    } else {
        IF_SETHIDE(true, int1);
    };
    return;
}