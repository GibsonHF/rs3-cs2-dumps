//
function script12377(int0: number, int1: number, int2: number): number {
    if ((int1 > int2)) {
        [int1, int2] = [int2, int1];
    };
    return MIN(MAX(int0, int1), int2);
}