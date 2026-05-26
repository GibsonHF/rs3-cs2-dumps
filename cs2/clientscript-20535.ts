//
function script20535(int0: number, int1: number, int2: number, int3: number): [number, number] {
    if ((int3 == 0)) {
        return [0, 0];
    };
    if (((int2 <= 1) && (int1 < int0))) {
        var int1 = int0;
    };
    return [(int3 / int1), MODULO(int3, int1)];
}