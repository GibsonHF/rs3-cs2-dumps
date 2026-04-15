//
function script16582(int0: int): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script16582, int0), comp(485, 11));
        return;
    };
    IF_SETONTIMER(callback(), comp(485, 11));
    IF_SETONTIMER(callback(), 82116613);
    IF_SETHIDE(0, 31784969);
    return;
}