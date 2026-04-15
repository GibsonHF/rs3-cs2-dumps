//
function script16955(int0: dbrow, int1: int): dbrow {
    var int2 = -1 as dbrow;
    if ((DB_GETROWTABLE(int0) != 98)) {
        script12478("Invalid Table, Expecting progression_track");
        return int2;
    };
    var int3 = DB_GETFIELDCOUNT(int0, 401440);
    var int4 = 0;
    var int5 = 0;
    while (((int5 < int3) && (int4 <= int1))) {
        [int2, int4] = dbrow_getfield(int0, 401440, int5);
        if ((int4 == int1)) {
            return int2;
        };
        int5 = (int5 + 1);
    };
    return -1 as dbrow;
}