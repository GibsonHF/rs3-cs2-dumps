//
function script16520(int0: int): dbrow {
    stack(720896);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}