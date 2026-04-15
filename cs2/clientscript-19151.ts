//
function script19151(int0: dbrow): [npc, seq] {
    var int1 = -1 as npc;
    var int2 = -1 as seq;
    switch (DB_GETROWTABLE(int0)) {
        case 193: {
            [int1, int2] = dbrow_getfield(int0, 790544, 0);
            break;
        }
        case 294: {
            int1 = dbrow_getfield(int0, 1204256, 0);
            if ((DB_GETFIELDCOUNT(int0, 1204272) > 0)) {
                int2 = dbrow_getfield(int0, 1204272, 0);
            };
            break;
        }
        case 315: {
            int1 = dbrow_getfield(int0, 1290272, 0);
            if ((DB_GETFIELDCOUNT(int0, 1290288) > 0)) {
                int2 = dbrow_getfield(int0, 1290288, 0);
            };
            break;
        }
        default: {
            script12478("Missed plugin point for DBTable.");
            break;
        }
    };
    return [int1, int2];
}