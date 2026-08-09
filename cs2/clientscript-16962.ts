//
function script16962(int0: number): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script16962, int0), comp(1067, 23));
        return;
    };
    IF_SETONTIMER(callback(), comp(1067, 23));
    IF_SETHIDE(true, comp(1067, 21));
    IF_SETHIDE(false, comp(1067, 17));
    return;
}