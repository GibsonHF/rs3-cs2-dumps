//
function script12163(int0: number): number {
    stack(20480);
    stack(int0);
    DB_FIND(0);
    var int1 = dbrow_findnext();
    if ((int1 == -1)) {
        return -1;
    };
    return dbrow_getfield(int1, 20560, 0);
}