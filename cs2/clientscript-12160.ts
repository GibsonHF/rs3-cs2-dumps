//
function script12160(int0: int): [string, graphic] {
    var int1 = db_find_with_count(16384, int0, 0);
    if ((int1 == 0)) {
        return ["", -1 as graphic];
    };
    dbrow_findnext();
    var int2 = stack();
    stack(int2);
    stack(16400);
    stack(0);
    dbrow_getfield();
    stack(int2);
    stack(16448);
    stack(0);
    dbrow_getfield();
    return stack();
}