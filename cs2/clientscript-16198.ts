//
function script16198(int0: boolean, int1: unknown_int): void {
    if ((int1 != 82116674)) {
        IF_SETENABLED(int0, comp(1253, 66));
    };
    if ((int1 != 82116654)) {
        IF_SETENABLED(int0, comp(1253, 46));
    };
    if ((int1 != 82116677)) {
        IF_SETHIDE(int0, comp(1253, 73));
    };
    if ((int1 != 82116873)) {
        if ((int0 == false)) {
            varclient_1993 = 0;
            script8841(29, 0);
            script1646();
        } else {
            script10877();
            varclient_1993 = 1;
            script8841(29, 1);
        };
    };
    if ((script16161() == 52664 as struct)) {
        IF_SETENABLED(false, comp(1253, 46));
    };
    return;
}