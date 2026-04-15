//
function script17923(int0: int): dbrow {
    if ((script17853() == -1 as dbrow)) {
        return -1 as dbrow;
    };
    if ((int0 <= 0)) {
        return -1 as dbrow;
    };
    var int1 = script17853();
    if ((int0 > DB_GETFIELDCOUNT(int1, 991536))) {
        return -1 as dbrow;
    };
    return dbrow_getfield(int1, 991536, (int0 - 1));
}