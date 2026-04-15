//
function script16961(int0: int): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script16961, int0), comp(1067, 23));
        return;
    };
    IF_SETHIDE(false, comp(1067, 21));
    IF_SETHIDE(false, comp(1067, 22));
    IF_SETMODELANIM(35056 as seq, comp(1067, 79));
    IF_SETONTIMER(callback(script16962, 120), comp(1067, 23));
    return;
}