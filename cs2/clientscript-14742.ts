//
function script14742(int0: int): void {
    var int1 = (int0 / 32);
    var int2 = MODULO(int0, 32);
    switch (int1) {
        case 0: {
            varclient_3928 = SETBIT(varclient_3928, int2);
            break;
        }
        case 1: {
            varclient_3929 = SETBIT(varclient_3929, int2);
            break;
        }
        case 2: {
            varclient_3930 = SETBIT(varclient_3930, int2);
            break;
        }
        case 3: {
            varclient_3931 = SETBIT(varclient_3931, int2);
            break;
        }
        case 4: {
            varclient_3932 = SETBIT(varclient_3932, int2);
            break;
        }
        case 5: {
            varclient_8300 = SETBIT(varclient_8300, int2);
            break;
        }
        default: {
            script12478("worldmap_key_set_selected_bit - Hitting default case for mapicon bits, new var needed!");
            break;
        }
    };
    return;
}