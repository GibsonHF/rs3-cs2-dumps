//
function script351(int0: int, int1: int): int {
    var int2 = 0;
    var int3 = 0;
    while ((++int2 <= int0)) {
        if ((TESTBIT(int1, int2) == 1)) {
            int3 = (int3 + 1);
        };
    };
    return int3;
}