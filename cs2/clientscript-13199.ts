//
function script13199(int0: int): [int, int, int, int] {
    var int1 = MODULO(int0, 100);
    var int0 = (int0 / 100);
    var int2 = MODULO(int0, 100);
    int0 = (int0 / 100);
    var int3 = MODULO(int0, 10);
    int0 = (int0 / 10);
    var int4 = MODULO(int0, 100);
    return [int3, int2, int1, int4];
}