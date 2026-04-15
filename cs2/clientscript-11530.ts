//
function script11530(int0: int): [int, int, int, int] {
    var int1 = AND(int0, 3);
    var int2 = AND((int0 / 4), 3);
    var int3 = AND((int0 / 16), 31);
    int3 = (int3 * 2);
    int2 = ((int2 * 2) + 1);
    int1 = ((int1 * 20) + 30);
    var int4 = ((int3 * 1024) + (int2 * 128));
    int1 = MIN(int1, 120);
    int1 = MAX(int1, 30);
    var int5 = (7 + (int1 / 15));
    return [((int4 + int1) - (int5 * 3)), ((int4 + int1) - (int5 * 2)), ((int4 + int1) - int5), (int4 + int1)];
}