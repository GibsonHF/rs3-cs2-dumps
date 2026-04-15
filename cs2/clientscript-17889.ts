//
function script17889(int0: dbrow, int1: dbrow): int {
    var int2 = DB_GETFIELDCOUNT(int0, 991360);
    var int3 = 0;
    var int4 = -1 as dbrow;
    var int5 = 0;
    while ((int5 < int2)) {
        [int3, int4] = dbrow_getfield(int0, 991360, int5);
        if ((int4 == int1)) {
            return int3;
        };
        int5 = (int5 + 1);
    };
    return -1;
}