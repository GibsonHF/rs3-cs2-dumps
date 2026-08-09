//
function script6735(): number {
    DB_LISTALL(162);
    var int0 = dbrow_findnext();
    var int1 = 0;
    while ((int0 != -1 as dbrow)) {
        if (((DB_GETFIELDCOUNT(int0, 663648) > 0) && (script6734(int0) == 1))) {
            int1 = (int1 + 1);
        };
        int0 = dbrow_findnext();
    };
    return int1;
}