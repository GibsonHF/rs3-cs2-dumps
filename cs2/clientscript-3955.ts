//
function script3955(int0: number, int1: number): void {
    if ((MODULO((CLIENTCLOCK() - int0), 40) < 20)) {
        if ((APPLET_HASFOCUS() == 1)) {
            if ((varclient_1412 == false)) {
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
    return;
}