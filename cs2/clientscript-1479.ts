//
function script1479(int0: unknown_int, int1: int): dbrow {
    stack(262144);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int2 = stack();
    if ((int2 == -1)) {
        return -1 as dbrow;
    };
    return dbrow_getfield(int2, 262160, int1);
}