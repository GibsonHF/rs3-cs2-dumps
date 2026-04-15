//
function script14625(int0: int): dbrow {
    stack(368640);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}