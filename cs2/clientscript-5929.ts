//
function script5929(int0: int, int1: int): int {
    if (((int0 < 1) || (int0 > 2))) {
        return 0;
    };
    if ((int1 > 127)) {
        return 0;
    };
    switch (int0) {
        case 1: {
            return TESTBIT(varbitplayer_31366, int1);
        }
        case 2: {
            return TESTBIT(varbitplayer_31367, int1);
        }
    };
    return 0;
}