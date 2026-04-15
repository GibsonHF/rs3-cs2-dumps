//
function script18766(int0: int, int1: int, int2: int, string0: string): void {
    varclient_7415 = int0;
    varclient_7413 = CLIENTCLOCK();
    varclient_7414 = (CLIENTCLOCK() + (30 * int1));
    IF_SETONTIMER(callback(), comp(764, 0));
    IF_SETSIZE(0, (12 + 4), 1, 0, 50069506);
    IF_SETSIZE(0, 12, 1, 1, 50069505);
    switch (int0) {
        case 0: {
            IF_SETSIZE(0, 0, 1, 1, comp(764, 11));
            IF_SETPOSITION(2, 0, 2, 1, comp(764, 10));
            break;
        }
        case 1: {
            IF_SETSIZE(0, 0, 0, 1, comp(764, 11));
            IF_SETPOSITION((0 - 2), 0, 0, 1, comp(764, 10));
            break;
        }
    };
    script18770(string0);
    script18773(int2);
    script18774(0);
    CC_DELETEALL(comp(764, 13));
    var int3 = -1;
    while ((++int3 < int1)) {
        script2996(comp(764, 13), IF_GETNEXTSUBID(comp(764, 13)), ((IF_GETWIDTH(comp(764, 9)) - (2 * 1)) - SCALE((30 * int3), (varclient_7414 - varclient_7413), (IF_GETWIDTH(comp(764, 9)) - (2 * 1)))), 0, 0, 1, 1, 0, 0, 1, 4127 as dbrow);
    };
    IF_SETONTIMER(callback(script18767), comp(764, 9));
    script18777();
    return;
}