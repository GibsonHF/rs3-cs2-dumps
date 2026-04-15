//
function script17650(int0: cs2enum, int1: int, int2: int): void {
    var int3 = 0;
    var int2 = MIN(31, int2);
    while ((int3 < int2)) {
        if ((TESTBIT(int1, int3) == 1)) {
            script17651(int0, int3);
        };
        int3 = (int3 + 1);
    };
    return;
}