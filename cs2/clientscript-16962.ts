//
function script16962(int0: int): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script16962, int0), comp(1067, 23));
        return;
    };
    IF_SETONTIMER(callback(), comp(1067, 23));
    IF_SETHIDE(1, 69926933);
    IF_SETHIDE(0, 69926929);
    return;
}