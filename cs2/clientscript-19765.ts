//
function script19765(int0: int, int1: int): [obj, int, struct, graphic, dbrow] {
    if ((int0 == 0)) {
        var int0 = 1;
    };
    var int2 = 0;
    var int3 = -1 as dbrow;
    var int4 = 0;
    var int5 = -1 as dbrow;
    var int6 = 0;
    var int7 = -1 as obj;
    var int8 = 1;
    var int9 = -1 as struct;
    var int10 = -1 as graphic;
    switch (int0) {
        case 1: {
            int3 = dbrow_getfield(14845 as dbrow, 1106000, 0);
            break;
        }
        case 2: {
            int3 = dbrow_getfield(14845 as dbrow, 1106016, 0);
            break;
        }
        case 3: {
            [int6, int7, int8, int9, int10] = dbrow_getfield(14848 as dbrow, 1277952, int1);
            return [int7, int8, int9, int10, int5];
        }
    };
    int4 = DB_GETFIELDCOUNT(int3, 1269760);
    if ((int1 >= int4)) {
        int5 = dbrow_getfield(int3, 1269776, 0);
    } else {
        int5 = dbrow_getfield(int3, 1269760, int1);
    };
    if ((int5 != -1 as dbrow)) {
        [int7, int8] = dbrow_getfield(int5, 1273872, 0);
        [int9, int10] = dbrow_getfield(int5, 1273888, 0);
    } else {
        script12478("Reward dbrow is null when attempting to get trh205 reward.");
    };
    return [int7, int8, int9, int10, int5];
}