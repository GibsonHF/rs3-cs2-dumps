//
function script17062(int0: int, int1: component): void {
    if ((int0 < 255)) {
        var int0 = MIN(255, (int0 + 3));
        IF_SETTRANS(int0, comp(1082, 47));
        IF_SETONTIMER(callback(script17062, int0, int1), int1);
        return;
    };
    IF_SETHIDE(true, comp(1082, 42));
    IF_SETONTIMER(callback(), int1);
    return;
}