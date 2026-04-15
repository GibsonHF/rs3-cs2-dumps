//
function script19338(int0: dbrow, int1: int, int2: int): struct {
    if ((int0 == -1 as dbrow)) {
        return -1 as struct;
    };
    switch (int2) {
        case 0: {
            return dbrow_getfield(int0, 1253442, int1);
        }
        case 1: {
            return dbrow_getfield(int0, 1253443, int1);
        }
    };
    return -1 as struct;
}