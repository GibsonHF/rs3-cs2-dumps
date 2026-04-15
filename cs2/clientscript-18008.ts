//
function script18008(int0: int): graphic {
    var int1 = -1 as graphic;
    switch (int0) {
        case 30: {
            switch (MAP_LANG()) {
                case 0: {
                    int1 = 12218 as graphic;
                    break;
                }
                case 1: {
                    int1 = 11974 as graphic;
                    break;
                }
                case 2: {
                    int1 = 12218 as graphic;
                    break;
                }
                case 3: {
                    int1 = 13019 as graphic;
                    break;
                }
            };
            break;
        }
        case 50: {
            switch (MAP_LANG()) {
                case 0: {
                    int1 = 12219 as graphic;
                    break;
                }
                case 1: {
                    int1 = 12008 as graphic;
                    break;
                }
                case 2: {
                    int1 = 12219 as graphic;
                    break;
                }
                case 3: {
                    int1 = 13020 as graphic;
                    break;
                }
            };
            break;
        }
        case 128: {
            switch (MAP_LANG()) {
                case 0: {
                    int1 = 12009 as graphic;
                    break;
                }
                case 1: {
                    int1 = 11755 as graphic;
                    break;
                }
                case 2: {
                    int1 = 12009 as graphic;
                    break;
                }
                case 3: {
                    int1 = 12394 as graphic;
                    break;
                }
            };
            break;
        }
        case 256: {
            switch (MAP_LANG()) {
                case 0: {
                    int1 = 12010 as graphic;
                    break;
                }
                case 1: {
                    int1 = 11756 as graphic;
                    break;
                }
                case 2: {
                    int1 = 12010 as graphic;
                    break;
                }
                case 3: {
                    int1 = 13018 as graphic;
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