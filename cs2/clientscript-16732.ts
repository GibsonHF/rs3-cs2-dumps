//
function script16732(int0: dbrow, int1: int): [obj, int] {
    var int2 = -1 as obj;
    var int3 = -1;
    if ((DB_GETROWTABLE(int0) != 98)) {
        script12478("Invalid Table, Expecting progression_track");
        return [int2, int3];
    };
    var int4 = DB_GETFIELDCOUNT(int0, 401424);
    var int5 = 0;
    var int6 = 0;
    while (((int6 < int4) && (int5 <= int1))) {
        [int2, int3, int5] = dbrow_getfield(int0, 401424, int6);
        if ((int5 == int1)) {
            return [int2, int3];
        };
        int6 = (int6 + 1);
    };
    return [-1 as obj, -1];
}