//
function script12459(int0: number, int1: number, int2: number, int3: number): number {
    if ((int0 < (int1 / 2))) {
        return script12454(int0, (int1 / 2), int2, int3);
    };
    if ((MODULO(int1, 2) == 1)) {
        return script12454((int0 - (int1 / 2)), (int1 / 2), (int2 + int3), (int3 * -1));
    };
    return script12454(((int0 - (int1 / 2)) + 1), (int1 / 2), (int2 + int3), (int3 * -1));
}