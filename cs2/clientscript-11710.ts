//
function script11710(int0: number, int1: number): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script11710, int0, int1), int1);
        return;
    };
    if ((IF_FIND(70909991) == 1)) {
        CC_SETONTIMER(callback());
        script12642(0, 0);
        cc_setparam(5926, 750);
        cc_getparam(5926);
        IF_SETPOSITION(750, 146, 0, 0, 70909991);
    };
    IF_SETONTIMER(callback(), int1);
    return;
}