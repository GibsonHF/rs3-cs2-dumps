//
function script19631(int0: unknown_int): [int, int] {
    var int1 = 16;
    if ((int0 == 0)) {
        return [(8 + (int1 * 32)), 40];
    };
    return [(8 + (((int1 / 2) + MODULO(int1, 2)) * 32)), 72];
}