//
function script20267(int0: dbrow, int1: int, int2: int, int3: int): [int, int] {
    var int4 = 0;
    var int5 = DB_GETFIELDCOUNT(int0, 1347664);
    var string0 = "";
    while ((int4 < int5)) {
        string0 = dbrow_getfield(int0, 1347668, int4);
        if (((STRING_LENGTH(string0) > 0) && (dbrow_getfield(int0, 1347667, int4) == false))) {
            var [int1, int2] = script19617(0, int1, int2, int3, 1, string0);
        };
        int4 = (int4 + 1);
    };
    int4 = 0;
    int5 = DB_GETFIELDCOUNT(int0, 1347696);
    while ((int4 < int5)) {
        string0 = dbrow_getfield(int0, 1347696, int4);
        if ((STRING_LENGTH(string0) > 0)) {
            [int1, int2] = script19617(0, int1, int2, int3, 1, string0);
        };
        int4 = (int4 + 1);
    };
    return [int1, int2];
}