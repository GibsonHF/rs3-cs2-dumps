//
function script8763(int0: int, int1: int, int2: int, int3: int): [int, int] {
    var int4 = int2;
    var int5 = 0;
    var int0 = (126 - ((10 * int0) + 15));
    var int3 = (126 - ((10 * int3) + 15));
    if ((int3 < int0)) {
        int5 = ((int0 - int3) / 12);
    } else {
        int5 = ((int3 - int0) / 12);
    };
    int5 = (int5 + 1);
    if ((int0 > int2)) {
        int4 = MIN(int0, (int2 + int5));
    } else {
        int4 = MAX(int0, (int2 - int5));
    };
    if (((MODULO(int1, 2) == 0) && ((int5 < 3) || (int4 == int2)))) {
        CC_SETHIDE(true);
    };
    CC_SETPOSITION((int1 + 1), int4, 0, 0);
    return [(int1 + 1), int4];
}