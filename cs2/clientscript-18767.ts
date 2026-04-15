//
function script18767(): void {
    var int0 = (IF_GETWIDTH(comp(764, 9)) - (2 * 1));
    var int1 = MIN(SCALE((CLIENTCLOCK() - varclient_7413), (varclient_7414 - varclient_7413), int0), int0);
    var int2 = 2;
    switch (varclient_7415) {
        case 0: {
            int2 = (int2 - 1);
            break;
        }
        case 1: {
            int1 = (int0 - int1);
            break;
        }
    };
    IF_SETSIZE(int1, 0, 1, 1, comp(764, 11));
    script18771(((((varclient_7414 - CLIENTCLOCK()) + 30) - 1) / 30));
    IF_SETPOSITION((int2 + int1), 0, 2, 1, comp(764, 10));
    return;
}