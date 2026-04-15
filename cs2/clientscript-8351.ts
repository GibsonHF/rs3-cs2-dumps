//
function script8351(int0: int): unknown_int {
    var int1 = 1;
    while ((int0 > 31)) {
        var int0 = (int0 - 32);
        int1 = (int1 + 1);
    };
    switch (int1) {
        case 1: {
            if ((TESTBIT(varclient_3468, int0) == 0)) {
                varclient_3468 = SETBIT(varclient_3468, int0);
                return 0;
            };
            return 1;
        }
        case 2: {
            if ((TESTBIT(varclient_3469, int0) == 0)) {
                varclient_3469 = SETBIT(varclient_3469, int0);
                return 0;
            };
            return 1;
        }
        case 3: {
            if ((TESTBIT(varclient_3470, int0) == 0)) {
                varclient_3470 = SETBIT(varclient_3470, int0);
                return 0;
            };
            return 1;
        }
        case 4: {
            if ((TESTBIT(varclient_3471, int0) == 0)) {
                varclient_3471 = SETBIT(varclient_3471, int0);
                return 0;
            };
            return 1;
        }
    };
    return 1;
}