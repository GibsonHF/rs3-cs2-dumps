//
function script6735(): number {
    DB_LISTALL(162);
    dbrow_findnext();
    var int0 = stack();
    var int1 = 0;
    while ((int0 != -1)) {
        if (((DB_GETFIELDCOUNT(int0, 663648) > 0) && (script6734(int0) == 1))) {
            int1 = (int1 + 1);
        };
        dbrow_findnext();
        int0 = stack();
    };
    return int1;
}