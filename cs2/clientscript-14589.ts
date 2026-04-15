//
function script14589(int0: int): dbrow {
    stack(380928);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}