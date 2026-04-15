//
function script17255(int0: dbrow): unknown_int {
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 905344);
    var int3 = -1 as achievement;
    while ((int1 < int2)) {
        int3 = dbrow_getfield(int0, 905344, int1);
        if ((ACHIEVEMENT_REQSTATE(int3) != -2)) {
            return 0;
        };
        int1 = (int1 + 1);
    };
    return 1;
}