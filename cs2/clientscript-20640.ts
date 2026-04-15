//
function script20640(int0: int): int {
    var int1 = -1;
    var int2 = DB_GETFIELDCOUNT(17540 as dbrow, 1421312);
    var int3 = 0;
    var string0 = "";
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    while ((++int1 < int2)) {
        stack(dbrow_getfield(17540 as dbrow, 1421312, int1));
        [int3, string0] = stack();
        if ((int3 != 0)) {
            int4 = CC_SETPARAM_STRING(script20644(int3, 0), 1425408, 0, -1, 0);
            if ((int4 > 0)) {
                int7 = int0;
                int5 = script20635(++int0);
                int6 = script20642(int5);
                var int0 = script20637(int0, int6, int5);
                if ((int6 > 0)) {
                    script20641(script20651(int3), int7);
                } else {
                    int0 = int7;
                };
            };
        };
    };
    return int0;
}