//
function script16169(int0: dbrow, int1: struct): int {
    var int2 = DB_GETFIELDCOUNT(int0, 413696);
    var int3 = 0;
    var int4 = -1;
    var int5 = 0;
    var int6 = -1 as obj;
    var int7 = 0;
    var int8 = -1;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = dbrow_getfield(int0, 413728, 0);
    var int13 = dbrow_getfield(int0, 413744, 0);
    if ((int12 == false)) {
        int11 = script16174(int1);
    };
    while ((++int4 < int2)) {
        [int6, int5, int7, int5, int9, int10, int8, int5] = dbrow_getfield(int0, 413696, int4);
        if ((script16175(int6, int8, int9, int10, int7, int11, int13) == 1)) {
            int3 = (int3 + 1);
        };
    };
    return int3;
}