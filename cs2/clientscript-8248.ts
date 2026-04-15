//
function script8248(int0: int, int1: int): unknown_int {
    switch (int0) {
        case 8: {
            break;
        }
        case 1: {
            switch (int1) {
                case 4: {
                    if (((script4356() == 1) && (varbitplayer_41436 == 1))) {
                        return 1;
                    };
                    break;
                }
                case 1: {
                    if (((script4356() == 1) && (varbitplayer_41438 == 1))) {
                        return 1;
                    };
                    break;
                }
                case 10: {
                    if (((script4356() == 1) && (varbitplayer_41437 == 1))) {
                        return 1;
                    };
                    break;
                }
                case 29: {
                    if ((script15411(1488 as struct) == 0)) {
                        return 0;
                    };
                    if ((STAT_BASE(0 as stat) < struct_getparam(1488, 2807))) {
                        return 0;
                    };
                    if ((script16325() == 0)) {
                        return 0;
                    };
                    return 1;
                }
            };
            break;
        }
        case 3: {
            switch (int1) {
                case 5: {
                    if (((script4356() == 1) && (script15411(45048 as struct) == 1))) {
                        return 1;
                    };
                    return 0;
                }
                case 10: {
                    if (((script4356() == 1) && (script15411(46276 as struct) == 1))) {
                        return 1;
                    };
                    return 0;
                }
            };
            break;
        }
        case 4: {
            switch (int1) {
                case 158: {
                    if ((varbitplayer_36969 == 1)) {
                        return 1;
                    };
                    break;
                }
                case 165: {
                    if ((((script4356() == 1) && (varbitplayer_52857 == 1)) && (STAT_BASE(6 as stat) >= struct_getparam(47221, 2807)))) {
                        return 2;
                    };
                    return 1;
                }
                case 1: {
                    if (((script4356() == 1) && (script15411(44900 as struct) == 1))) {
                        return 1;
                    };
                    return 0;
                }
                case 166: {
                    if (((script4356() == 1) && (varbitplayer_49799 == 1))) {
                        return 2;
                    };
                    return 1;
                }
                case 4: {
                    if (((script4356() == 1) && (script15411(45046 as struct) == 1))) {
                        return 1;
                    };
                    return 0;
                }
                case 164: {
                    if (((script4356() == 1) && (script15411(46275 as struct) == 1))) {
                        return 1;
                    };
                    return 0;
                }
            };
            break;
        }
    };
    return 0;
}