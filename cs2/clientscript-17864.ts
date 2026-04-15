//
function script17864(int0: dbrow, int1: int): int {
    if ((DB_GETROWTABLE(int0) != 242)) {
        script12478("Invalid dbtable.");
        return 0;
    };
    if ((int1 <= 0)) {
        return 0;
    };
    var int2 = dbrow_getfield(int0, 991312, 0);
    var int3 = dbrow_getfield(int0, 991328, 0);
    var int4 = dbrow_getfield(int0, 991280, 0);
    if ((int1 <= int4)) {
        return (int2 * int1);
    };
    return ((int2 * int4) + (int3 * (int1 - int4)));
}