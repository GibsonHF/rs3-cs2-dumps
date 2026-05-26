//
function script11025(int0: number): [number, number, number] {
    var int1 = (int0 / 1440);
    var int0 = MODULO(int0, 1440);
    var int2 = (int0 / 60);
    int0 = MODULO(int0, 60);
    return [int1, int2, int0];
}