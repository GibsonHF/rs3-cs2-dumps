//
function script1479(int0: number, int1: number): number {
    stack(262144);
    stack(int0);
    DB_FIND(0);
    var int2 = dbrow_findnext();
    if ((int2 == -1)) {
        return -1;
    };
    return dbrow_getfield(int2, 262160, int1);
}