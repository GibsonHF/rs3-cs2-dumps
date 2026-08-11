//
function script12449(int0: number, int1: number): void {
    if ((script7942() == 0)) {
        script12447();
    };
    switch (int0) {
        case 5: {
            IF_CLOSE();
            script7941(96796710);
            break;
        }
        case 8: {
            if (((int1 > 0) && (varbitclient_23075 < 1))) {
                script835();
                varbitclient_23075 = 1;
                IF_SETONTIMER(callback(script12448), comp(1477, 16));  // toplevel_v2:gamepad_listener
            };
            break;
        }
        case 9: {
            if (((int1 > 0) && (varbitclient_23075 < 1))) {
                if ((IF_GETHIDE(comp(475, 8)) == true)) {  // machinima_livecamera:ui
                    IF_SETHIDE(false, comp(475, 8));  // machinima_livecamera:ui
                } else {
                    IF_SETHIDE(true, comp(475, 8));  // machinima_livecamera:ui
                };
                IF_SETONTIMER(callback(script12448), comp(1477, 16));  // toplevel_v2:gamepad_listener
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