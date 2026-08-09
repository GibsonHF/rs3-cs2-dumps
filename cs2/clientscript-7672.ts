//
function script7672(int0: number, int1: number): void {
    if ((MODULO((CLIENTCLOCK() - int0), 40) < 20)) {
        if ((APPLET_HASFOCUS() == 1)) {
            if ((varclient_2753 == 1)) {
                if ((int1 != comp(1405, 15))) {
                    IF_SETHIDE(true, int1);
                    return;
                } else if (((varclient_2753 == 2) && (int1 != comp(1405, 27)))) {
                    IF_SETHIDE(true, int1);
                    return;
                };
            } else if (((varclient_2753 == 2) && (int1 != comp(1405, 27)))) {
                IF_SETHIDE(true, int1);
                return;
            };
            IF_SETHIDE(false, int1);
        } else {
            IF_SETHIDE(true, int1);
        };
    } else {
        IF_SETHIDE(true, int1);
    };
    return;
}