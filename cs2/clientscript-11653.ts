//
function script11653(int0: number): number {
    var int1 = -1;
    stack(1515552);
    stack(int0);
    DB_FIND(0);
    int1 = dbrow_findnext();
    if ((int1 != -1)) {
        return int1;
    };
    int1 = lc_getparam(int0, 4550);
    return int1;
}