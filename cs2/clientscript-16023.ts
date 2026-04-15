//
function script16023(int0: int): dbrow {
    stack(315504);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    return int1;
}