//
function script2673(int0: unknown_int, int1: component, int2: int): void {
    if ((int0 == 1)) {
        IF_SETTRANS(0, int1);
    };
    if ((int2 < 500)) {
        var int2 = (int2 + 1);
        IF_SETONTIMER(callback(script2673, 0, int1, int2), int1);
        return;
    };
    var int3 = IF_GETTRANS(int1);
    if ((int3 < 255)) {
        int3 = MIN((int3 + 5), 255);
        IF_SETTRANS(int3, int1);
    };
    if ((int3 >= 255)) {
        IF_SETHIDE(true, int1);
        IF_SETTRANS(0, int1);
        IF_SETONTIMER(callback(), int1);
    } else {
        IF_SETONTIMER(callback(script2673, 0, int1, int2), int1);
    };
    return;
}