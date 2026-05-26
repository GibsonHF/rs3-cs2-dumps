//
function script16198(int0: number, int1: number): void {
    if ((int1 != 82116674)) {
        IF_SETENABLED(int0, 82116674);
    };
    if ((int1 != 82116654)) {
        IF_SETENABLED(int0, 82116654);
    };
    if ((int1 != 82116677)) {
        IF_SETHIDE(int0, 82116681);
    };
    if ((int1 != 82116873)) {
        if ((int0 == 0)) {
            varclient_1993 = 0;
            script8841(29, 0);
            script1646();
        } else {
            script10877();
            varclient_1993 = 1;
            script8841(29, 1);
        };
    };
    if ((script16161() == 52664)) {
        IF_SETENABLED(0, 82116654);
    };
    return;
}