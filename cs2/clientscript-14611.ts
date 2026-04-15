//
function script14611(int0: dbrow): int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int1 = dbrow_getfield(int0, 385024, 0);
    var int2 = 0;
    if ((DB_GETFIELDCOUNT(int0, 385088) > 0)) {
        int2 = dbrow_getfield(int0, 385088, 0);
    } else {
        int2 = (script14612(int0) * 20);
    };
    if ((script3092() == 1)) {
        int2 = (int2 / 2);
    };
    return int2;
}