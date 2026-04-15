//
function script14688(int0: dbrow): int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    if ((DB_GETFIELDCOUNT(int0, 364656) > 0)) {
        return dbrow_getfield(int0, 364656, 0);
    };
    var int1 = dbrow_getfield(int0, 364640, 0);
    if ((int1 == -1 as obj)) {
        script12478(`Invalid restored item specified for restoration ID: ${inttostring(dbrow_getfield(int0, 364544, 0), 10)}`);
        return 0;
    };
    var int2 = dbrow_getfield(int0, 364608, 0);
    var int3 = 0;
    var int4 = 1;
    var int5 = script14489(int1, int4);
    while ((int5 != -1 as obj)) {
        if ((OC_CATEGORY(int5) == 4602 as category)) {
            int3 = (int3 + script14490(int1, int4));
        };
        int5 = script14489(int1, ++int4);
    };
    var int6 = ((int3 * 7) + (int2 * 2));
    int6 = script20151(int6);
    return int6;
}