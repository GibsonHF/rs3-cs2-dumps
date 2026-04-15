//
function script16168(int0: dbrow): int {
    if ((DB_GETFIELDCOUNT(int0, 413712) == 1)) {
        return dbrow_getfield(int0, 413712, 0);
    };
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    var int4 = -1 as obj;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    var int8 = 0;
    var int9 = 0;
    var int10 = script16174(script16161());
    var int11 = dbrow_getfield(int0, 413744, 0);
    while ((++int1 < DB_GETFIELDCOUNT(int0, 413696))) {
        [int4, int3, int5, int6, int8, int9, int7, int3] = dbrow_getfield(int0, 413696, int1);
        if ((script16175(int4, int7, int8, int9, int5, int10, int11) == 1)) {
            int2 = (int2 + int6);
        };
    };
    return int2;
}