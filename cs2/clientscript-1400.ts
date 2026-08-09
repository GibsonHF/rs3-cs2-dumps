//
function script1400(int0: number, int1: number): void {
    if ((int1 == script8557(18))) {
        if (((varclient_2873 != 8) || (varclient_2231 != 18))) {
            IF_SETHIDE(true, int1);
            IF_SETONTIMER(callback(), script8556(18));
            return;
        };
    };
    if ((int1 == script8557(19))) {
        if (((varclient_2873 != 8) || (varclient_2231 != 19))) {
            IF_SETHIDE(true, int1);
            IF_SETONTIMER(callback(), script8556(19));
            return;
        };
    };
    if ((int1 == script8557(20))) {
        if (((varclient_2873 != 8) || (varclient_2231 != 20))) {
            IF_SETHIDE(true, int1);
            IF_SETONTIMER(callback(), script8556(20));
            return;
        };
    };
    if ((int1 == script8557(21))) {
        if (((varclient_2873 != 8) || (varclient_2231 != 21))) {
            IF_SETHIDE(true, int1);
            IF_SETONTIMER(callback(), script8556(21));
            return;
        };
    };
    if ((int1 == script8557(22))) {
        if (((varclient_2873 != 8) || (varclient_2231 != 22))) {
            IF_SETHIDE(true, int1);
            IF_SETONTIMER(callback(), script8556(22));
            return;
        };
    };
    if ((int1 == script8557(23))) {
        if (((varclient_2873 != 8) || (varclient_2231 != 23))) {
            IF_SETHIDE(true, int1);
            IF_SETONTIMER(callback(), script8556(23));
            return;
        };
    };
    if ((int1 == script8557(25))) {
        if (((varclient_2873 != 8) || (varclient_2231 != 25))) {
            IF_SETHIDE(true, int1);
            IF_SETONTIMER(callback(), script8556(25));
            return;
        };
    };
    if ((int1 == script8557(46))) {
        if (((varclient_2873 != 8) || (varclient_2231 != 46))) {
            IF_SETHIDE(true, int1);
            IF_SETONTIMER(callback(), script8556(46));
            return;
        };
    };
    if ((MODULO((CLIENTCLOCK() - int0), 40) < 20)) {
        if ((APPLET_HASFOCUS() == 1)) {
            IF_SETHIDE(false, int1);
        } else {
            IF_SETHIDE(true, int1);
        };
    } else {
        IF_SETHIDE(true, int1);
    };
    return;
}