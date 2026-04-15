//
function script15175(int0: int, int1: int): [int, int] {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    switch (int1) {
        case 1: {
            int4 = 3;
            break;
        }
        case 2: {
            switch (int0) {
                case 0: {
                    int4 = 2;
                    break;
                }
                case 1: {
                    int4 = 4;
                    break;
                }
            };
            break;
        }
        case 3: {
            switch (int0) {
                case 0: {
                    int4 = 2;
                    break;
                }
                case 1: {
                    int4 = 3;
                    break;
                }
                case 2: {
                    int4 = 4;
                    break;
                }
            };
            break;
        }
        case 4: {
            switch (int0) {
                case 0: {
                    int4 = 1;
                    break;
                }
                case 1: {
                    int4 = 2;
                    break;
                }
                case 2: {
                    int4 = 4;
                    break;
                }
                case 3: {
                    int4 = 5;
                    break;
                }
            };
            break;
        }
        case 5: {
            switch (int0) {
                case 0: {
                    int4 = 1;
                    break;
                }
                case 1: {
                    int4 = 2;
                    break;
                }
                case 2: {
                    int4 = 3;
                    break;
                }
                case 3: {
                    int4 = 4;
                    break;
                }
                case 4: {
                    int4 = 5;
                    break;
                }
            };
            break;
        }
        case 6: {
            switch (int0) {
                case 0: {
                    int4 = 0;
                    break;
                }
                case 1: {
                    int4 = 1;
                    break;
                }
                case 2: {
                    int4 = 2;
                    break;
                }
                case 3: {
                    int4 = 4;
                    break;
                }
                case 4: {
                    int4 = 5;
                    break;
                }
                case 5: {
                    int4 = 6;
                    break;
                }
            };
            break;
        }
        case 7: {
            int4 = int0;
            break;
        }
    };
    switch (int4) {
        case 0: {
            int2 = -160;
            int3 = 340;
            break;
        }
        case 1: {
            int2 = -170;
            int3 = 215;
            break;
        }
        case 2: {
            int2 = -130;
            int3 = 105;
            break;
        }
        case 3: {
            int2 = 0;
            int3 = 80;
            break;
        }
        case 4: {
            int2 = 130;
            int3 = 105;
            break;
        }
        case 5: {
            int2 = 170;
            int3 = 215;
            break;
        }
        case 6: {
            int2 = 160;
            int3 = 340;
            break;
        }
    };
    return [int2, int3];
}