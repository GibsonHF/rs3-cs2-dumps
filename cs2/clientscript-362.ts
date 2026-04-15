//
function script362(int0: int, int1: int): [int, int] {
    if (((int1 > 8) || (int1 < 1))) {
        return [int0, 0];
    };
    if ((int0 == -2147483648)) {
        var int0 = (int0 + 1);
    };
    var int2 = POW(10, int1);
    if ((int1 > 0)) {
        return [(int0 / int2), MODULO(ABS(int0), int2)];
    };
    return [0, 0];
}