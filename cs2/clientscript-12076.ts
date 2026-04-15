//
function script12076(int0: int): dbrow {
    stack(32768);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}