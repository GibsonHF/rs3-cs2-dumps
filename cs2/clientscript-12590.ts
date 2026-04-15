//
function script12590(int0: int, int1: unknown_int, int2: int, int3: int): int {
    var int4 = -1;
    switch (int0) {
        case 8: {
            int4 = MAX(0, MIN(255, SCALE(int2, 127, varplayer_7624)));
            break;
        }
        case 2: {
            int4 = (int2 / 2);
            break;
        }
        case 3:
        case 4: {
            int4 = MIN(((int2 * 3) / 2), 127);
            break;
        }
        case 1: {
            int4 = int2;
            break;
        }
        case 5: {
            if ((((varbitplayer_19928 == 1) && (int2 > 226)) && (script1186() == 1))) {
                int4 = (255 - (5 * (255 - int2)));
            } else {
                int4 = (int2 / 2);
            };
            break;
        }
        case 6: {
            if ((int2 > 226)) {
                int4 = (255 - (5 * (255 - int2)));
            } else {
                int4 = MIN(((int2 * 3) / 2), 127);
            };
            break;
        }
        case 7: {
            int4 = (255 - (((255 - int2) * (255 - int3)) / 255));
            break;
        }
        default: {
            return -1;
        }
    };
    if ((int1 == 1)) {
        if ((int0 == 4)) {
            int4 = 204;
        } else {
            int4 = 255;
        };
    };
    return int4;
}