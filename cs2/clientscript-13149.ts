//
function script13149(int0: int, int1: int): int {
    var int2 = -1;
    var int3 = 0;
    while (((++int2 < 32) && (int3 < int0))) {
        if ((TESTBIT(int1, int2) == 1)) {
            int3 = (int3 + 1);
        };
        if ((int3 == int0)) {
            return int2;
        };
    };
    return -1;
}