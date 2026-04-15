//
function script16946(int0: int): dbrow {
    DB_LISTALL(206);
    dbrow_findnext();
    var int1 = stack();
    while ((int1 != -1 as dbrow)) {
        if ((dbrow_getfield(int1, 843776, 0) == int0)) {
            return int1;
        };
        dbrow_findnext();
        int1 = stack();
    };
    return -1 as dbrow;
}