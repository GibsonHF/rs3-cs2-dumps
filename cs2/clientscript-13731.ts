//
function script13731(int0: int): int {
    var int1 = MODULO(int0, 1440);
    var int2 = 240;
    var int3 = ((int1 / int2) + 1);
    return (((int2 * int3) - int1) - 1);
}