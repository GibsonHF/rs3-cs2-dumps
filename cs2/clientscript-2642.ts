//
function script2642(int0: dbrow, int1: dbrow): unknown_int {
    var int2 = 0;
    var int3 = 0;
    int3 = DB_GETFIELDCOUNT(int1, 155920);
    if (((int3 == 0) && (script2643(int1) == 1))) {
        return 1;
    };
    while ((int2 < int3)) {
        if ((dbrow_getfield(int1, 155920, int2) == int0)) {
            return 1;
        };
        int2 = (int2 + 1);
    };
    return 0;
}