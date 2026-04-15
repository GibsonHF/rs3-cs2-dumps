//
function script19763(): unknown_int {
    var int0 = varbitplayer_57152;
    var int1 = 0;
    var int2 = 0;
    if ((int0 == 1)) {
        int1 = varbitplayer_57153;
        int2 = varbitplayer_57155;
    } else {
        int1 = varbitplayer_57154;
        int2 = varbitplayer_57156;
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = -1 as dbrow;
    var int6 = -1 as dbrow;
    var int7 = 0;
    if ((int0 == 1)) {
        int5 = dbrow_getfield(14845 as dbrow, 1106000, 0);
    } else {
        int5 = dbrow_getfield(14845 as dbrow, 1106016, 0);
    };
    int3 = DB_GETFIELDCOUNT(int5, 1269760);
    if ((int2 >= int3)) {
        int6 = dbrow_getfield(int5, 1269776, 0);
        int4 = dbrow_getfield(int6, 1273856, 0);
    } else {
        int6 = dbrow_getfield(int5, 1269760, int2);
        int4 = dbrow_getfield(int6, 1273856, 0);
    };
    if ((int6 != -1 as dbrow)) {
        if ((int1 >= int4)) {
            return 1;
        };
        return 0;
    };
    script12478("Trying to check for bonus reward progress for the prize path but the reward dbrow is null");
    return 0;
}