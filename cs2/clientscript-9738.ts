//
function script9738(): void {
    var int0 = WORLDMAP_LISTELEMENT_START(1515712, 1, 3, 0);
    unk11023(int0, 1515520, 1);
    dbrow_findnext();
    var int1 = stack();
    var int2 = 0;
    while ((int1 != -1)) {
        int2 = (int2 + 1);
        dbrow_findnext();
        int1 = stack();
    };
    printmessage(`Not filter specific test: Found ${inttostring(int2, 10)} with outdoors=true`);
    return;
}