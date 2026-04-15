//
function script20351(int0: obj): dbrow {
    stack(1392656);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    if ((int1 != -1)) {
        return dbrow_getfield(int1, 1392672, 0);
    };
    return -1 as dbrow;
}