//
function script16604(int0: int): dbrow {
    stack(753664);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}