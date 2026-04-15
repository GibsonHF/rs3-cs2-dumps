//
function script14637(int0: dbrow, int1: int): int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    if (((int1 > 0) && ((int1 - 1) < DB_GETFIELDCOUNT(int0, 368800)))) {
        return dbrow_getfield(int0, 368800, (int1 - 1));
    };
    return 1;
}