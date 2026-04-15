//
function script12161(int0: int): string {
    var int1 = db_find_with_count(16384, int0, 0);
    if ((int1 == 0)) {
        return "";
    };
    dbrow_findnext();
    var int2 = stack();
    stack(int2);
    stack(16432);
    stack(0);
    dbrow_getfield();
    return stack();
}