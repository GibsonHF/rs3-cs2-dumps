//
function script17061(int0: number, int1: number): void {
    script19028();
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script17061, int0, int1), int1);
        return;
    };
    IF_SETHIDE(0, 70909994);
    IF_SETTRANS(0, 70909999);
    IF_SETONTIMER(callback(), int1);
    IF_SETONTIMER(callback(script17062, 0, 70909999), 70909999);
    return;
}