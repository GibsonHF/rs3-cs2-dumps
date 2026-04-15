//
function script10900(int0: int): [int, int] {
    var int1 = ((int0 / 60) / 24);
    var int2 = (int0 - ((int1 * 24) * 60));
    var int3 = (int2 / 60);
    var int4 = MODULO(int2, 60);
    return [int3, int4];
}