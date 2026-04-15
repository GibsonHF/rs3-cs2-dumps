//
function script17829(int0: unknown_int): int {
    if ((script17828() == 0)) {
        return 0;
    };
    var int1 = script17518(varbitplayer_53463);
    var int2 = script17830(int1);
    switch (int0) {
        case 5: {
            if ((DB_GETFIELDCOUNT(int1, 966768) > 0)) {
                return dbrow_getfield(int1, 966768, 0);
            };
            break;
        }
        case 6: {
            if ((DB_GETFIELDCOUNT(int1, 966784) > 0)) {
                return dbrow_getfield(int1, 966784, 0);
            };
            break;
        }
        case 8: {
            if ((DB_GETFIELDCOUNT(int1, 966800) > 0)) {
                return dbrow_getfield(int1, 966800, 0);
            };
            break;
        }
        case 7: {
            if ((DB_GETFIELDCOUNT(int1, 966816) > 0)) {
                return dbrow_getfield(int1, 966816, 0);
            };
            break;
        }
    };
    return 0;
}