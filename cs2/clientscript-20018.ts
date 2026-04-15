//
function script20018(int0: int): dbrow {
    stack(1310720);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}