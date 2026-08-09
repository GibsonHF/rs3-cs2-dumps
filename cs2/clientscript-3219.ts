//
function script3219(int0: number, int1: number, int2: number): void {
    if ((varclient_174 == int2)) {
        if ((MODULO((CLIENTCLOCK() - int0), 40) < 20)) {
            if ((CREATE_REPLY() != -3)) {
                if ((CREATE_EMAIL_VALIDATE_REPLY() != -3)) {
                    if ((CREATE_CONNECT_REPLY() != -3)) {
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
    return;
}