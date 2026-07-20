//
function script20636(int0: number, int1: number, int2: number, int3: number): number {
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    var int7 = 0;
    var string0 = "";
    var int8 = 0;
    if (((int0 == 0) || (int0 == 1))) {
        int5 = DB_GETFIELDCOUNT(17540 as dbrow, 1421312);
        while ((++int6 < int5)) {
            dbrow_getfield(17540 as dbrow, 1421312, int6);
            stack(dbrow_getfield(17540 as dbrow, 1421312, int6));
            [int7, string0] = stack();
            if (((int7 != 0) && (int7 != 1))) {
                int8 = CC_SETPARAM_STRING(script20644(int7, int1), 1425408, 0, -1, 0);
                if ((int8 > 0)) {
                    int4 = (int4 + script20642(int2, int3));
                };
            };
        };
    } else {
        int4 = (int4 + script20642(int2, int3));
    };
    return int4;
}