//
function script17057(int0: int, int1: component): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script17057, int0, int1), int1);
        return;
    };
    IF_SETHIDE(true, int1);
    IF_SETONTIMER(callback(), int1);
    return;
}