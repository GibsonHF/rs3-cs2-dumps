//
function script6062(int0: number): number {
    stack(208896);
    stack(int0);
    DB_FIND(0);
    var int1 = dbrow_findnext();
    if ((int1 != -1)) {
        return DB_GETFIELDCOUNT(int1, 208976);
    };
    return 0;
}