//
function script13149(int0: number, int1: number): number {
    var int2 = -1;
    var int3 = 0;
    int2 = (int2 + 1);
    while ((int2 < 32)) {
        if ((int3 < int0)) {
            if ((TESTBIT(int1, int2) == 1)) {
                int3 = (int3 + 1);
            };
            if ((int3 == int0)) {
                return int2;
            };
        };
        return -1;
    };
    return -1;
}