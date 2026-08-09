//
function script19766(int0: number): [number, number, number, number, number] {
    var int1 = varbitplayer_57155;
    var int2 = varbitplayer_57156;
    if ((int0 == 1)) {
        int1 = (int1 + 1);
    } else {
        int2 = (int2 + 1);
    };
    var int3 = -1;
    var int4 = 0;
    var int5 = -1;
    var int6 = 0;
    var int7 = -1;
    var int8 = -1;
    var int9 = DB_GETFIELDCOUNT(14848 as dbrow, 1277952);
    if ((int9 <= 0)) {
        return [0, -1, 0, -1, -1];
    };
    int3 = (int3 + 1);
    while ((int3 < int9)) {
        if ((TESTBIT(varbitplayer_57157, int3) == 0)) {
            int4 = dbrow_getfield(14848 as dbrow, 1277953, int3);
            if (((int1 >= int4) && (int2 >= int4))) {
                [int4, int5, int6, int7, int8] = dbrow_getfield(14848 as dbrow, 1277952, int3);
                return [1, int5, int6, int7, int8];
            };
        };
    };
    return [0, -1, 0, -1, -1];
}