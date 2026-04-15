//
function script17477(int0: dbrow): int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    switch (int0) {
        default: {
            break;
        }
    };
    var int1 = DB_GETFIELDCOUNT(int0, 946272);
    var int2 = -1 as dbrow;
    var int3 = 0;
    var int4 = -1 as dbrow;
    var int5 = 0;
    var int6 = -1;
    var int7 = -1;
    while ((++int6 < int1)) {
        int2 = dbrow_getfield(int0, 946272, int6);
        int3 = DB_GETFIELDCOUNT(int2, 950288);
        int7 = -1;
        while ((++int7 < int3)) {
            int4 = dbrow_getfield(int2, 950288, int7);
            int5 = (int5 + dbrow_getfield(int4, 954432, 0));
        };
    };
    return int5;
}