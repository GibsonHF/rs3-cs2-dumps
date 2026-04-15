//
function script19933(int0: int): int {
    var int1 = 0;
    var int2 = -1 as dbrow;
    unk11023(WORLDMAP_LISTELEMENT_START(1306640, int0, 3, 0), 1306624, 1);
    dbrow_findnext();
    int2 = stack();
    while ((int2 != -1 as dbrow)) {
        if ((WORLDMAP_GETDISPLAYCOORD(dbrow_getfield(int2, 1306688, 0)) == 1)) {
            int1 = (int1 + 1);
        };
        dbrow_findnext();
        int2 = stack();
    };
    return int1;
}