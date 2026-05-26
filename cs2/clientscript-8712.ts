//
function script8712(int0: number, int1: number): number {
    if ((int0 >= (int1 - (2 * 16)))) {
        return 4095;
    };
    return MIN(int0, 4095);
}