//
function script14603(int0: number): number {
    script20966();
    if (BRANCH_EQUALS(1)) {
        return 1;
    };
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