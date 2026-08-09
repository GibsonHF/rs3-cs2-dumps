//
function script744(int0: number): void {
    var int1 = MODULO(DATE_MINUTES(), 60);
    if ((int1 <= 20)) {
        IF_SETPOSITION(0, 35, 1, 0, comp(17, 7));
        IF_SETPOSITION(0, 35, 1, 0, comp(1630, 46));
        IF_SETONTIMER(callback(), comp(17, 9));
        IF_SENDTOBACK(comp(17, 7));
        IF_SENDTOBACK(comp(1630, 46));
        IF_SETHIDE(true, comp(17, 7));
    } else {
        int1 = MAX(0, ((60 - int1) - 1));
        var int0 = (60 - int0);
        IF_SETPOSITION(0, 60, 1, 0, comp(17, 7));
        IF_SETPOSITION(0, 60, 1, 0, comp(1630, 46));
        IF_SETONTIMER(callback(script745, int1, int0, 1), comp(17, 9));
        IF_SETONTIMER(callback(script745, int1, int0, 0), comp(1630, 205));
        IF_SENDTOFRONT(comp(17, 7));
        IF_SENDTOFRONT(comp(1630, 46));
        IF_SETHIDE(false, comp(17, 7));
    };
    return;
}