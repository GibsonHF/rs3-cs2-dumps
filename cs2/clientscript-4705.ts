//
function script4705(int0: int): [int, int, int] {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    int3 = ((int0 * 6) / 10);
    int2 = (int3 / 60);
    int3 = MODULO(int3, 60);
    if ((int2 > 59)) {
        int1 = (int2 / 60);
        int2 = MODULO(int2, 60);
    };
    return [int1, int2, int3];
}