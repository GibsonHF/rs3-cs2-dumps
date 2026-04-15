//
function script16294(int0: int): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script16294, int0), comp(485, 44));
        return;
    };
    IF_SETHIDE(false, comp(485, 5));
    IF_SETHIDE(false, comp(1253, 31));
    IF_SETHIDE(false, comp(1253, 32));
    IF_SETONTIMER(callback(), comp(485, 44));
    IF_SETHIDE(1, 31784969);
    script16728(varbitplayer_22145, varbitplayer_27090);
    return;
}