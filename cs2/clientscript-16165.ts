//
function script16165(int0: int, int1: dbrow, int2: struct): int {
    var int3 = 0;
    var int4 = -1 as dbrow;
    var int5 = 0;
    var int6 = -1;
    if (((script13048() == 1) && (varplayer_10404 != 0))) {
        if ((int0 == varplayer_10404)) {
            return 10000;
        };
        return 0;
    };
    if ((int1 != -1 as dbrow)) {
        while ((++int6 < DB_GETFIELDCOUNT(int1, 602112))) {
            [int3, int4, int5] = dbrow_getfield(int1, 602112, int6);
            if ((int3 == int0)) {
                int5 = script4577(int1, int0, int5);
                if ((script16169(int4, int2) == 0)) {
                    return 0;
                };
                return int5;
            };
        };
    };
    return 0;
}