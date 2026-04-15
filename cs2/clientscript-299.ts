//
function script299(int0: int, int1: dbrow): [int, int] {
    var int2 = 0;
    var int3 = DB_GETFIELDCOUNT(int1, 299248);
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    while ((int2 < int3)) {
        [int6, int7, int4, int5] = dbrow_getfield(int1, 299248, int2);
        if (((int6 == int0) && (int8 == -1))) {
            int8 = int2;
        };
        if (((int6 != int0) && (int8 != -1))) {
            return [int8, (int2 - int8)];
        };
        int2 = (int2 + 1);
    };
    if (((int8 != -1) && (int6 == int0))) {
        return [int8, ((int2 - 1) - int8)];
    };
    script12478(`Runepass just ran out yak_path points at button ${inttostring(int6, 10)}, but we wanted data for button ${inttostring(int0, 10)} `);
    return [0, 0];
}