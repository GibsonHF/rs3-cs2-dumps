//
function script19210(int0: int): dbrow {
    stack(1216512);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}