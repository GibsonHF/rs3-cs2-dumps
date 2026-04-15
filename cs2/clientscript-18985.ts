//
function script18985(int0: unknown_int): int {
    var int1 = 0;
    if ((varbitplayer_53856 == 1)) {
        int1 = varbitplayer_55662;
    } else if ((INV_TOTAL(93 as inv, 57064 as obj) == 0)) {
        int1 = 0;
    } else {
        int1 = varbitplayer_55661;
    };
    if ((int1 == 0)) {
        return 0;
    };
    var int2 = script17518(int1);
    if ((int2 == -1 as dbrow)) {
        return 0;
    };
    switch (int0) {
        case 5: {
            if ((DB_GETFIELDCOUNT(int2, 966768) > 0)) {
                return dbrow_getfield(int2, 966768, 0);
            };
            break;
        }
        case 6: {
            if ((DB_GETFIELDCOUNT(int2, 966784) > 0)) {
                return dbrow_getfield(int2, 966784, 0);
            };
            break;
        }
        case 8: {
            if ((DB_GETFIELDCOUNT(int2, 966800) > 0)) {
                return dbrow_getfield(int2, 966800, 0);
            };
            break;
        }
        case 7: {
            if ((DB_GETFIELDCOUNT(int2, 966816) > 0)) {
                return dbrow_getfield(int2, 966816, 0);
            };
            break;
        }
    };
    return 0;
}