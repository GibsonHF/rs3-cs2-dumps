//
function script6716(int0: int): [int, int, int] {
    var int1 = 0;
    var int2 = 0;
    int1 = (int0 / 3600);
    var int0 = MODULO(int0, 3600);
    int2 = (int0 / 60);
    int0 = MODULO(int0, 60);
    return [int1, int2, int0];
}