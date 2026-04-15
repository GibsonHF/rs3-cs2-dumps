//
function script5259(int0: int): [int, int, int] {
    var int1 = 0;
    var int2 = 0;
    int2 = (int0 / 60);
    var int0 = MODULO(int0, 60);
    if ((int2 > 59)) {
        int1 = (int2 / 60);
        int2 = MODULO(int2, 60);
    };
    return [int1, int2, int0];
}