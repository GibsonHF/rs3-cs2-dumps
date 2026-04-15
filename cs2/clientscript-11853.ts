//
function script11853(int0: int, int1: int): int {
    switch (int1) {
        case 1: {
            var int0 = (int0 / 10);
            break;
        }
        case 2:
        case 4: {
            if ((varplayer_5884 == 1 as telemetry_interval)) {
                int0 = (script11836(int0, (varclient_5078 / 50)) / 10);
            };
            break;
        }
        case 11:
        case 15: {
            if ((varbitplayer_27168 == 1)) {
                int0 = (int0 / 10);
            };
            break;
        }
        case 17:
        case 18: {
            if ((varbitplayer_27168 == 1)) {
                int0 = (int0 / 10);
            };
            if ((varplayer_5884 == 1 as telemetry_interval)) {
                int0 = script11837(int0, (varclient_5078 / 50));
            };
            break;
        }
        case 35: {
            if ((varplayer_5884 == 1 as telemetry_interval)) {
                int0 = script11836(int0, (varclient_5078 / 50));
            };
            break;
        }
    };
    return int0;
}