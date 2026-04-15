//
function script8710(int0: int, int1: int, int2: int): int {
    var int3 = 10;
    if ((int0 <= 16)) {
        return 0;
    };
    if (((int0 + int1) >= (int2 - 16))) {
        return 4095;
    };
    var int0 = (int0 * int3);
    var int1 = (int1 * int3);
    var int2 = (int2 * int3);
    int2 = (int2 / 2);
    int0 = ((int0 + (int1 / 2)) - int2);
    int0 = INTERPOLATE((0 * int3), (4095 * int3), (0 - int2), int2, int0);
    if ((MODULO(int0, int3) > 0)) {
        return MAX(0, MIN(((int0 / int3) + 1), 4095));
    };
    return MAX(0, MIN((int0 / int3), 4095));
}