//[proc,scale_round]
function script669(int0: int, int1: int, int2: int): int {
    var int3 = 0;
    var int4 = 0;
    if ((int1 == 0)) {
        return 0;
    };
    if (((int0 == 0) || (int2 == 0))) {
        return 0;
    };
    if (((int0 / int1) >= (2147483647 / int2))) {
        return 2147483647;
    };
    if ((MODULO((MODULO(int0, int1) * MODULO(int2, int1)), int1) > (int1 / 2))) {
        return (SCALE(int0, int1, int2) + 1);
    };
    return SCALE(int0, int1, int2);
}