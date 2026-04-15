//
function script8284(int0: int, int1: int): int {
    var int2 = 1;
    var int3 = (int1 - 1);
    var int4 = int1;
    if ((int1 == -1)) {
        int3 = (1 - 1);
        int4 = script13417(int0);
    };
    var int5 = -1 as struct;
    var int6 = -1 as struct;
    var int7 = script14441();
    switch (int0) {
        case 0:         if ((++int3 <= int4)) {
            switch (int3) {
                case 1: {
                    int2 = varbitplayer_19005;
                    break;
                }
                case 2: {
                    int2 = varbitplayer_19006;
                    break;
                }
                case 3: {
                    int2 = varbitplayer_29609;
                    break;
                }
                case 4: {
                    int2 = varbitplayer_19008;
                    break;
                }
                case 5: {
                    int2 = script19332();
                    break;
                }
                default: {
                    int2 = 1;
                    break;
                }
            };
            if ((int2 == 0)) {
                if ((int1 == -1)) {
                    return int3;
                };
                return 1;
            };
        };

        case 1:         if ((++int3 <= int4)) {
            if ((script3910() == 1)) {
                if ((varplayer_12314 > 0)) {
                    switch (int3) {
                        case 5: {
                            int2 = varbitplayer_29611;
                            break;
                        }
                        case 6: {
                            int2 = varbitplayer_29608;
                            break;
                        }
                        default: {
                            int2 = 1;
                            break;
                        }
                    };
                } else if ((int3 != 5)) {
                    int2 = 1;
                } else {
                    int2 = varbitplayer_29611;
                };
            } else {
                switch (int3) {
                    case 1: {
                        int2 = varbitplayer_29610;
                        break;
                    }
                    case 2: {
                        int2 = varbitplayer_29616;
                        break;
                    }
                    case 3: {
                        int2 = varbitplayer_29612;
                        break;
                    }
                    case 4: {
                        int2 = varbitplayer_29613;
                        break;
                    }
                    case 5: {
                        int2 = varbitplayer_29611;
                        break;
                    }
                    case 6: {
                        int2 = varbitplayer_29608;
                        break;
                    }
                    default: {
                        int2 = 1;
                        break;
                    }
                };
            };
            if ((int2 == 0)) {
                if ((int1 == -1)) {
                    return int3;
                };
                return 1;
            };
        };

        case 2:         if ((++int3 <= int4)) {
            switch (int3) {
                case 1: {
                    int2 = varbitplayer_19014;
                    break;
                }
                case 2: {
                    int2 = varbitplayer_19015;
                    break;
                }
                case 3: {
                    int2 = varbitplayer_19016;
                    break;
                }
                case 4: {
                    int2 = varbitplayer_53112;
                    break;
                }
                case 5: {
                    int2 = varbitplayer_19017;
                    break;
                }
                case 6: {
                    int2 = varbitplayer_19018;
                    break;
                }
                default: {
                    int2 = 1;
                    break;
                }
            };
            if ((int2 == 0)) {
                if ((int1 == -1)) {
                    return int3;
                };
                return 1;
            };
        };

        case 3:         if ((++int3 <= int4)) {
            switch (int3) {
                case 1: {
                    int2 = varbitplayer_16903;
                    break;
                }
                case 2: {
                    int2 = varbitplayer_19020;
                    break;
                }
                case 3: {
                    if ((varplayer_12314 > 0)) {
                        int2 = 1;
                    } else {
                        int2 = varbitplayer_19021;
                    };
                    break;
                }
                case 4: {
                    int2 = varbitplayer_19022;
                    break;
                }
                case 6: {
                    int2 = varbitplayer_44636;
                    break;
                }
                case 5: {
                    int2 = varbitplayer_34337;
                    break;
                }
                default: {
                    int2 = 1;
                    break;
                }
            };
            if ((int2 == 0)) {
                if ((int1 == -1)) {
                    return int3;
                };
                return 1;
            };
        };

        case 4:
        case 6:         if ((++int3 <= int4)) {
            switch (int3) {
                case 1: {
                    int2 = 0;
                    break;
                }
                case 2: {
                    if (((script3825() == 1) || (script16861(MAP_WORLD()) == 1))) {
                        int2 = 1;
                    } else {
                        int2 = varbitplayer_19027;
                    };
                    break;
                }
                case 3: {
                    int2 = varbitplayer_19028;
                    break;
                }
                case 4: {
                    int2 = varbitplayer_24594;
                    break;
                }
                case 5: {
                    int2 = 1;
                    break;
                }
                case 6: {
                    if (((((varbitplayer_39917 >= 98) && (int7 != -1 as struct)) && (struct_getparam(int7, 9167) == 0)) && (varbitplayer_33661 == 1))) {
                        int2 = 0;
                    } else {
                        int2 = 1;
                    };
                    break;
                }
                default: {
                    int2 = 1;
                    break;
                }
            };
            if ((int2 == 0)) {
                if ((int1 == -1)) {
                    return int3;
                };
                return 1;
            };
        };

        case 5:         if ((++int3 <= int4)) {
            switch (int3) {
                case 1: {
                    int2 = OR(varbitplayer_34817, OR(varbitplayer_14173, varbitplayer_29044));
                    if ((script12240() == 0)) {
                        int2 = 1;
                    };
                    if (((varbitplayer_433 < 2) && (varbitplayer_32445 == 1))) {
                        int2 = 0;
                    };
                    break;
                }
                case 2: {
                    int2 = varbitplayer_29045;
                    break;
                }
                case 3: {
                    int2 = varbitplayer_30493;
                    break;
                }
                case 4: {
                    int2 = varbitplayer_46360;
                    if ((script12240() == 0)) {
                        int2 = 1;
                    };
                    break;
                }
                default: {
                    int2 = 1;
                    break;
                }
            };
            if ((int2 == 0)) {
                if ((int1 == -1)) {
                    return int3;
                };
                return 1;
            };
        };

        case 7:         if ((++int3 <= int4)) {
            switch (int3) {
                case 1: {
                    int2 = varbitplayer_60431;
                    break;
                }
                case 2: {
                    int2 = varbitplayer_60432;
                    break;
                }
                case 3: {
                    int2 = varbitplayer_60433;
                    break;
                }
                case 4: {
                    if ((script13749() == false)) {
                        int2 = 1;
                    } else {
                        int2 = varbitplayer_60434;
                    };
                    break;
                }
                default: {
                    int2 = 1;
                    break;
                }
            };
            if ((int2 == 0)) {
                if ((int1 == -1)) {
                    return int3;
                };
                return 1;
            };
        };

        case 8:         if ((++int3 <= int4)) {
            switch (int3) {
                case 1: {
                    int2 = varbitplayer_30612;
                    break;
                }
                case 2: {
                    int2 = varbitplayer_30613;
                    break;
                }
                case 3: {
                    int2 = varbitplayer_30614;
                    break;
                }
                default: {
                    int2 = 1;
                    break;
                }
            };
            if ((int2 == 0)) {
                if ((int1 == -1)) {
                    return int3;
                };
                return 1;
            };
        };

        case 9:         if ((++int3 <= int4)) {
            switch (int3) {
                case 1: {
                    int2 = varbitplayer_19029;
                    break;
                }
                case 3: {
                    int2 = varbitplayer_19031;
                    break;
                }
                case 2: {
                    int2 = varbitplayer_19032;
                    break;
                }
                case 4: {
                    int2 = varbitplayer_19033;
                    break;
                }
                case 5: {
                    int2 = varbitplayer_47565;
                    break;
                }
                case 6: {
                    int2 = varbitplayer_60056;
                    break;
                }
                default: {
                    int2 = 1;
                    break;
                }
            };
            if ((int2 == 0)) {
                if ((int1 == -1)) {
                    return int3;
                };
                return 1;
            };
        };

        case 10: {
            int5 = script13415(int0);
            if ((int5 == -1 as struct)) {
                return 0;
            };
            while ((++int3 <= int4)) {
                int6 = script13416(int5, int3);
                if (((int6 == -1 as struct) || (int6 == 19073 as struct))) {
                    int2 = 1;
                } else {
                    switch (int3) {
                        case 1: {
                            int2 = varbitplayer_31207;
                            break;
                        }
                        case 2: {
                            int2 = varbitplayer_31208;
                            break;
                        }
                        case 3: {
                            int2 = varbitplayer_31209;
                            break;
                        }
                        case 4: {
                            int2 = varbitplayer_31210;
                            break;
                        }
                        case 5: {
                            int2 = varbitplayer_31211;
                            break;
                        }
                        case 6: {
                            int2 = varbitplayer_36095;
                            break;
                        }
                        default: {
                            int2 = 1;
                            break;
                        }
                    };
                };
                if ((int2 == 0)) {
                    if ((int1 == -1)) {
                        return int3;
                    };
                    return 1;
                };
            };
            break;
        }
        case 11: {
            int5 = script13415(int0);
            if ((int5 == -1 as struct)) {
                return 0;
            };
            while ((++int3 <= int4)) {
                int6 = script13416(int5, int3);
                if (((int6 == -1 as struct) || (int6 == 19073 as struct))) {
                    int2 = 1;
                } else {
                    switch (int3) {
                        case 1: {
                            int2 = varbitplayer_36096;
                            break;
                        }
                        case 2: {
                            int2 = varbitplayer_36097;
                            break;
                        }
                        case 3: {
                            int2 = varbitplayer_36098;
                            break;
                        }
                        case 4: {
                            int2 = varbitplayer_36099;
                            break;
                        }
                        case 5: {
                            int2 = varbitplayer_36100;
                            break;
                        }
                        case 6: {
                            int2 = varbitplayer_36101;
                            break;
                        }
                        default: {
                            int2 = 1;
                            break;
                        }
                    };
                };
                if ((int2 == 0)) {
                    if ((int1 == -1)) {
                        return int3;
                    };
                    return 1;
                };
            };
            break;
        }
        case 100: {
            return 1;
        }
        case 12:         if ((++int3 <= int4)) {
            switch (int3) {
                case 1: {
                    int2 = script20139();
                    break;
                }
                case 2: {
                    int2 = varbitplayer_58369;
                    break;
                }
                case 3: {
                    int2 = script20137();
                    break;
                }
                case 4: {
                    int2 = varbitplayer_58371;
                    break;
                }
                case 5: {
                    int2 = script20138();
                    break;
                }
                default: {
                    int2 = 1;
                    break;
                }
            };
            if ((int2 == 0)) {
                if ((int1 == -1)) {
                    return int3;
                };
                return 1;
            };
        };

    };
    return 0;
}