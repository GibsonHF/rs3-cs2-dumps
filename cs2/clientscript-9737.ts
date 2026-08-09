//
function script9737(): void {
    var int0 = IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(1515776, 52587, 3, 0));
    unk11023(int0, 1515520, 1);
    var int1 = dbrow_findnext();
    while ((int1 != -1)) {
        printmessage(`Not filter specific test: Found ${script6686(dbrow_getfield(int1, 1515776, 0))}`);
        int1 = dbrow_findnext();
    };
    return;
}