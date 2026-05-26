//
function script14637(int0: number, int1: number): number {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    if (((int1 > 0) && ((int1 - 1) < DB_GETFIELDCOUNT(int0, 368800)))) {
        return dbrow_getfield(int0, 368800, (int1 - 1));
    };
    return 1;
}