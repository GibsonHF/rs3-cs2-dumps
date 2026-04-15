//
function script7310(int0: int): unknown_int {
    var int1 = script7311(int0);
    if ((script7293(int1) == 1)) {
        return 1;
    };
    var int2 = 0;
    switch (int1) {
        case 1: {
            int2 = (int0 - 0);
            if ((TESTBIT(varbitplayer_17080, int2) == 0)) {
                return 1;
            };
            break;
        }
        case 2: {
            int2 = (int0 - 6);
            if ((TESTBIT(varbitplayer_17091, int2) == 0)) {
                return 1;
            };
            break;
        }
        case 3: {
            int2 = (int0 - 12);
            if ((TESTBIT(varbitplayer_17102, int2) == 0)) {
                return 1;
            };
            break;
        }
        case 4: {
            int2 = (int0 - 18);
            if ((TESTBIT(varbitplayer_17113, int2) == 0)) {
                return 1;
            };
            break;
        }
        default: {
            return 1;
        }
    };
    return 0;
}