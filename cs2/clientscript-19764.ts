//
function script19764(int0: int): [obj, int, struct, graphic] {
    if ((int0 == 0)) {
        var int0 = varbitplayer_57152;
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = -1 as dbrow;
    var int4 = 0;
    var int5 = -1 as dbrow;
    var int6 = -1 as obj;
    var int7 = 1;
    var int8 = -1 as struct;
    var int9 = -1 as graphic;
    if ((int0 == 1)) {
        int1 = varbitplayer_57153;
        int2 = varbitplayer_57155;
        int3 = dbrow_getfield(14845 as dbrow, 1106000, 0);
    } else {
        int1 = varbitplayer_57154;
        int2 = varbitplayer_57156;
        int3 = dbrow_getfield(14845 as dbrow, 1106016, 0);
    };
    int4 = DB_GETFIELDCOUNT(int3, 1269760);
    if ((int2 >= int4)) {
        int5 = dbrow_getfield(int3, 1269776, 0);
    } else {
        int5 = dbrow_getfield(int3, 1269760, int2);
    };
    if ((int5 != -1 as dbrow)) {
        [int6, int7] = dbrow_getfield(int5, 1273872, 0);
        [int8, int9] = dbrow_getfield(int5, 1273888, 0);
    } else {
        script12478("Reward dbrow is null when attempting to get trh205 reward..");
    };
    return [int6, int7, int8, int9];
}