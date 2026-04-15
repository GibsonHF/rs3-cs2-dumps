//
function script14629(int0: dbrow): int {
    if ((int0 == -1 as dbrow)) {
        return 1;
    };
    var int1 = dbrow_getfield(int0, 368640, 0);
    if ((int1 < 0)) {
        return 1;
    };
    switch ((int1 / 32)) {
        case 0: {
            return TESTBIT(varplayer_9297, MODULO(int1, 32));
        }
        case 1: {
            return TESTBIT(varplayer_9298, MODULO(int1, 32));
        }
        case 2: {
            return TESTBIT(varplayer_11740, MODULO(int1, 32));
        }
    };
    return 0;
}