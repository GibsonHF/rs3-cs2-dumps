//
function script19339(int0: dbrow, int1: int, int2: int): dbrow {
    if ((int0 == -1 as dbrow)) {
        return -1 as dbrow;
    };
    switch (int2) {
        case 0: {
            return dbrow_getfield(int0, 1253426, int1);
        }
        case 1: {
            return dbrow_getfield(int0, 1253427, int1);
        }
    };
    return -1 as dbrow;
}