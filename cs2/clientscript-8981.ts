//
function script8981(int0: int): int {
    switch (varbitplayer_18639) {
        case 0: {
            return TESTBIT(varplayer_3643, 0);
        }
        case 1: {
            return TESTBIT(varplayer_3643, 1);
        }
        case 2: {
            switch (int0) {
                case 0: {
                    return TESTBIT(varplayer_3643, 2);
                }
                case 1: {
                    return TESTBIT(varplayer_3643, 3);
                }
                case 2: {
                    return TESTBIT(varplayer_3643, 4);
                }
                case 3: {
                    return TESTBIT(varplayer_3643, 5);
                }
                case 4: {
                    return TESTBIT(varplayer_3643, 7);
                }
                case 5: {
                    return TESTBIT(varplayer_3643, 8);
                }
                case 6: {
                    return TESTBIT(varplayer_3643, 9);
                }
            };
            break;
        }
        case 3: {
            switch (int0) {
                case 0: {
                    return TESTBIT(varplayer_3643, 10);
                }
                case 1: {
                    return TESTBIT(varplayer_3643, 11);
                }
                case 2: {
                    return TESTBIT(varplayer_3643, 12);
                }
            };
            break;
        }
        case 4: {
            return TESTBIT(varplayer_3643, 13);
        }
    };
    return 0;
}