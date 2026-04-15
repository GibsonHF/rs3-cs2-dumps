//
function script11205(int0: dbrow): boolean {
    if ((int0 == -1 as dbrow)) {
        return false;
    };
    if ((script4447(int0) == 0)) {
        return false;
    };
    var int1 = DATE_RUNEDAY_FROMDATE(dbrow_getfield(int0, 315456, 0));
    var int2 = DATE_RUNEDAY_FROMDATE(dbrow_getfield(int0, 315472, 0));
    var int3 = dbrow_getfield(int0, 315440, 0);
    return script7731(int1, int2, int3);
}