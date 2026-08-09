//
function script20144(int0: number): number {
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 1347664);
    var int3 = -1;
    var int4 = 0;
    var int5 = 0;
    var string0 = "";
    while ((int1 < int2)) {
        [int3, int4, int5, string0] = dbrow_getfield(int0, 1347664, int1);
        if (((int5 == 1) && (WORLDMAP_GETDISPLAYCOORD(int3) != 0))) {
            return 1;
        };
        if ((WORLDMAP_GETDISPLAYCOORD(int3) < int4)) {
            return 0;
        };
        int1 = (int1 + 1);
    };
    return 1;
}