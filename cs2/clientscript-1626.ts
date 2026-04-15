//
function script1626(int0: unknown_int, int1: int): dbrow {
    var int2 = script6953();
    switch (int0) {
        case 1: {
            if ((int1 == 1)) {
                return dbrow_getfield(int2, 1179696, 0);
            };
            return dbrow_getfield(int2, 1179664, 0);
        }
        case 2: {
            if ((int1 == 1)) {
                return dbrow_getfield(int2, 1179712, 0);
            };
            return dbrow_getfield(int2, 1179680, 0);
        }
    };
    return -1 as dbrow;
}