//
function script17355(int0: int): dbrow {
    stack(1089536);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}