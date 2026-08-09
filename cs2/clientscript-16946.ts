//
function script16946(int0: number): number {
    DB_LISTALL(206);
    var int1 = dbrow_findnext();
    while ((int1 != -1)) {
        if ((dbrow_getfield(int1, 843776, 0) == int0)) {
            return int1;
        };
        int1 = dbrow_findnext();
    };
    return -1;
}