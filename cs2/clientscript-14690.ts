//
function script14690(int0: dbrow): int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    if ((DB_GETFIELDCOUNT(int0, 364672) > 0)) {
        return dbrow_getfield(int0, 364672, 0);
    };
    var int1 = script14688(int0);
    return SCALE(40, 100, int1);
}