//
function script10981(int0: int): dbrow {
    stack(626688);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}