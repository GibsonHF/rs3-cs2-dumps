//
function script12362(int0: int): int {
    var int1 = 0;
    var int2 = 0;
    while ((int1 < 32)) {
        int2 = (int2 + TESTBIT(int0, int1));
        int1 = (int1 + 1);
    };
    return int2;
}