//
function script14588(int0: dbrow): int {
    if ((int0 == -1 as dbrow)) {
        return 1;
    };
    var int1 = dbrow_getfield(int0, 376832, 0);
    if ((int1 < 0)) {
        return 1;
    };
    switch ((int1 / 32)) {
        case 0: {
            return TESTBIT(varplayer_9302, int1);
        }
        case 1: {
            return TESTBIT(varplayer_9303, int1);
        }
    };
    return 0;
}