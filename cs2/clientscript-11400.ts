//
function script11400(int0: int): int {
    switch ((int0 / 32)) {
        case 0: {
            return TESTBIT(varplayer_5407, MODULO(int0, 32));
        }
        case 1: {
            return TESTBIT(varplayer_5408, MODULO(int0, 32));
        }
        case 2: {
            return TESTBIT(varplayer_5409, MODULO(int0, 32));
        }
        case 3: {
            return TESTBIT(varplayer_5410, MODULO(int0, 32));
        }
        case 4: {
            return TESTBIT(varplayer_10385, MODULO(int0, 32));
        }
    };
    return 0;
}