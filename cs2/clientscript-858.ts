//
function script858(int0: int, int1: int): int {
    switch (int0) {
        case 0: {
            return TESTBIT(int1, 0);
        }
        case 7: {
            return TESTBIT(int1, 1);
        }
        case 1: {
            return TESTBIT(int1, 2);
        }
        case 2: {
            return TESTBIT(int1, 3);
        }
        case 3: {
            return TESTBIT(int1, 4);
        }
        case 12:
        case 8:
        case 9:
        case 10:
        case 11:
        case 4: {
            return TESTBIT(int1, 7);
        }
        case 5: {
            return TESTBIT(int1, 8);
        }
        case 6: {
            return 0;
        }
    };
    return 0;
}