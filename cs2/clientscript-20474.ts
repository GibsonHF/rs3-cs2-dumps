//
function script20474(int0: number): number {
    if ((int0 == -1)) {
        return -1;
    };
    if ((GENDER() == 0)) {
        return dbrow_getfield(int0, 1425472, 0);
    };
    return dbrow_getfield(int0, 1425488, 0);
}