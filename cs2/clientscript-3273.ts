//
function script3273(): [int, int, int] {
    var int0 = 0;
    var int1 = (varclient_1191 / 10);
    var int2 = (varclient_1191 - ((varclient_1191 / 10) * 10));
    switch (int1) {
        case 1: {
            switch (int2) {
                case 1: {
                    int0 = 2000;
                    break;
                }
            };
            break;
        }
        case 2: {
            switch (int2) {
                case 1: {
                    int0 = -500;
                    break;
                }
                case 2: {
                    int0 = 2000;
                    break;
                }
            };
            break;
        }
        case 3: {
            switch (int2) {
                case 1: {
                    int0 = -1000;
                    break;
                }
                case 2: {
                    int0 = -500;
                    break;
                }
                case 3: {
                    int0 = 2000;
                    break;
                }
            };
            break;
        }
        case 4: {
            switch (int2) {
                case 1: {
                    int0 = -1500;
                    break;
                }
                case 2: {
                    int0 = -1000;
                    break;
                }
                case 3: {
                    int0 = -500;
                    break;
                }
                case 4: {
                    int0 = 2000;
                    break;
                }
            };
            break;
        }
        case 5: {
            switch (int2) {
                case 1: {
                    int0 = -2000;
                    break;
                }
                case 2: {
                    int0 = -1500;
                    break;
                }
                case 3: {
                    int0 = -1000;
                    break;
                }
                case 4: {
                    int0 = -500;
                    break;
                }
                case 5: {
                    int0 = 2000;
                    break;
                }
            };
            break;
        }
    };
    return [int1, int2, int0];
}