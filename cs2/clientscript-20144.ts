//
function script20144(int0: dbrow): boolean {
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 1347664);
    var int3 = -1 as var_reference;
    var int4 = 0;
    var int5 = false;
    var string0 = "";
    while ((int1 < int2)) {
        stack(dbrow_getfield(int0, 1347664, int1));
        [int3, int4, int5, string0] = stack();
        if (((int5 == true) && (WORLDMAP_GETDISPLAYCOORD(int3) != 0))) {
            return true;
        };
        if ((WORLDMAP_GETDISPLAYCOORD(int3) < int4)) {
            return false;
        };
        int1 = (int1 + 1);
    };
    return true;
}