//
function script19208(int0: dbrow): int {
    switch (DB_GETROWTABLE(int0)) {
        case 193: {
            return DB_GETFIELDCOUNT(int0, 790688);
        }
        case 294: {
            return DB_GETFIELDCOUNT(int0, 1204384);
        }
        case 315: {
            return DB_GETFIELDCOUNT(int0, 1290400);
        }
    };
    script12478("Missed plugin point for DBTable.");
    return 0;
}