//
function script3219(int0: number, int1: number, int2: number): void {
    if (((((((varclient_174 == int2) && (MODULO((CLIENTCLOCK() - int0), 40) < 20)) && (CREATE_REPLY() != -3)) && (CREATE_EMAIL_VALIDATE_REPLY() != -3)) && (CREATE_CONNECT_REPLY() != -3)) && (APPLET_HASFOCUS() == 1))) {
        IF_SETHIDE(0, int1);
    } else {
        IF_SETHIDE(1, int1);
    };
    return;
}