//
function script11036(int0: int): int {
    if ((int0 < 32)) {
        return TESTBIT(varplayer_1777, int0);
    };
    if ((int0 < 64)) {
        return TESTBIT(varplayer_1778, MODULO(int0, 32));
    };
    return 0;
}