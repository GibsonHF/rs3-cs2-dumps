//
function script17250(int0: dbrow): unknown_int {
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 905248);
    var int3 = -1 as stat;
    var int4 = 0;
    while ((int1 < int2)) {
        [int3, int4] = dbrow_getfield(int0, 905248, int1);
        if ((STAT_BASE(int3) < int4)) {
            return 0;
        };
        int1 = (int1 + 1);
    };
    return 1;
}