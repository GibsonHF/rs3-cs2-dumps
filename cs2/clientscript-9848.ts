//
function script9848(int0: number): number {
    var int1 = script11076(int0);
    if ((int1 <= 0)) {
        return -1;
    };
    stack(1540096);
    stack(int1);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}