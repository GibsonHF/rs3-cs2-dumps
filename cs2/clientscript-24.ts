//
function script24(int0: number, int1: number): number {
    var int2 = (int1 / int0);
    if ((MODULO(int1, int0) != 0)) {
        int2 = (int2 + 1);
    };
    return int2;
}