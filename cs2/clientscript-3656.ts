//
function script3656(int0: int, int1: int): [int, int, dbrow, int, int] {
    var int2 = script3609();
    var int3 = 0;
    var int4 = DB_GETFIELDCOUNT(int2, 299312);
    var int5 = 0;
    var int6 = 0;
    var int7 = -1 as dbrow;
    var int8 = 0;
    var int9 = 0;
    if ((int0 == varplayer_9078)) {
        switch (int1) {
            case 0: {
                int7 = varplayer_9064;
                int8 = varplayer_9068;
                int9 = varplayer_9069;
                int6 = varplayer_9070;
                break;
            }
            case 1: {
                int7 = varplayer_9071;
                int8 = varplayer_9075;
                int9 = varplayer_9076;
                int6 = varplayer_9077;
                break;
            }
        };
        return [int0, int6, int7, int8, int9];
    };
    while ((int3 < int4)) {
        [int5, int6, int7, int8, int9] = dbrow_getfield(int2, 299312, int3);
        if ((((int5 == int0) && (int7 != -1 as dbrow)) && (AND(int6, varplayer_9062) != 0))) {
            if ((int1 == 0)) {
                return [int5, int6, int7, int8, int9];
            };
            var int1 = (int1 - 1);
        };
        int3 = (int3 + 1);
    };
    return [-1, -1, -1 as dbrow, -1, -1];
}