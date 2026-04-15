//
function script20307(int0: dbrow, int1: int): graphic {
    var int2 = script20119(varplayer_12314);
    if ((int2 == -1 as dbrow)) {
        return -1 as graphic;
    };
    var int3 = -1 as dbrow;
    var int4 = 0;
    switch (int1) {
        case 1: {
            int3 = dbrow_getfield(int2, 1372256, 0);
            int4 = dbrow_getfield(int0, 1368160, 0);
            break;
        }
        default: {
            int3 = dbrow_getfield(int2, 1372256, 1);
            int4 = dbrow_getfield(int0, 1368144, 0);
            break;
        }
    };
    if ((DB_GETROWTABLE(int3) == 133)) {
        return dbrow_getfield(int3, 544770, int4);
    };
    return dbrow_getfield(int3, 1376274, int4);
}