//
function script16351(int0: int): dbrow {
    stack(675840);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}