//
function script11928(int0: dbrow, int1: int): unknown_int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int2 = 0;
    var int3 = 0;
    if ((DB_GETROWTABLE(int0) == 107)) {
        [int2, int3] = script15149(int0);
    } else {
        [int2, int3] = script11929(int0);
    };
    if ((int1 < int2)) {
        return 0;
    };
    if (((int1 >= int2) && ((int1 <= int3) || (int3 == -1)))) {
        return 2;
    };
    if ((int1 > int3)) {
        return 3;
    };
    return 0;
}