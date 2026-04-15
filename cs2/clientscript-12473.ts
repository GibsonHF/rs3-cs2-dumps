//
function script12473(int0: int): unknown_int {
    stack(36864);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    if ((int1 == -1)) {
        return 0;
    };
    var int2 = DB_GETFIELDCOUNT(int1, 37040);
    if ((int2 == 0)) {
        return 1;
    };
    var int3 = 0;
    while ((int3 < int2)) {
        if ((script12475(dbrow_getfield(int1, 37040, int3)) == 0)) {
            return 0;
        };
        int3 = (int3 + 1);
    };
    return 1;
}