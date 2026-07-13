//
function script9942(int0: number): number {
    stack(1540096);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    if ((int1 == -1)) {
        return -1 as struct;
    };
    return dbrow_getfield(int1, 1540128, 0);
}