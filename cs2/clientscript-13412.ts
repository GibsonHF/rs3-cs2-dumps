//
function script13412(int0: int, int1: int, int2: int): int {
    switch (int0) {
        case 0: {
            switch (int1) {
                case 0: {
                    return TESTBIT(varplayer_6989, int2);
                }
                case 1: {
                    return TESTBIT(varplayer_6989, (int2 + 16));
                }
                case 2: {
                    return TESTBIT(varplayer_6990, int2);
                }
            };
            break;
        }
    };
    return 0;
}