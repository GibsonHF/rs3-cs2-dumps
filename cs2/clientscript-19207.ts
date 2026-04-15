//
function script19207(int0: dbrow): jingle {
    switch (DB_GETROWTABLE(int0)) {
        case 193: {
            return dbrow_getfield(int0, 790768, 0);
        }
        case 294: {
            return dbrow_getfield(int0, 1204448, 0);
        }
        case 315: {
            return dbrow_getfield(int0, 1290464, 0);
        }
    };
    return -1 as jingle;
}