//
function script16383(int0: dbrow, int1: int): dbrow {
    var int2 = 0;
    var int3 = -1 as dbrow;
    switch (script16379()) {
        case 1: {
            int2 = DB_GETFIELDCOUNT(int0, 290864);
            if ((int1 < int2)) {
                int3 = dbrow_getfield(int0, 290864, int1);
            };
            break;
        }
        case 2: {
            int2 = DB_GETFIELDCOUNT(int0, 290880);
            if ((int1 < int2)) {
                int3 = dbrow_getfield(int0, 290880, int1);
            };
            break;
        }
        case 0: {
            int2 = DB_GETFIELDCOUNT(int0, 290848);
            if ((int1 < int2)) {
                int3 = dbrow_getfield(int0, 290848, int1);
            };
            break;
        }
    };
    return int3;
}