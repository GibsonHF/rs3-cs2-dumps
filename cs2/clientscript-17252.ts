//
function script17252(int0: dbrow): unknown_int {
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 905296);
    var int3 = -1 as quest;
    var string0 = "";
    while ((int1 < int2)) {
        int3 = dbrow_getfield(int0, 905296, int1);
        if ((script18524(int3) == 0)) {
            return 0;
        };
        int1 = (int1 + 1);
    };
    return 1;
}