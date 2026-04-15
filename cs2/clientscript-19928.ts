//
function script19928(int0: int): int {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    [int4, int3, int1] = DATE_RUNEDAY_TODATE(int0);
    int3 = (int3 + 1);
    if ((MODULO(int1, 4) == 0)) {
        int2 = 1;
    };
    if ((int1 < 2100)) {
        int5 = 6;
        int1 = (int1 - 2000);
    } else if ((int1 < 2200)) {
        int5 = 4;
        int1 = (int1 - 2100);
    };
    int5 = (int5 + int1);
    int1 = (int1 / 4);
    int5 = (int5 + int1);
    if ((((int3 == 1) || (int3 == 2)) && (int2 == 1))) {
        int3 = (int3 + 12);
    };
    int5 = (int5 + enum_getvalue(0, 0, 4846 as cs2enum, int3));
    int5 = (int5 + int4);
    return MODULO(int5, 7);
}