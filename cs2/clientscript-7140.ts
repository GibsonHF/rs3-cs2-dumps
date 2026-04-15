//
function script7140(int0: int): int {
    var int1 = (int0 / 10000);
    var int2 = MODULO((int0 / 100), 100);
    var int3 = MODULO(int0, 100);
    if (((int1 + 1) > enum_getvalue(0, 0, 13930 as cs2enum, (int2 - 1)))) {
        int1 = 1;
        if ((int2 == 12)) {
            int2 = 1;
            int3 = (int3 + 1);
        } else {
            int2 = (int2 + 1);
        };
    } else {
        int1 = (int1 + 1);
    };
    return (((int1 * 10000) + (int2 * 100)) + int3);
}