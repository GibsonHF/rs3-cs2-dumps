//
function script7864(int0: number, int1: number): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    switch (int1) {
        case 0: {
            BASECOLOUR(int1, varclient_1015);
            break;
        }
        case 1: {
            BASECOLOUR(int1, varclient_1016);
            break;
        }
        case 2: {
            BASECOLOUR(int1, varclient_1017);
            break;
        }
        case 3: {
            BASECOLOUR(int1, varclient_1018);
            break;
        }
        case 4: {
            BASECOLOUR(int1, varclient_1019);
            break;
        }
    };
    IF_SETONTIMER(callback(), 93061239);
    return;
}