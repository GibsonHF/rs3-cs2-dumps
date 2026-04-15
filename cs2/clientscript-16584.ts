//
function script16584(int0: int, int1: dbrow): unknown_int {
    var int2 = -1;
    if ((int1 == -1 as dbrow)) {
        return 1;
    };
    while ((++int2 < DB_GETFIELDCOUNT(int1, 745472))) {
        if ((dbrow_getfield(int1, 745472, int2) == int0)) {
            return 1;
        };
    };
    return 0;
}