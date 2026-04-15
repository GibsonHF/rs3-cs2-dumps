//
function script10920(int0: int): int {
    if ((int0 <= 0)) {
        return 0;
    };
    var int1 = MODULO(int0, 32);
    switch ((int0 / 32)) {
        case 0: {
            return TESTBIT(varbitplayer_14752[1], int1);
        }
        case 1: {
            return TESTBIT(varbitplayer_15050[1], int1);
        }
    };
    script12478(`Unable to get xpblock status of skill with ^stat_ #${inttostring(int0, 10)}`);
    return 0;
}