//
function script9641(int0: int): void {
    var int1 = 0;
    var int2 = (int0 / 32);
    var int3 = MODULO(int0, 32);
    switch (int2) {
        case 0: {
            int1 = TESTBIT(varclient_3934, int3);
            if ((int1 == 0)) {
                varclient_3934 = SETBIT(varclient_3934, int3);
            } else {
                varclient_3934 = CLEARBIT(varclient_3934, int3);
            };
            break;
        }
    };
    return;
}