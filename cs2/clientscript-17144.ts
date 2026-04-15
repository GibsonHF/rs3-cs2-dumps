//
function script17144(int0: component, int1: dbrow): void {
    var int2 = -1;
    if ((int1 != -1 as dbrow)) {
        IF_SETMODEL(dbrow_getfield(int1, 503872, 0), int0);
        while ((++int2 < DB_GETFIELDCOUNT(int1, 503904))) {
            IF_SETRETEX(int2, dbrow_getfield(int1, 503904, int2), int0);
        };
    };
    return;
}