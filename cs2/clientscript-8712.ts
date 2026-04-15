//
function script8712(int0: int, int1: int): int {
    if ((int0 >= (int1 - (2 * 16)))) {
        return 4095;
    };
    return MIN(int0, 4095);
}