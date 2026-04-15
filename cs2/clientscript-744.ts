//
function script744(int0: int): void {
    var int1 = MODULO(DATE_MINUTES(), 60);
    if ((int1 <= 20)) {
        IF_SETPOSITION(0, 35, 1, 0, comp(17, 7));
        IF_SETPOSITION(0, 35, 1, 0, comp(1630, 46));
        IF_SETONTIMER(callback(), comp(17, 9));
        IF_SENDTOBACK(1114119);
        IF_SENDTOBACK(106823726);
        IF_SETHIDE(1, 1114119);
    } else {
        int1 = MAX(0, ((60 - int1) - 1));
        var int0 = (60 - int0);
        IF_SETPOSITION(0, 60, 1, 0, comp(17, 7));
        IF_SETPOSITION(0, 60, 1, 0, comp(1630, 46));
        IF_SETONTIMER(callback(script745, int1, int0, 1), 1114121);
        IF_SETONTIMER(callback(script745, int1, int0, 0), 106823885);
        IF_SENDTOFRONT(1114119);
        IF_SENDTOFRONT(106823726);
        IF_SETHIDE(0, 1114119);
    };
    return;
}