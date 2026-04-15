//
function script12449(int0: unknown_int, int1: int): void {
    if ((script7942() == 0)) {
        script12447();
    };
    switch (int0) {
        case 5: {
            IF_CLOSE();
            script7941(comp(1477, 38));
            break;
        }
        case 8: {
            if (((int1 > 0) && (varbitclient_23075 < 1))) {
                script835();
                varbitclient_23075 = 1;
                IF_SETONTIMER(callback(script12448), comp(1477, 16));
            };
            break;
        }
        case 9: {
            if (((int1 > 0) && (varbitclient_23075 < 1))) {
                if ((IF_GETHIDE(comp(475, 8)) == true)) {
                    IF_SETHIDE(false, comp(475, 8));
                } else {
                    IF_SETHIDE(true, comp(475, 8));
                };
                IF_SETONTIMER(callback(script12448), comp(1477, 16));
                varbitclient_23075 = 1;
                return;
            };
            break;
        }
        case 14: {
            varclient_4667 = MIN(1024, MAX((varclient_4667 - (int1 * 2)), 0));
            script6587();
            break;
        }
        case 15: {
            varclient_4667 = MAX(0, MIN(((int1 * 2) + varclient_4667), 1024));
            script6587();
            break;
        }
        case 12: {
            varclient_4668 = MIN(50, MAX((varclient_4668 - int1), 1));
            script6636();
            break;
        }
        case 13: {
            varclient_4668 = MAX(1, MIN((int1 + varclient_4668), 50));
            script6636();
            break;
        }
        default: {
            return;
        }
    };
    return;
}