//
function script19376(int0: dbrow, int1: dbrow): unknown_int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int2 = 0;
    var int3 = DB_GETFIELDCOUNT(int0, 127024);
    while ((int2 < int3)) {
        if ((dbrow_getfield(int0, 127024, int2) == int1)) {
            return 1;
        };
        int2 = (int2 + 1);
    };
    return 0;
}