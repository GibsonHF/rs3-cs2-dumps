//
function script8957(int0: int, int1: int): void {
    var int2 = comp(1496, 222);
    CC_DELETEALL(int2);
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    while ((int4 < int0)) {
        CC_CREATE(int2, 5, int4);
        if (((int1 - 1) == int4)) {
            CC_SETGRAPHIC(18525 as graphic);
        } else {
            CC_SETGRAPHIC(18526 as graphic);
        };
        CC_SETSIZE(18, 18, 0, 0);
        switch (int0) {
            case 1: {
                int3 = 0;
                break;
            }
            case 2: {
                if ((int4 == 0)) {
                    int3 = -10;
                } else {
                    int3 = 10;
                };
                break;
            }
            case 3: {
                if ((int4 == 0)) {
                    int3 = -20;
                } else if ((int4 == 1)) {
                    int3 = 0;
                } else {
                    int3 = 20;
                };
                break;
            }
            case 4: {
                switch (int4) {
                    case 0: {
                        int3 = -30;
                        break;
                    }
                    case 1: {
                        int3 = -10;
                        break;
                    }
                    case 2: {
                        int3 = 10;
                        break;
                    }
                    case 3: {
                        int3 = 30;
                        break;
                    }
                };
                break;
            }
            case 5: {
                switch (int4) {
                    case 0: {
                        int3 = -40;
                        break;
                    }
                    case 1: {
                        int3 = -20;
                        break;
                    }
                    case 2: {
                        int3 = 0;
                        break;
                    }
                    case 3: {
                        int3 = 20;
                        break;
                    }
                    case 4: {
                        int3 = 40;
                        break;
                    }
                };
                break;
            }
            case 6: {
                switch (int4) {
                    case 0: {
                        int3 = -50;
                        break;
                    }
                    case 1: {
                        int3 = -30;
                        break;
                    }
                    case 2: {
                        int3 = -10;
                        break;
                    }
                    case 3: {
                        int3 = 10;
                        break;
                    }
                    case 4: {
                        int3 = 30;
                        break;
                    }
                    case 5: {
                        int3 = 50;
                        break;
                    }
                };
                break;
            }
            case 7: {
                switch (int4) {
                    case 0: {
                        int3 = -60;
                        break;
                    }
                    case 1: {
                        int3 = -40;
                        break;
                    }
                    case 2: {
                        int3 = -20;
                        break;
                    }
                    case 3: {
                        int3 = 0;
                        break;
                    }
                    case 4: {
                        int3 = 20;
                        break;
                    }
                    case 5: {
                        int3 = 40;
                        break;
                    }
                    case 6: {
                        int3 = 60;
                        break;
                    }
                };
                break;
            }
            case 8: {
                switch (int4) {
                    case 0: {
                        int3 = -70;
                        break;
                    }
                    case 1: {
                        int3 = -50;
                        break;
                    }
                    case 2: {
                        int3 = -30;
                        break;
                    }
                    case 3: {
                        int3 = -10;
                        break;
                    }
                    case 4: {
                        int3 = 10;
                        break;
                    }
                    case 5: {
                        int3 = 30;
                        break;
                    }
                    case 6: {
                        int3 = 50;
                        break;
                    }
                    case 7: {
                        int3 = 70;
                        break;
                    }
                };
                break;
            }
        };
        CC_SETPOSITION(int3, 0, 1, 1);
        CC_SETOP(1, "Select");
        int5 = script8982(int4, int0);
        CC_SETONOP(callback(script8980, int5));
        int4 = (int4 + 1);
    };
    return;
}