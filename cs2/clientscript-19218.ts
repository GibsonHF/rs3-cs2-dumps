//
function script19218(int0: dbrow, int1: int): dbrow {
    if ((int0 == -1 as dbrow)) {
        return -1 as dbrow;
    };
    switch (int1) {
        case 1: {
            return dbrow_getfield(int0, 1241104, 0);
        }
        case 2: {
            return dbrow_getfield(int0, 1241120, 0);
        }
        case 3: {
            return dbrow_getfield(int0, 1241136, 0);
        }
        case 4: {
            return dbrow_getfield(int0, 1241152, 0);
        }
        case 5: {
            return dbrow_getfield(int0, 1241168, 0);
        }
    };
    return -1 as dbrow;
}