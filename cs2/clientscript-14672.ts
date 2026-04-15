//
function script14672(int0: int): dbrow {
    stack(372736);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}