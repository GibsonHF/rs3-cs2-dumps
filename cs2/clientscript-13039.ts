//
function script13039(int0: dbrow): int {
    if ((int0 == -1 as dbrow)) {
        return 1;
    };
    var int1 = dbrow_getfield(int0, 331776, 0);
    if ((int1 < 0)) {
        return 1;
    };
    switch ((int1 / 32)) {
        case 0: {
            return TESTBIT(varplayer_9205, MODULO(int1, 32));
        }
        case 1: {
            return TESTBIT(varplayer_9206, MODULO(int1, 32));
        }
        case 2: {
            return TESTBIT(varplayer_9207, MODULO(int1, 32));
        }
        case 3: {
            return TESTBIT(varplayer_9564, MODULO(int1, 32));
        }
        case 4: {
            return TESTBIT(varplayer_11732, MODULO(int1, 32));
        }
    };
    return 0;
}