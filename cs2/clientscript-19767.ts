//
function script19767(int0: int): int {
    if ((int0 == 0)) {
        var int0 = varbitplayer_57152;
    };
    var int1 = -1 as dbrow;
    var int2 = -1 as dbrow;
    var int3 = 0;
    if ((int0 == 1)) {
        int1 = dbrow_getfield(14845 as dbrow, 1106000, 0);
        int3 = varbitplayer_57155;
    } else {
        int1 = dbrow_getfield(14845 as dbrow, 1106016, 0);
        int3 = varbitplayer_57156;
    };
    var int4 = DB_GETFIELDCOUNT(int1, 1269760);
    if ((int3 >= int4)) {
        int2 = dbrow_getfield(int1, 1269776, 0);
    } else {
        int2 = dbrow_getfield(int1, 1269760, int3);
    };
    return dbrow_getfield(int2, 1273856, 0);
}