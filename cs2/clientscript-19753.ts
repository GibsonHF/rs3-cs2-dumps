//
function script19753(): int {
    DB_LISTALL(313);
    dbrow_findnext();
    var int0 = stack();
    var int1 = 0;
    while ((int0 != -1 as dbrow)) {
        if (((DB_GETFIELDCOUNT(int0, 1282144) > 0) && (script19752(int0) == 1))) {
            int1 = (int1 + 1);
        };
        dbrow_findnext();
        int0 = stack();
    };
    return int1;
}