//
function script15403(): number {
    var int0 = DB_LISTALL(117);
    if ((int0 == 0)) {
        return -1;
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = dbrow_findnext();
    while ((int3 != -1)) {
        if ((script11928(int3, DATE_RUNEDAY()) == 2)) {
            return int3;
        };
        int3 = dbrow_findnext();
    };
    return -1;
}