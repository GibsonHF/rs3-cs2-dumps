//
function script446(int0: component, int1: dbrow, int2: unknown_int): void {
    var int3 = -1;
    if ((int1 != -1 as dbrow)) {
        if (((int2 == 0) && (dbrow_getfield(int1, 503888, 0) != -1 as model))) {
            IF_SETMODEL(dbrow_getfield(int1, 503888, 0), int0);
        } else {
            IF_SETMODEL(dbrow_getfield(int1, 503872, 0), int0);
        };
        IF_SETMODELANIM(dbrow_getfield(int1, 503936, 0), int0);
        while ((++int3 < DB_GETFIELDCOUNT(int1, 503904))) {
            IF_SETRETEX(int3, dbrow_getfield(int1, 503904, int3), int0);
        };
    };
    return;
}