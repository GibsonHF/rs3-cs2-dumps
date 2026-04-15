//
function script1694(int0: int): int {
    switch ((int0 / 32)) {
        case 0: {
            return TESTBIT(varclient_1040, int0);
        }
        case 1: {
            return TESTBIT(varclient_1041, MODULO(int0, 32));
        }
        case 2: {
            return TESTBIT(varclient_1042, MODULO(int0, 32));
        }
        case 3: {
            return TESTBIT(varclient_1702, MODULO(int0, 32));
        }
        case 4: {
            return TESTBIT(varclient_3755, MODULO(int0, 32));
        }
        case 5: {
            return TESTBIT(varclient_4953, MODULO(int0, 32));
        }
        case 6: {
            return TESTBIT(varclient_5214, MODULO(int0, 32));
        }
        case 7: {
            return TESTBIT(varclient_6301, MODULO(int0, 32));
        }
        case 8: {
            return TESTBIT(varclient_7072, MODULO(int0, 32));
        }
    };
    return 0;
}