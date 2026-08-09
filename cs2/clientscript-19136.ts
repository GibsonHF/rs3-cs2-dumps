//
function script19136(): number {
    if ((DB_LISTALL(113) <= 0)) {
        return -1;
    };
    var int0 = dbrow_findnext();
    var int1 = DATE_RUNEDAY();
    while ((int0 != -1)) {
        if ((script11928(int0, int1) == 2)) {
            return int0;
        };
        int0 = dbrow_findnext();
    };
    return -1;
}