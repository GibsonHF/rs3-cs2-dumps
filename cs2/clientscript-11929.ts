//
function script11929(int0: dbrow): [int, int] {
    if ((int0 == -1 as dbrow)) {
        return [0, 0];
    };
    var int1 = 0;
    var int2 = 0;
    if ((DB_GETROWTABLE(int0) == 107)) {
        [int1, int2] = dbrow_getfield(int0, 438288, 0);
    } else if ((DB_GETROWTABLE(int0) == 113)) {
        [int1, int2] = dbrow_getfield(int0, 462848, 0);
    } else if ((DB_GETROWTABLE(int0) == 119)) {
        stack(int0);
        stack(487424);
        stack(0);
        dbrow_getfield();
        [int1, int2] = stack();
    } else if ((DB_GETROWTABLE(int0) == 117)) {
        [int1, int2] = dbrow_getfield(int0, 479248, 0);
    };
    return [int1, int2];
}