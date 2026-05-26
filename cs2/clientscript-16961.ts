//
function script16961(int0: number): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script16961, int0), 69926935);
        return;
    };
    IF_SETHIDE(0, 69926933);
    IF_SETHIDE(0, 69926934);
    IF_SETMODELANIM(35056, 69926991);
    IF_SETONTIMER(callback(script16962, 120), 69926935);
    return;
}