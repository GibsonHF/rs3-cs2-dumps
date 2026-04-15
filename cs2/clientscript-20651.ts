//
function script20651(int0: int): string {
    var int1 = DB_GETFIELDCOUNT(17540 as dbrow, 1421312);
    var int2 = -1;
    var int3 = 0;
    var string0 = "";
    while ((++int2 < int1)) {
        stack(dbrow_getfield(17540 as dbrow, 1421312, int2));
        [int3, string0] = stack();
        if ((int0 == int3)) {
            return string0;
        };
    };
    return "";
}