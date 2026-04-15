//
function script19154(int0: dbrow): string {
    switch (DB_GETROWTABLE(int0)) {
        case 193: {
            return dbrow_getfield(int0, 790640, 0);
        }
        case 294: {
            return dbrow_getfield(int0, 1204336, 0);
        }
        case 315: {
            return dbrow_getfield(int0, 1290352, 0);
        }
    };
    script12478("Missed plugin point for DBTable.");
    return "";
}