//
function script19753(): number {
    DB_LISTALL(313);
    var int0 = dbrow_findnext();
    var int1 = 0;
    while ((int0 != -1 as dbrow)) {
        if (((DB_GETFIELDCOUNT(int0, 1282144) > 0) && (script19752(int0) == 1))) {
            int1 = (int1 + 1);
        };
        int0 = dbrow_findnext();
    };
    return int1;
}