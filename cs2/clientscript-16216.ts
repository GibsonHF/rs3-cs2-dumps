//
function script16216(int0: int): unknown_int {
    if ((int0 == 0)) {
        return 0;
    };
    if ((int0 == -1)) {
        return 1;
    };
    switch (CLIENTTYPE()) {
        case 4: {
            if ((TESTBIT(int0, 0) == 1)) {
                return 1;
            };
            break;
        }
        case 5: {
            if ((TESTBIT(int0, 1) == 1)) {
                return 1;
            };
            break;
        }
        case 7: {
            if ((TESTBIT(int0, 2) == 1)) {
                return 1;
            };
            break;
        }
        case 8: {
            if ((TESTBIT(int0, 3) == 1)) {
                return 1;
            };
            break;
        }
        case 9: {
            if ((TESTBIT(int0, 4) == 1)) {
                return 1;
            };
            break;
        }
        case 10: {
            if ((TESTBIT(int0, 5) == 1)) {
                return 1;
            };
            break;
        }
        default: {
            return 0;
        }
    };
    return 0;
}