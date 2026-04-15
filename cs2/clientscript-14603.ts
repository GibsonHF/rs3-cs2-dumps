//
function script14603(int0: int): int {
    if ((int0 <= 0)) {
        return 0;
    };
    switch ((int0 / 32)) {
        case 0: {
            return TESTBIT(varplayer_9312, MODULO(int0, 32));
        }
        case 1: {
            return TESTBIT(varplayer_11743, MODULO(int0, 32));
        }
    };
    return 0;
}