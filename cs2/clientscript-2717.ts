//
function script2717(): void {
    var int0 = 0;
    var int1 = STAT_BASE(25 as stat);
    if ((int1 >= 95)) {
        int0 = 12;
    } else if ((int1 >= 90)) {
        int0 = 11;
    } else if ((int1 >= 85)) {
        int0 = 10;
    } else if ((int1 >= 80)) {
        int0 = 9;
    } else if ((int1 >= 70)) {
        int0 = 8;
    } else if ((int1 >= 60)) {
        int0 = 7;
    } else if ((int1 >= 50)) {
        int0 = 6;
    } else if ((int1 >= 40)) {
        int0 = 5;
    } else if ((int1 >= 30)) {
        int0 = 4;
    } else if ((int1 >= 20)) {
        int0 = 3;
    } else if ((int1 >= 10)) {
        int0 = 2;
    } else {
        int0 = 1;
    };
    var int2 = 1;
    var int3 = -1;
    switch (int0) {
        case 1: {
            int3 = 6029324;
            break;
        }
        case 2: {
            int3 = 6029325;
            break;
        }
        case 3: {
            int3 = 6029326;
            break;
        }
        case 4: {
            int3 = 6029327;
            break;
        }
        case 5: {
            int3 = 6029328;
            break;
        }
        case 6: {
            int3 = 6029329;
            break;
        }
        case 7: {
            int3 = 6029330;
            break;
        }
        case 8: {
            int3 = 6029331;
            break;
        }
        case 9: {
            int3 = 6029332;
            break;
        }
        case 10: {
            int3 = 6029333;
            break;
        }
        case 11: {
            int3 = 6029334;
            break;
        }
        case 12: {
            int3 = 6029335;
            break;
        }
        default: {
            return;
        }
    };
    stack(20361);
    stack(int3);
    IF_SETGRAPHIC();
    while ((int2 < int0)) {
        switch (int2) {
            case 1: {
                int3 = 6029324;
                break;
            }
            case 2: {
                int3 = 6029325;
                break;
            }
            case 3: {
                int3 = 6029326;
                break;
            }
            case 4: {
                int3 = 6029327;
                break;
            }
            case 5: {
                int3 = 6029328;
                break;
            }
            case 6: {
                int3 = 6029329;
                break;
            }
            case 7: {
                int3 = 6029330;
                break;
            }
            case 8: {
                int3 = 6029331;
                break;
            }
            case 9: {
                int3 = 6029332;
                break;
            }
            case 10: {
                int3 = 6029333;
                break;
            }
            case 11: {
                int3 = 6029334;
                break;
            }
            default: {
                return;
            }
        };
        stack(20360);
        stack(int3);
        IF_SETGRAPHIC();
        int2 = (int2 + 1);
    };
    int2 = 12;
    while ((int2 > int0)) {
        switch (int2) {
            case 2: {
                int3 = 6029325;
                break;
            }
            case 3: {
                int3 = 6029326;
                break;
            }
            case 4: {
                int3 = 6029327;
                break;
            }
            case 5: {
                int3 = 6029328;
                break;
            }
            case 6: {
                int3 = 6029329;
                break;
            }
            case 7: {
                int3 = 6029330;
                break;
            }
            case 8: {
                int3 = 6029331;
                break;
            }
            case 9: {
                int3 = 6029332;
                break;
            }
            case 10: {
                int3 = 6029333;
                break;
            }
            case 11: {
                int3 = 6029334;
                break;
            }
            case 12: {
                int3 = 6029335;
                break;
            }
            default: {
                return;
            }
        };
        stack(20362);
        stack(int3);
        IF_SETGRAPHIC();
        int2 = (int2 - 1);
    };
    return;
}