//
function script20474(int0: dbrow): graphic {
    if ((int0 == -1 as dbrow)) {
        return -1 as graphic;
    };
    if ((GENDER() == 0)) {
        return dbrow_getfield(int0, 1425472, 0);
    };
    return dbrow_getfield(int0, 1425488, 0);
}