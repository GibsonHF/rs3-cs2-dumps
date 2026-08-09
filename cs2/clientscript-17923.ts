//
function script17923(int0: number): number {
    if ((script17853() == -1)) {
        return -1;
    };
    if ((int0 <= 0)) {
        return -1;
    };
    var int1 = script17853();
    if ((int0 > DB_GETFIELDCOUNT(int1, 991536))) {
        return -1;
    };
    return dbrow_getfield(int1, 991536, (int0 - 1));
}