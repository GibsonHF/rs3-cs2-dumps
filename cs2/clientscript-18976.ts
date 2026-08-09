//
function script18976(int0: number): number {
    var int1 = DB_GETFIELDCOUNT(int0, 376912);
    var int2 = 0;
    var int3 = -1;
    int3 = (int3 + 1);
    while ((int3 < int1)) {
        if ((script18965(dbrow_getfield(int0, 376912, int3)) == 1)) {
            int2 = (int2 + 1);
        };
    };
    return int2;
}