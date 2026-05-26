//
function script20533(int0: number, int1: number): [number, number] {
    var int2 = script8374(int0);
    var int3 = MAX(1, (IF_GETWIDTH(int0) / int1));
    var int4 = MAX(1, ((int2 / int3) + MIN(1, MODULO(int2, int3))));
    return [int4, int3];
}