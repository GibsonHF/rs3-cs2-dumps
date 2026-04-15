//
function script19170(int0: dbrow): [graphic, graphic, graphic, graphic] {
    var int1 = -1 as graphic;
    var int2 = -1 as graphic;
    var int3 = -1 as graphic;
    var int4 = -1 as graphic;
    switch (DB_GETROWTABLE(int0)) {
        case 193: {
            int1 = dbrow_getfield(int0, 790704, 0);
            int2 = dbrow_getfield(int0, 790720, 0);
            int3 = dbrow_getfield(int0, 790736, 0);
            int4 = dbrow_getfield(int0, 790752, 0);
            if ((script18534() == 1)) {
                [int1, int2, int3, int4] = script18549(int0, int1, int2, int3, int4);
            };
            break;
        }
        case 294: {
            int1 = dbrow_getfield(int0, 1204400, 0);
            int3 = dbrow_getfield(int0, 1204416, 0);
            int4 = dbrow_getfield(int0, 1204432, 0);
            break;
        }
        case 315: {
            int1 = dbrow_getfield(int0, 1290416, 0);
            int3 = dbrow_getfield(int0, 1290432, 0);
            int4 = dbrow_getfield(int0, 1290448, 0);
            break;
        }
        default: {
            script12478("Missed plugin point for DBTable.");
            break;
        }
    };
    return [int1, int2, int3, int4];
}