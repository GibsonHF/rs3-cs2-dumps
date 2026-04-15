//
function script4743(int0: int): [int, int, int, int] {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    int1 = MODULO(int0, 256);
    var int0 = (int0 / 256);
    int2 = MODULO(int0, 256);
    int0 = (int0 / 256);
    int3 = MODULO(int0, 256);
    int0 = (int0 / 256);
    int4 = int0;
    return [int1, int2, int3, int4];
}