//
function script19933(int0: number): number {
    var int1 = 0;
    var int2 = -1;
    unk11023(WORLDMAP_LISTELEMENT_START(1306640, int0, 3, 0), 1306624, 1);
    int2 = dbrow_findnext();
    while ((int2 != -1)) {
        if ((WORLDMAP_GETDISPLAYCOORD(dbrow_getfield(int2, 1306688, 0)) == 1)) {
            int1 = (int1 + 1);
        };
        int2 = dbrow_findnext();
    };
    return int1;
}