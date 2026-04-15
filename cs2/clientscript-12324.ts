//
function script12324(int0: int, int1: int): [int, int, int] {
    var int2 = ((int0 / 2) - (int1 / 2));
    int2 = MAX(int2, 1);
    var int3 = SCALE(int0, int2, 50);
    var int4 = SCALE(int1, int2, 50);
    return [int2, int3, int4];
}