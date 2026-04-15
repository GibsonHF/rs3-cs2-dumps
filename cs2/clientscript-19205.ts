//
function script19205(int0: dbrow): [int, int, int, int, int, int] {
    switch (DB_GETROWTABLE(int0)) {
        case 193: {
            return dbrow_getfield(int0, 790560, 0);
        }
        case 294: {
            return dbrow_getfield(int0, 1204288, 0);
        }
        case 315: {
            return dbrow_getfield(int0, 1290304, 0);
        }
    };
    script12478("Missed plugin point for DBTable.");
    return [0, 0, 0, 0, 0, 0];
}