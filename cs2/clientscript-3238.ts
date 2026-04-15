//
function script3238(int0: int, int1: component, int2: int): void {
    var int3 = script2948();
    if ((((((((varclient_174 == int2) && (MODULO((CLIENTCLOCK() - int0), 40) < 20)) && (int3 != -3)) && (int3 != 21)) && (int3 != 1)) && (IF_GETHIDE(comp(744, 335)) == true)) && (APPLET_HASFOCUS() == 1))) {
        IF_SETHIDE(false, int1);
    } else {
        IF_SETHIDE(true, int1);
    };
    return;
}