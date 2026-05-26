//
function script1470(int0: number, int1: number, int2: number): number {
    var int3 = (MODULO(((int0 - int1) + int2), int2) - (int2 / 2));
    if ((int3 < 0)) {
        return -1;
    };
    return 1;
}