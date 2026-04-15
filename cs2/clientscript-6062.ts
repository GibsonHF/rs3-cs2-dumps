//
function script6062(int0: int): int {
    stack(208896);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    if ((int1 != -1)) {
        return DB_GETFIELDCOUNT(int1, 208976);
    };
    return 0;
}