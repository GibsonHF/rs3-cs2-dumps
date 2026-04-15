//
function script17472(int0: dbrow): int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int1 = DB_GETFIELDCOUNT(int0, 946272);
    var int2 = -1 as dbrow;
    var int3 = 0;
    var int4 = -1;
    while ((++int4 < int1)) {
        int2 = dbrow_getfield(int0, 946272, int4);
        int3 = (int3 + DB_GETFIELDCOUNT(int2, 950288));
    };
    return int3;
}