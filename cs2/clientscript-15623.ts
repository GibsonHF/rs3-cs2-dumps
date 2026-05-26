//
function script15623(): void {
    var int0 = (0 - IF_GETWIDTH(comp(815, 0)));
    var int1 = MAX(int0, (IF_GETX(comp(906, 154)) - 10));
    var int2 = MIN(255, (IF_GETTRANS(comp(906, 153)) + 8));
    IF_SETPOSITION(int1, 0, 0, 2, comp(906, 154));
    IF_SETTRANS(int2, comp(906, 153));
    if ((int1 <= int0)) {
        IF_SETONTIMER(callback(), comp(906, 5));
        IF_SETHIDE(1, 59375768);
        IF_SETTRANS(255, 59375769);
    };
    return;
}