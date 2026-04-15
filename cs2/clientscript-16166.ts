//
function script16166(int0: dbrow): int {
    var int1 = 0;
    var int2 = -1 as dbrow;
    var int3 = 0;
    var int4 = 0;
    var int5 = -1;
    if ((int0 != -1 as dbrow)) {
        while ((++int5 < DB_GETFIELDCOUNT(int0, 602112))) {
            [int1, int2, int3] = dbrow_getfield(int0, 602112, int5);
            int3 = script4577(int0, int1, int3);
            if ((script16169(int2, script16161()) != 0)) {
                int4 = (int4 + int3);
            };
        };
    };
    return int4;
}