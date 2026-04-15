//
function script7480(int0: int): dbrow {
    stack(978944);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}