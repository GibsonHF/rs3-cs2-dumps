//
function script7442(int0: int, int1: int): int {
    var int2 = int1;
    var int3 = 1;
    while (((int2 < 32) && (int3 == 1))) {
        int3 = TESTBIT(int0, int2);
        if ((int3 == 0)) {
            return int2;
        };
        int2 = (int2 + 1);
    };
    return -1;
}