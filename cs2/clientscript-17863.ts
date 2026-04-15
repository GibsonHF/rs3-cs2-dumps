//
function script17863(int0: dbrow, int1: int): int {
    if ((int0 == 7906 as dbrow)) {
        var int0 = varplayer_11339;
    };
    if ((int0 == -1 as dbrow)) {
        script12478("Null pass.");
        return 0;
    };
    if ((DB_GETROWTABLE(int0) != 242)) {
        script12478("Invalid dbtable.");
        return 0;
    };
    if ((int1 < 1)) {
        return 0;
    };
    var int2 = dbrow_getfield(int0, 991312, 0);
    var int3 = dbrow_getfield(int0, 991328, 0);
    var int4 = dbrow_getfield(int0, 991280, 0);
    var int5 = 0;
    if ((int1 >= (int4 * int2))) {
        var int1 = (int1 - (int4 * int2));
        int5 = (int1 / int3);
        int5 = (int5 + int4);
    } else {
        int5 = (int1 / int2);
    };
    return int5;
}