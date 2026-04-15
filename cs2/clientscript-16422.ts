//
function script16422(): int {
    DB_LISTALL(168);
    dbrow_findnext();
    var int0 = stack();
    var int1 = 0;
    while ((int0 != -1 as dbrow)) {
        if (((DB_GETFIELDCOUNT(int0, 688224) > 0) && (script16421(int0) == 1))) {
            int1 = (int1 + 1);
        };
        dbrow_findnext();
        int0 = stack();
    };
    return int1;
}