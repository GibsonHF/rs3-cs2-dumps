//
function script7584(int0: component, int1: unknown_int, int2: unknown_int): void {
    var int3 = 0;
    var int4 = 0;
    switch (int1) {
        case 10747906: {
            if (((varbitplayer_18021 > 140) && (int2 == 0))) {
                return;
            };
            int3 = 35;
            int4 = varbitplayer_18080;
            break;
        }
        case 10747907: {
            if (((varbitplayer_18021 > 150) && (int2 == 0))) {
                return;
            };
            int3 = 148;
            int4 = varbitplayer_18081;
            break;
        }
        case 10747908: {
            if (((varbitplayer_18021 > 160) && (int2 == 0))) {
                return;
            };
            int3 = 261;
            int4 = varbitplayer_18082;
            break;
        }
        case 10747909: {
            if (((varbitplayer_18021 > 170) && (int2 == 0))) {
                return;
            };
            int3 = 374;
            int4 = varbitplayer_18083;
            break;
        }
        default: {
            return;
        }
    };
    switch (int0) {
        case 10747916: {
            if (((int4 == 1) && (int2 == 0))) {
                return;
            };
            break;
        }
        case 10747917: {
            if (((int4 == 2) && (int2 == 0))) {
                return;
            };
            break;
        }
        case 10747918: {
            if (((int4 == 4) && (int2 == 0))) {
                return;
            };
            break;
        }
        case 10747919: {
            if (((int4 == 3) && (int2 == 0))) {
                return;
            };
            break;
        }
    };
    IF_SETPOSITION(int3, 63, 0, 0, int0);
    if ((int2 == 1)) {
        return;
    };
    switch (int4) {
        case 0: {
            return;
        }
        case 1: {
            script7585(comp(164, 12));
            break;
        }
        case 2: {
            script7585(comp(164, 13));
            break;
        }
        case 4: {
            script7585(comp(164, 14));
            break;
        }
        case 3: {
            script7585(comp(164, 15));
            break;
        }
    };
    return;
}