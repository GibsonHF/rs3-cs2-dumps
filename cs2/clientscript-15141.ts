//
function script15141(int0: dbrow): unknown_int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int1 = DB_GETFIELDCOUNT(int0, 434240);
    var int2 = 0;
    while ((int2 < int1)) {
        if ((script15128(int2) == false)) {
            return 0;
        };
        int2 = (int2 + 1);
    };
    return 1;
}