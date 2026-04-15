//
function script17688(int0: int, int1: int): unknown_int {
    var int2 = -1;
    switch (int0) {
        case 3: {
            if ((varbitplayer_27168 == 1)) {
                switch (int1) {
                    case 0: {
                        int2 = 0;
                        break;
                    }
                    case 1: {
                        int2 = 1;
                        break;
                    }
                    case 2: {
                        int2 = 2;
                        break;
                    }
                    default: {
                        int2 = 1;
                        break;
                    }
                };
            } else {
                switch (int1) {
                    case 0: {
                        int2 = 5;
                        break;
                    }
                    case 1: {
                        int2 = 0;
                        break;
                    }
                    case 2: {
                        int2 = 1;
                        break;
                    }
                    case 3: {
                        int2 = 2;
                        break;
                    }
                    default: {
                        int2 = 1;
                        break;
                    }
                };
            };
            break;
        }
        case 8: {
            int2 = 5;
            break;
        }
        case 9: {
            int2 = 0;
            break;
        }
        case 10: {
            int2 = 1;
            break;
        }
        case 11: {
            int2 = 2;
            break;
        }
        case 4: {
            if ((int1 == 0)) {
                return 11;
            };
            break;
        }
        case 14: {
            if ((int1 == 0)) {
                return 11;
            };
            break;
        }
    };
    return int2;
}