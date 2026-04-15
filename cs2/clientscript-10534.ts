//
function script10534(int0: component, int1: int): void {
    if ((MODULO(CLIENTCLOCK(), 5) != 0)) {
        return;
    };
    var int2 = IF_GETTRANS(int0);
    var int3 = 0;
    if (((int2 <= 100) && (int1 < 0))) {
        IF_SETONTIMER(callback(script10534, int0, (int1 * -1)), int0);
    };
    if (((int2 >= 255) && (int1 > 0))) {
        IF_SETONTIMER(callback(script10534, int0, (int1 * -1)), int0);
    };
    int3 = MAX(MIN((int2 + int1), 255), 0);
    IF_SETTRANS(int3, int0);
    return;
}