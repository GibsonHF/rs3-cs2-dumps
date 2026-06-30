//
function script8247(int0: number): number {
    var int1 = 0;
    var int2 = -1;
    var int3 = 9;
    if (((int0 != -1) && (struct_getparam(int0, 6527) == true))) {
        switch (int0) {
            case 48302: {
                if (((varplayer_10994 == 1) && (varbitplayer_53572 == 1))) {
                    return 48303;
                };
                return 48302;
            }
            case 48304: {
                if (((varplayer_11006 == 1) && (varbitplayer_53574 == 1))) {
                    return 48305;
                };
                return 48304;
            }
            case 48306: {
                if (((varplayer_11018 == 1) && (varbitplayer_53576 == 1))) {
                    return 48307;
                };
                return 48306;
            }
            case 31820: {
                if (((varplayer_11820 == 1) && (varbitplayer_55974 == 1))) {
                    return 32342;
                };
                return 31820;
            }
            case 48311:
            case 48312:
            case 48313: {
                if ((varplayer_11051 == 1)) {
                    return 48312;
                };
                if ((varplayer_11054 == 1)) {
                    return 48313;
                };
                return 48311;
            }
            case 44244:
            case 52788:
            case 52789: {
                if ((varplayer_12643 == 1)) {
                    return 52788;
                };
                if ((varplayer_12646 == 1)) {
                    return 52789;
                };
                return 44244;
            }
            case 14704:
            case 52790: {
                if ((script8744() == 1)) {
                    return 52790;
                };
                return 14704;
            }
            case 14685:
            case 52787: {
                if ((script8744() == 1)) {
                    return 52787;
                };
                return 14685;
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
                                return 52785;
                            };
                            return 40936;
                        };
                        if ((script8744() == 1)) {
                            return 52782;
                        };
                        return 14684;
                    }
                    case 1: {
                        if ((int1 == 1)) {
                            return 40935;
                        };
                        return 14678;
                    }
                    case 29: {
                        if ((int1 == 1)) {
                            return 1488;
                        };
                        return 47129;
                    }
                    case 10: {
                        if ((int1 == 1)) {
                            return 40941;
                        };
                        return 14701;
                    }
                };
                break;
            }
            case 3: {
                switch (int2) {
                    case 5: {
                        if ((int1 == 1)) {
                            return 45048;
                        };
                        return 14668;
                    }
                    case 10: {
                        if ((int1 == 1)) {
                            return 46276;
                        };
                        return 19251;
                    }
                };
                break;
            }
            case 4: {
                switch (int2) {
                    case 158: {
                        if ((int1 == 1)) {
                            return 37900;
                        };
                        return 14876;
                    }
                    case 154: {
                        if ((varbitplayer_0 == 1)) {
                            return 32261;
                        };
                        return 14873;
                    }
                    case 197: {
                        if ((varbitplayer_0 == 1)) {
                            return 6847;
                        };
                        return 6845;
                    }
                    case 185: {
                        if ((varbitplayer_0 == 2)) {
                            return 14873;
                        };
                        return 32261;
                    }
                    case 195: {
                        if ((varbitplayer_0 == 2)) {
                            return 6845;
                        };
                        return 6847;
                    }
                    case 6: {
                        return 14730;
                    }
                    case 165: {
                        switch (int1) {
                            case 1: {
                                return 19342;
                            }
                            case 2: {
                                return 47221;
                            }
                        };
                        break;
                    }
                    case 166: {
                        switch (int1) {
                            case 1: {
                                return 19343;
                            }
                            case 2: {
                                return 45450;
                            }
                        };
                        break;
                    }
                    case 5: {
                        return 14729;
                    }
                    case 4: {
                        if ((int1 == 1)) {
                            return 45046;
                        };
                        return 14728;
                    }
                    case 1: {
                        if ((int1 == 1)) {
                            return 44900;
                        };
                        return 14725;
                    }
                    case 164: {
                        if ((int1 == 1)) {
                            return 46275;
                        };
                        return 19254;
                    }
                };
                break;
            }
        };
    };
    return int0;
}