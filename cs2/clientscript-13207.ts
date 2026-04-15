//
function script13207(int0: int, int1: int, int2: int): void {
    if ((int0 != 0)) {
        if ((TESTBIT(int2, int0) == 0)) {
            return;
        };
        if ((int1 == 1)) {
            varclient_5933 = SETBIT(varclient_5933, int0);
        } else {
            varclient_5933 = CLEARBIT(varclient_5933, int0);
        };
    } else if ((int1 == 1)) {
        varclient_5933 = OR(varclient_5933, int2);
    } else {
        varclient_5933 = AND(NOT(varclient_5933, int2));
    };
    if ((int1 == 1)) {
        varclient_5926 = SETBIT(varclient_5926, 2);
        if ((AND(int2, 262142) != 0)) {
            varclient_5928 = SETBIT(varclient_5928, 3);
        };
        if ((AND(int2, 268173312) != 0)) {
            varclient_5928 = SETBIT(varclient_5928, 5);
        };
    } else {
        if ((script13201(0, 2, 99, 0) == 0)) {
            varclient_5926 = CLEARBIT(varclient_5926, 2);
        };
        if ((script13201(0, 2, 3, 0) == 0)) {
            varclient_5928 = CLEARBIT(varclient_5928, 3);
        };
        if ((script13201(0, 2, 5, 0) == 0)) {
            varclient_5928 = CLEARBIT(varclient_5928, 5);
        };
    };
    return;
}