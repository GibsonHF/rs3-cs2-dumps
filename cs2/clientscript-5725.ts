//
function script5725(int0: dbrow): unknown_int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int1 = DB_GETFIELDCOUNT(int0, 548928);
    var int2 = 0;
    var int3 = -1 as dbrow;
    if ((int1 > 0)) {
        while ((int2 < int1)) {
            int3 = dbrow_getfield(int0, 548928, int2);
            if (((int3 != -1 as dbrow) && (script12115(int3) == 1))) {
                return 1;
            };
            int2 = (int2 + 1);
        };
        return 0;
    };
    return script12115(int0);
}