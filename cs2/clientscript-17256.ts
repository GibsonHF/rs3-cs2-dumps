//
function script17256(int0: dbrow): unknown_int {
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 905360);
    var int3 = -1 as achievement;
    while ((int1 < int2)) {
        int3 = dbrow_getfield(int0, 905360, int1);
        if ((ACHIEVEMENT_ALLPREREQMET(int3) == 0)) {
            return 0;
        };
        int1 = (int1 + 1);
    };
    return 1;
}