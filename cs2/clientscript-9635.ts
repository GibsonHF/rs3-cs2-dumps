//
function script9635(int0: int): int {
    var int1 = -1;
    var int2 = (int0 / 32);
    var int3 = MODULO(int0, 32);
    switch (int2) {
        case 0: {
            int1 = TESTBIT(varclient_3928, int3);
            break;
        }
        case 1: {
            int1 = TESTBIT(varclient_3929, int3);
            break;
        }
        case 2: {
            int1 = TESTBIT(varclient_3930, int3);
            break;
        }
        case 3: {
            int1 = TESTBIT(varclient_3931, int3);
            break;
        }
        case 4: {
            int1 = TESTBIT(varclient_3932, int3);
            break;
        }
        case 5: {
            int1 = TESTBIT(varclient_8300, int3);
            break;
        }
        default: {
            script12478("worldmap_key_get_selected_bit - Hitting default case for mapicon bits, new var needed!");
            break;
        }
    };
    return int1;
}