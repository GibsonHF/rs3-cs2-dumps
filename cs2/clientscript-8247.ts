//
function script8247(int0: struct): struct {
    var int1 = 0;
    var int2 = -1;
    var int3 = 9;
    if (((int0 != -1 as struct) && (struct_getparam(int0, 6527) == true))) {
        switch (int0) {
            case 48302: {
                if (((varplayer_10994 == 1) && (varbitplayer_53572 == 1))) {
                    return 48303 as struct;
                };
                return 48302 as struct;
            }
            case 48304: {
                if (((varplayer_11006 == 1) && (varbitplayer_53574 == 1))) {
                    return 48305 as struct;
                };
                return 48304 as struct;
            }
            case 48306: {
                if (((varplayer_11018 == 1) && (varbitplayer_53576 == 1))) {
                    return 48307 as struct;
                };
                return 48306 as struct;
            }
            case 31820: {
                if (((varplayer_11820 == 1) && (varbitplayer_55974 == 1))) {
                    return 32342 as struct;
                };
                return 31820 as struct;
            }
            case 48311:
            case 48312:
            case 48313: {
                if ((varplayer_11051 == 1)) {
                    return 48312 as struct;
                };
                if ((varplayer_11054 == 1)) {
                    return 48313 as struct;
                };
                return 48311 as struct;
            }
            case 44244:
            case 52788:
            case 52789: {
                if ((varplayer_12643 == 1)) {
                    return 52788 as struct;
                };
                if ((varplayer_12646 == 1)) {
                    return 52789 as struct;
                };
                return 44244 as struct;
            }
            case 14704:
            case 52790: {
                if ((script8744() == 1)) {
                    return 52790 as struct;
                };
                return 14704 as struct;
            }
            case 14685:
            case 52787: {
                if ((script8744() == 1)) {
                    return 52787 as struct;
                };
                return 14685 as struct;
            }
        };
        int2 = struct_getparam(int0, 2793);
        int3 = struct_getparam(int0, 2806);
        int1 = script8248(int3, int2);
        switch (int3) {
            case 8: {
                break;
            }
            case 1: {
                switch (int2) {
                    case 4: {
                        if ((int1 == 1)) {
                            if ((script8744() == 1)) {
                                return 52785 as struct;
                            };
                            return 40936 as struct;
                        };
                        if ((script8744() == 1)) {
                            return 52782 as struct;
                        };
                        return 14684 as struct;
                    }
                    case 1: {
                        if ((int1 == 1)) {
                            return 40935 as struct;
                        };
                        return 14678 as struct;
                    }
                    case 29: {
                        if ((int1 == 1)) {
                            return 1488 as struct;
                        };
                        return 47129 as struct;
                    }
                    case 10: {
                        if ((int1 == 1)) {
                            return 40941 as struct;
                        };
                        return 14701 as struct;
                    }
                };
                break;
            }
            case 3: {
                switch (int2) {
                    case 5: {
                        if ((int1 == 1)) {
                            return 45048 as struct;
                        };
                        return 14668 as struct;
                    }
                    case 10: {
                        if ((int1 == 1)) {
                            return 46276 as struct;
                        };
                        return 19251 as struct;
                    }
                };
                break;
            }
            case 4: {
                switch (int2) {
                    case 158: {
                        if ((int1 == 1)) {
                            return 37900 as struct;
                        };
                        return 14876 as struct;
                    }
                    case 6: {
                        return 14730 as struct;
                    }
                    case 165: {
                        switch (int1) {
                            case 1: {
                                return 19342 as struct;
                            }
                            case 2: {
                                return 47221 as struct;
                            }
                        };
                        break;
                    }
                    case 166: {
                        switch (int1) {
                            case 1: {
                                return 19343 as struct;
                            }
                            case 2: {
                                return 45450 as struct;
                            }
                        };
                        break;
                    }
                    case 5: {
                        return 14729 as struct;
                    }
                    case 4: {
                        if ((int1 == 1)) {
                            return 45046 as struct;
                        };
                        return 14728 as struct;
                    }
                    case 1: {
                        if ((int1 == 1)) {
                            return 44900 as struct;
                        };
                        return 14725 as struct;
                    }
                    case 164: {
                        if ((int1 == 1)) {
                            return 46275 as struct;
                        };
                        return 19254 as struct;
                    }
                };
                break;
            }
        };
    };
    return int0;
}