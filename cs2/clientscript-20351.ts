//
function script20351(int0: number): number {
    stack(1392656);
    stack(int0);
    DB_FIND(0);
    var int1 = dbrow_findnext();
    if ((int1 != -1)) {
        return dbrow_getfield(int1, 1392672, 0);
    };
    return -1;
}