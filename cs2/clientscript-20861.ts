//
function script20861(int0: number, int1: number): [number, number] {
    var int2 = -1;
    var int3 = DB_GETFIELDCOUNT(17540 as dbrow, 1421312);
    var int4 = 0;
    var string0 = "";
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    while ((++int2 < int3)) {
        stack(dbrow_getfield(17540 as dbrow, 1421312, int2));
        [int4, string0] = stack();
        if (((int4 != 0) && (int4 != 1))) {
            int5 = CC_SETPARAM_STRING(script20644(int4, 0), 1425408, 0, -1, 0);
            if ((int5 > 0)) {
                int9 = int1;
                int6 = script20635(++int1);
                if ((int0 != 1)) {
                    int7 = script20642(int6, 0);
                } else {
                    int7 = script20642(int6, 1);
                };
                var int1 = script20637(int1, int7, int6);
                if ((int7 > 0)) {
                    script20641(script20651(int4), int9);
                    int8 = (int8 + int7);
                } else {
                    int1 = int9;
                };
            };
        };
    };
    return [int1, int8];
}