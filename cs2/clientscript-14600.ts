//
function script14600(int0: int): int {
    if ((int0 <= 0)) {
        return 0;
    };
    switch ((int0 / 32)) {
        case 0: {
            return TESTBIT(varplayer_9311, MODULO(int0, 32));
        }
        case 1: {
            return TESTBIT(varplayer_11742, MODULO(int0, 32));
        }
    };
    return 0;
}