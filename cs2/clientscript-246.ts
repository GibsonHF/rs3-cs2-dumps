//
function script246(int0: dbrow): unknown_int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = dbrow_getfield(int0, 299040, 0);
    if ((DATE_RUNEDAY() <= int2)) {
        return 1;
    };
    if ((DATE_RUNEDAY() <= dbrow_getfield(int0, 299056, 0))) {
        return 2;
    };
    return 0;
}