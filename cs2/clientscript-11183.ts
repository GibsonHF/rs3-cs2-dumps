//
function script11183(int0: int): dbrow {
    stack(659456);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}