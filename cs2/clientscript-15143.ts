//
function script15143(): number {
    if ((DB_LISTALL(107) <= 0)) {
        return -1;
    };
    dbrow_findnext();
    var int0 = stack();
    var int1 = DATE_RUNEDAY();
    while ((int0 != -1)) {
        if ((script11928(int0, int1) == 2)) {
            return int0;
        };
        dbrow_findnext();
        int0 = stack();
    };
    return -1;
}