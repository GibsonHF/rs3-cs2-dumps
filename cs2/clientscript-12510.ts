//
function script12510(int0: int): int {
    switch ((int0 / 32)) {
        case 0: {
            return TESTBIT(varclient_5205, MODULO(int0, 32));
        }
        case 1: {
            return TESTBIT(varclient_5206, MODULO(int0, 32));
        }
    };
    return 0;
}