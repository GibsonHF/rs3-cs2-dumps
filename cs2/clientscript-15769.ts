//
function script15769(int0: struct): dbrow {
    if ((int0 == -1 as struct)) {
        return -1 as dbrow;
    };
    stack(668144);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    return int1;
}