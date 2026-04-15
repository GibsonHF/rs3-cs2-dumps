//
function script19206(int0: dbrow): int {
    switch (DB_GETROWTABLE(int0)) {
        case 193: {
            return dbrow_getfield(int0, 790592, 0);
        }
        case 294: {
            return dbrow_getfield(int0, 1204304, 0);
        }
        case 315: {
            return dbrow_getfield(int0, 1290320, 0);
        }
    };
    script12478("Missed plugin point for DBTable.");
    return 0;
}