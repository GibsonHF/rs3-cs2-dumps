//
function script831(int0: int): dbrow {
    stack(880640);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}