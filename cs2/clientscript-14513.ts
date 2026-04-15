//
function script14513(int0: dbrow): int {
    if ((int0 == -1 as dbrow)) {
        return -1;
    };
    var int1 = -1 as dbrow;
    var int2 = DB_GETFIELDCOUNT(int0, 340080);
    var int3 = 0;
    var int4 = -1;
    while ((++int4 < int2)) {
        int1 = dbrow_getfield(int0, 340080, int4);
        int3 = MAX(int3, DB_GETFIELDCOUNT(int1, 344272));
    };
    return int3;
}