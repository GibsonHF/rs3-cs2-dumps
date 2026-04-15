//
function script15768(int0: int): dbrow {
    stack(667648);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}