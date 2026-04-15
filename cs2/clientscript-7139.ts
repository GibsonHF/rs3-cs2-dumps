//
function script7139(int0: int): int {
    var int1 = (int0 / 10000);
    var int2 = MODULO((int0 / 100), 100);
    var int3 = MODULO(int0, 100);
    return (((int3 * 10000) + (int2 * 100)) + int1);
}