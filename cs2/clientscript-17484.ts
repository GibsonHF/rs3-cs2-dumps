//
function script17484(int0: dbrow, int1: unknown_int): int {
    var int2 = 0;
    var int3 = DB_GETFIELDCOUNT(int0, 950288);
    var int4 = -1;
    while ((++int4 < int3)) {
        if ((script17485(int0, dbrow_getfield(int0, 950288, int4)) == int1)) {
            int2 = (int2 + 1);
        };
    };
    return int2;
}