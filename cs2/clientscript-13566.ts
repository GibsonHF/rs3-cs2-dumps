//
function script13566(int0: int): int {
    var int1 = 0;
    var int2 = 0;
    while ((int0 > 0)) {
        if ((MODULO(int0, 2) != 0)) {
            int2 = SETBIT(int2, int1);
        };
        var int0 = (int0 / 2);
        int1 = (int1 + 1);
    };
    return BITCOUNT(int2);
}