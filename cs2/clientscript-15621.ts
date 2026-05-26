//
function script15621(): void {
    var int0 = MIN(0, (IF_GETX(comp(906, 154)) + 10));
    var int1 = MAX(180, (IF_GETTRANS(comp(906, 153)) - 8));
    IF_SETPOSITION(int0, 0, 0, 2, comp(906, 154));
    IF_SETTRANS(int1, comp(906, 153));
    if ((int0 >= 0)) {
        IF_SETONTIMER(callback(), comp(906, 5));
        IF_SETTRANS(180, 59375769);
    };
    return;
}