//
function script17062(int0: number, int1: number): void {
    if ((int0 < 255)) {
        var int0 = MIN(255, (int0 + 3));
        IF_SETTRANS(int0, 70909999);
        IF_SETONTIMER(callback(script17062, int0, int1), int1);
        return;
    };
    IF_SETHIDE(1, 70909994);
    IF_SETONTIMER(callback(), int1);
    return;
}