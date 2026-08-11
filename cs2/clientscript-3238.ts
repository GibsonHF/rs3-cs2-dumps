//
function script3238(int0: number, int1: number, int2: number): void {
    var int3 = script2948();
    if ((varclient_174 == int2)) {
        if ((MODULO((CLIENTCLOCK() - int0), 40) < 20)) {
            if ((int3 != -3)) {
                if ((int3 != 21)) {
                    if ((int3 != 1)) {
                        if ((IF_GETHIDE(comp(744, 347)) == true)) {  // loginscreen:language_dropdown
                            if ((APPLET_HASFOCUS() == 1)) {
                                IF_SETHIDE(false, int1);
                            } else {
                                IF_SETHIDE(true, int1);
                            };
                        } else {
                            IF_SETHIDE(true, int1);
                        };
                    } else {
                        IF_SETHIDE(true, int1);
                    };
                } else {
                    IF_SETHIDE(true, int1);
                };
            } else {
                IF_SETHIDE(true, int1);
            };
        } else {
            IF_SETHIDE(true, int1);
        };
    } else {
        IF_SETHIDE(true, int1);
    };
    return;
}