//
function script18008(int0: number): number {
    var int1 = -1;
    switch (int0) {
        case 30: {
            switch (MAP_LANG()) {
                case 0: {
                    int1 = 12218;
                    break;
                }
                case 1: {
                    int1 = 11974;
                    break;
                }
                case 2: {
                    int1 = 12218;
                    break;
                }
                case 3: {
                    int1 = 13019;
                    break;
                }
            };
            break;
        }
        case 50: {
            switch (MAP_LANG()) {
                case 0: {
                    int1 = 12219;
                    break;
                }
                case 1: {
                    int1 = 12008;
                    break;
                }
                case 2: {
                    int1 = 12219;
                    break;
                }
                case 3: {
                    int1 = 13020;
                    break;
                }
            };
            break;
        }
        case 128: {
            switch (MAP_LANG()) {
                case 0: {
                    int1 = 12009;
                    break;
                }
                case 1: {
                    int1 = 11755;
                    break;
                }
                case 2: {
                    int1 = 12009;
                    break;
                }
                case 3: {
                    int1 = 12394;
                    break;
                }
            };
            break;
        }
        case 256: {
            switch (MAP_LANG()) {
                case 0: {
                    int1 = 12010;
                    break;
                }
                case 1: {
                    int1 = 11756;
                    break;
                }
                case 2: {
                    int1 = 12010;
                    break;
                }
                case 3: {
                    int1 = 13018;
                    break;
                }
            };
            break;
        }
        default: {
            script12478(`Invalid size ${inttostring(int0, 10)} entered.`);
            break;
        }
    };
    return int1;
}