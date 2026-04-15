//
function script13202(int0: int, int1: int, int2: int, int3: int): int {
    var int4 = AND(int2, int3);
    if ((int1 == 0)) {
        if ((int4 == 0)) {
            return 0;
        };
        if ((int4 == int3)) {
            return 1;
        };
        return 2;
    };
    if (((int1 > 31) || (TESTBIT(int3, int1) == 0))) {
        return -1;
    };
    return TESTBIT(int4, int1);
}