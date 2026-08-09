//
function script11781(int0: number): void {
    varclient_4991 = (varclient_4991 + 1);
    if ((varclient_4991 < 150)) {
        return;
    };
    if ((IF_GETTRANS(int0) == 255)) {
        IF_SETONTIMER(callback(), int0);
        IF_SETHIDE(true, int0);
        IF_SETHIDE(true, comp(1667, 7));
        return;
    };
    if ((MODULO(varclient_4991, 2) == 0)) {
        IF_SETTRANS(MIN(255, (IF_GETTRANS(int0) + 4)), int0);
    };
    return;
}