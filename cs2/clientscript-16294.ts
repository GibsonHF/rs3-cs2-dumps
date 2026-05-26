//
function script16294(int0: number): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script16294, int0), 31785004);
        return;
    };
    IF_SETHIDE(0, 31784965);
    IF_SETHIDE(0, 82116639);
    IF_SETHIDE(0, 82116640);
    IF_SETONTIMER(callback(), 31785004);
    IF_SETHIDE(1, 31784969);
    script16728(varbitplayer_22145, varbitplayer_27090);
    return;
}