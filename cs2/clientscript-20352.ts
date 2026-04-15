//
function script20352(int0: unknown_int): unknown_int {
    stack(1392656);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    if ((int1 != -1)) {
        stack(int1);
        stack(1392688);
        stack(0);
        dbrow_getfield();
        return stack();
    };
    return -1;
}