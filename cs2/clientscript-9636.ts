//
function script9636(int0: int): void {
    var int1 = 0;
    var int2 = (int0 / 32);
    var int3 = MODULO(int0, 32);
    switch (int2) {
        case 0: {
            int1 = TESTBIT(varclient_3928, int3);
            if ((int1 == 0)) {
                varclient_3928 = SETBIT(varclient_3928, int3);
            } else {
                varclient_3928 = CLEARBIT(varclient_3928, int3);
            };
            break;
        }
        case 1: {
            int1 = TESTBIT(varclient_3929, int3);
            if ((int1 == 0)) {
                varclient_3929 = SETBIT(varclient_3929, int3);
            } else {
                varclient_3929 = CLEARBIT(varclient_3929, int3);
            };
            break;
        }
        case 2: {
            int1 = TESTBIT(varclient_3930, int3);
            if ((int1 == 0)) {
                varclient_3930 = SETBIT(varclient_3930, int3);
            } else {
                varclient_3930 = CLEARBIT(varclient_3930, int3);
            };
            break;
        }
        case 3: {
            int1 = TESTBIT(varclient_3931, int3);
            if ((int1 == 0)) {
                varclient_3931 = SETBIT(varclient_3931, int3);
            } else {
                varclient_3931 = CLEARBIT(varclient_3931, int3);
            };
            break;
        }
        case 4: {
            int1 = TESTBIT(varclient_3932, int3);
            if ((int1 == 0)) {
                varclient_3932 = SETBIT(varclient_3932, int3);
            } else {
                varclient_3932 = CLEARBIT(varclient_3932, int3);
            };
            break;
        }
        case 5: {
            int1 = TESTBIT(varclient_8300, int3);
            if ((int1 == 0)) {
                varclient_8300 = SETBIT(varclient_8300, int3);
            } else {
                varclient_8300 = CLEARBIT(varclient_8300, int3);
            };
            break;
        }
        default: {
            script12478("worldmap_key_toggle_selected_bit - Hitting default case for mapicon bits, new var needed!");
            break;
        }
    };
    return;
}