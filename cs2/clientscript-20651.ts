//
function script20651(int0: number): string {
    var int1 = -1 as dbrow;
    if ((int0 == 1)) {
        int1 = script20847();
        if (((int1 != -1 as dbrow) && (DB_GETFIELDCOUNT(int1, 1552384) > 0))) {
            return dbrow_getfield(int1, 1552384, 0);
        };
    };
    var int2 = DB_GETFIELDCOUNT(17540 as dbrow, 1421312);
    var int3 = -1;
    var int4 = 0;
    var string0 = "";
    while ((++int3 < int2)) {
        stack(dbrow_getfield(17540 as dbrow, 1421312, int3));
        [int4, string0] = stack();
        if ((int0 == int4)) {
            return string0;
        };
    };
    return "";
}