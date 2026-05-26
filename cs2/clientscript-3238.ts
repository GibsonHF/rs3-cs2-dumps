//
function script3238(int0: number, int1: number, int2: number): void {
    var int3 = script2948();
    if ((((((((varclient_174 == int2) && (MODULO((CLIENTCLOCK() - int0), 40) < 20)) && (int3 != -3)) && (int3 != 21)) && (int3 != 1)) && (IF_GETHIDE(48759120) == 1)) && (APPLET_HASFOCUS() == 1))) {
        IF_SETHIDE(0, int1);
    } else {
        IF_SETHIDE(1, int1);
    };
    return;
}