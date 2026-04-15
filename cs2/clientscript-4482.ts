//
function script4482(int0: int, int1: int): int {
    var int2 = DATE_RUNEDAY_FROMDATE(1, int0, int1);
    var int3 = MODULO(int2, 7);
    var int4 = (int3 + 2);
    if ((int4 > 6)) {
        int3 = (int4 - 7);
    } else {
        int3 = int4;
    };
    if ((int3 == 0)) {
        int3 = 7;
    };
    return int3;
}