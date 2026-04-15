//
function script8245(): int {
    var int0 = 1;
    var int1 = 8429 as cs2enum;
    var int2 = ENUM_GETOUTPUTCOUNT(int1);
    var int3 = -1 as dbrow;
    while ((int0 <= int2)) {
        int3 = enum_getvalue(0, 74, int1, int0);
        if (((int3 != -1 as dbrow) && ((script11205(int3) == true) || ((script12477() >= DATE_RUNEDAY_FROMDATE(dbrow_getfield(int3, 315456, 0))) && (script12477() <= DATE_RUNEDAY_FROMDATE(dbrow_getfield(int3, 315472, 0))))))) {
            return int0;
        };
        int0 = (int0 + 1);
    };
    return -1;
}