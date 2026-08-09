//
function script16422(): number {
    DB_LISTALL(168);
    var int0 = dbrow_findnext();
    var int1 = 0;
    while ((int0 != -1 as dbrow)) {
        if (((DB_GETFIELDCOUNT(int0, 688224) > 0) && (script16421(int0) == 1))) {
            int1 = (int1 + 1);
        };
        int0 = dbrow_findnext();
    };
    return int1;
}