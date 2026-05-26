//
function script19917(int0: number, int1: number, int2: number): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script19917, int0, int1, int2), int2);
        return;
    };
    IF_SETMODELANIM(int1, int2);
    IF_SETONTIMER(callback(), int2);
    return;
}