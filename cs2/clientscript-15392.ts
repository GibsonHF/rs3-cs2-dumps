//
function script15392(int0: int): dbrow {
    stack(475136);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}