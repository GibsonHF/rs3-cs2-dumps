//
function script14596(int0: int): dbrow {
    stack(385024);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}