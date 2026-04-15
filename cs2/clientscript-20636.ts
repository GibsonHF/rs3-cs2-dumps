//
function script20636(int0: int, int1: int, int2: int, int3: int, int4: unknown_int): int {
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    var int8 = 0;
    var string0 = "";
    var int9 = 0;
    if ((int0 == 0)) {
        int6 = DB_GETFIELDCOUNT(17540 as dbrow, 1421312);
        while ((++int7 < int6)) {
            dbrow_getfield(17540 as dbrow, 1421312, int7);
            stack(dbrow_getfield(17540 as dbrow, 1421312, int7));
            [int8, string0] = stack();
            if ((int8 != 0)) {
                int9 = CC_SETPARAM_STRING(script20644(int8, int1), 1425408, 0, -1, 0);
                if ((int9 > 0)) {
                    int5 = (int5 + script20642(int2));
                };
            };
        };
    } else {
        int5 = (int5 + script20642(int2));
    };
    return int5;
}