//
function script3219(int0: int, int1: component, int2: int): void {
    if (((((((varclient_174 == int2) && (MODULO((CLIENTCLOCK() - int0), 40) < 20)) && (CREATE_REPLY() != -3)) && (CREATE_EMAIL_VALIDATE_REPLY() != -3)) && (CREATE_CONNECT_REPLY() != -3)) && (APPLET_HASFOCUS() == 1))) {
        IF_SETHIDE(false, int1);
    } else {
        IF_SETHIDE(true, int1);
    };
    return;
}