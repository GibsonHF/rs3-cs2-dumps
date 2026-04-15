//
function script11964(int0: component): void {
    varclient_5111 = (varclient_5111 + 1);
    if ((varclient_5111 < 150)) {
        return;
    };
    if ((IF_GETTRANS(int0) == 255)) {
        IF_SETONTIMER(callback(), int0);
        IF_SETHIDE(1, int0);
        IF_SETHIDE(1, 111673353);
        return;
    };
    if ((MODULO(varclient_5111, 2) == 0)) {
        IF_SETTRANS(MIN(255, (IF_GETTRANS(int0) + 4)), int0);
    };
    return;
}