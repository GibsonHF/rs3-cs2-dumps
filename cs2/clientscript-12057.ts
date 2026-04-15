//
function script12057(int0: dbrow): int {
    if ((int0 == -1 as dbrow)) {
        return 1;
    };
    if ((DB_GETFIELDCOUNT(int0, 16528) == 0)) {
        return 1;
    };
    return script12059(dbrow_getfield(int0, 16528, 0));
}