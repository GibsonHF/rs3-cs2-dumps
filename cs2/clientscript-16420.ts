//
function script16420(int0: int): dbrow {
    stack(688128);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}