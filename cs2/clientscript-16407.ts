//
function script16407(int0: component, int1: int, int2: int, int3: unknown_int): void {
    if ((MODULO(int2, 40) < 20)) {
        var int1 = (int1 + 1);
    } else {
        int1 = (int1 - 1);
    };
    var int2 = (int2 + 1);
    if ((int3 == 1)) {
        IF_SETPOSITION(int1, 0, 0, 0, int0);
    } else {
        IF_SETPOSITION(0, int1, 0, 0, int0);
    };
    IF_SETONTIMER(callback(script16407, int0, int1, int2, int3), int0);
    return;
}