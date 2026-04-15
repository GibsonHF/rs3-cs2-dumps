//
function script4618(int0: int, int1: int): [int, int] {
    if ((int0 == 0)) {
        return [0, 0];
    };
    var int2 = int0;
    var int3 = int1;
    int3 = (((int1 / 10) * 60) + (MODULO(int1, 10) * 10));
    return [int2, int3];
}