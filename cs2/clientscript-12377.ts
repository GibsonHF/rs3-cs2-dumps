//
function script12377(int0: int, int1: int, int2: int): int {
    if ((int1 > int2)) {
        var [int1, int2] = [int2, int1];
    };
    return MIN(MAX(int0, int1), int2);
}