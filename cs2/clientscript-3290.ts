//
function script3290(int0: obj, int1: int, int2: unknown_int, int3: int): [unknown_int, string] {
    if ((int0 == -1 as obj)) {
        return [0, ""];
    };
    if (((int1 < -1) || (int1 > 8))) {
        return [0, ""];
    };
    if ((OC_WEARPOS(int0) == -1)) {
        return [0, ""];
    };
    var string0 = "";
    switch (int1) {
        case 1: {
            string0 = item_getparam(int0, 528);
            break;
        }
        case 2: {
            string0 = item_getparam(int0, 529);
            break;
        }
        case 3: {
            string0 = item_getparam(int0, 530);
            break;
        }
        case 4: {
            string0 = item_getparam(int0, 531);
            break;
        }
        case 5: {
            string0 = item_getparam(int0, 1211);
            break;
        }
        case 6: {
            string0 = item_getparam(int0, 6712);
            break;
        }
        case 7: {
            string0 = item_getparam(int0, 6713);
            break;
        }
        case 8: {
            string0 = item_getparam(int0, 6714);
            break;
        }
    };
    if ((script4034(int0) == 1)) {
        switch (int1) {
            case 6: {
                if ((STRING_LENGTH(script474(20767 as obj, 1)) > 0)) {
                    return [1, script474(20767 as obj, 1)];
                };
                break;
            }
            case 7: {
                if ((STRING_LENGTH(script474(20767 as obj, 2)) > 0)) {
                    return [1, script474(20767 as obj, 2)];
                };
                break;
            }
            case 8: {
                if ((STRING_LENGTH(script474(20767 as obj, 3)) > 0)) {
                    return [1, script474(20767 as obj, 3)];
                };
                break;
            }
        };
    };
    if (((item_getparam(int0, 2281) != -1 as struct) || (item_getparam(int0, 6810) == true))) {
        switch (int1) {
            case -1:
            case 0: {
                return [1, ""];
            }
            case 1: {
                if ((int2 == 1)) {
                    return [1, "Operate"];
                };
                if ((STRING_LENGTH(string0) > 0)) {
                    return [1, string0];
                };
                break;
            }
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8: {
                if (((int2 == 0) && (STRING_LENGTH(string0) > 0))) {
                    return [1, string0];
                };
                break;
            }
        };
    } else {
        if ((int1 == 0)) {
            return [0, ""];
        };
        switch (int0) {
            case 42682: {
                if (((varbitplayer_40405 == 35) || (varbitplayer_40405 == 60))) {
                    if ((((int1 == 1) || (int1 == -1)) && (STRING_LENGTH(string0) > 0))) {
                        return [1, string0];
                    };
                    if ((((int1 == 2) || (int1 == -1)) && (STRING_LENGTH(string0) > 0))) {
                        return [1, string0];
                    };
                };
                break;
            }
            case 20767:
            case 32151:
            case 53863:
            case 53865: {
                switch (int1) {
                    case -1: {
                        return [1, ""];
                    }
                    case 1:
                    case 2:
                    case 3:
                    case 7:
                    case 8: {
                        if ((STRING_LENGTH(string0) > 0)) {
                            return [1, string0];
                        };
                        break;
                    }
                    case 4: {
                        if ((STRING_LENGTH(script474(int0, 1)) > 0)) {
                            return [1, script474(int0, 1)];
                        };
                        break;
                    }
                    case 5: {
                        if ((STRING_LENGTH(script474(int0, 2)) > 0)) {
                            return [1, script474(int0, 2)];
                        };
                        break;
                    }
                    case 6: {
                        if ((STRING_LENGTH(script474(int0, 3)) > 0)) {
                            return [1, script474(int0, 3)];
                        };
                        break;
                    }
                };
                break;
            }
            case 32052:
            case 32053:
            case 32054:
            case 32055: {
                switch (int1) {
                    case -1: {
                        return [1, ""];
                    }
                    case 1:
                    case 2:
                    case 5:
                    case 6:
                    case 7:
                    case 8: {
                        if ((STRING_LENGTH(string0) > 0)) {
                            return [1, string0];
                        };
                        break;
                    }
                    case 3: {
                        if ((STRING_LENGTH(script474(int0, 1)) > 0)) {
                            return [1, script474(int0, 1)];
                        };
                        break;
                    }
                    case 4: {
                        if ((STRING_LENGTH(script474(int0, 2)) > 0)) {
                            return [1, script474(int0, 2)];
                        };
                        break;
                    }
                };
                break;
            }
            case 44155: {
                switch (int1) {
                    case -1: {
                        return [1, ""];
                    }
                    case 1:
                    case 5:
                    case 6:
                    case 7:
                    case 8: {
                        if ((STRING_LENGTH(string0) > 0)) {
                            return [1, string0];
                        };
                        break;
                    }
                    case 2:
                    case 3:
                    case 4: {
                        if ((script1413(40722 as struct) == 2)) {
                            return [1, string0];
                        };
                        break;
                    }
                };
                break;
            }
            case 44550: {
                switch (int1) {
                    case -1: {
                        return [1, ""];
                    }
                    case 1: {
                        return [1, enum_getvalue(0, 36, 14610 as cs2enum, varbitplayer_25054)];
                    }
                    case 2: {
                        return [1, enum_getvalue(0, 36, 14610 as cs2enum, varbitplayer_25055)];
                    }
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8: {
                        if ((STRING_LENGTH(string0) > 0)) {
                            return [1, string0];
                        };
                        break;
                    }
                };
                break;
            }
            case 22332: {
                switch (int1) {
                    case -1: {
                        return [1, ""];
                    }
                    case 1: {
                        if ((varbitplayer_47562 == 1)) {
                            return [1, enum_getvalue(33, 36, 15940 as cs2enum, varplayer_8103)];
                        };
                        if ((STRING_LENGTH(string0) > 0)) {
                            return [1, string0];
                        };
                        break;
                    }
                    case 2:
                    case 3:
                    case 4:
                    case 6: {
                        if ((STRING_LENGTH(string0) > 0)) {
                            return [1, string0];
                        };
                        break;
                    }
                    case 5: {
                        if ((varbitplayer_47562 == 0)) {
                            return [1, enum_getvalue(33, 36, 15940 as cs2enum, varplayer_8103)];
                        };
                        return [1, "Activate"];
                    }
                };
                break;
            }
            case 32342:
            case 32347:
            case 32352: {
                switch (int1) {
                    case -1: {
                        return [1, ""];
                    }
                    case 1: {
                        if ((varbitplayer_47562 == 1)) {
                            return [1, enum_getvalue(33, 36, 15940 as cs2enum, varplayer_8103)];
                        };
                        if ((STRING_LENGTH(string0) > 0)) {
                            return [1, string0];
                        };
                        break;
                    }
                    case 2:
                    case 3:
                    case 6: {
                        if ((STRING_LENGTH(string0) > 0)) {
                            return [1, string0];
                        };
                        break;
                    }
                    case 4: {
                        if ((varbitplayer_47562 == 0)) {
                            return [1, enum_getvalue(33, 36, 15940 as cs2enum, varplayer_8103)];
                        };
                        return [1, "Activate"];
                    }
                };
                break;
            }
            case 32357: {
                switch (int1) {
                    case -1: {
                        return [1, ""];
                    }
                    case 1: {
                        if ((varbitplayer_47562 == 1)) {
                            return [1, enum_getvalue(33, 36, 15940 as cs2enum, varplayer_8103)];
                        };
                        if ((STRING_LENGTH(string0) > 0)) {
                            return [1, string0];
                        };
                        break;
                    }
                    case 2:
                    case 4:
                    case 5:
                    case 7: {
                        if ((STRING_LENGTH(string0) > 0)) {
                            return [1, string0];
                        };
                        break;
                    }
                    case 6: {
                        if ((varbitplayer_47562 == 0)) {
                            return [1, enum_getvalue(33, 36, 15940 as cs2enum, varplayer_8103)];
                        };
                        return [1, "Activate"];
                    }
                };
                break;
            }
            case 35:
            case 14632:
            case 36619:
            case 36620: {
                switch (int1) {
                    case -1: {
                        return [1, ""];
                    }
                    case 1: {
                        if (((int3 == 1) || ((varbitplayer_54934 == 1) && (int3 == -1)))) {
                            return [1, "Remove"];
                        };
                        return [1, "Activate"];
                    }
                    case 2: {
                        if (((int3 == 1) || ((varbitplayer_54934 == 1) && (int3 == -1)))) {
                            return [1, "Activate"];
                        };
                        return [1, "Remove"];
                    }
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8: {
                        if ((STRING_LENGTH(string0) > 0)) {
                            return [1, string0];
                        };
                        break;
                    }
                };
                break;
            }
            default: {
                switch (int1) {
                    case -1: {
                        if ((STRING_LENGTH(item_getparam(int0, 528)) > 0)) {
                            return [1, ""];
                        };
                        if ((STRING_LENGTH(item_getparam(int0, 529)) > 0)) {
                            return [1, ""];
                        };
                        if ((STRING_LENGTH(item_getparam(int0, 530)) > 0)) {
                            return [1, ""];
                        };
                        if ((STRING_LENGTH(item_getparam(int0, 531)) > 0)) {
                            return [1, ""];
                        };
                        if ((STRING_LENGTH(item_getparam(int0, 1211)) > 0)) {
                            return [1, ""];
                        };
                        if ((STRING_LENGTH(item_getparam(int0, 6712)) > 0)) {
                            return [1, ""];
                        };
                        if ((STRING_LENGTH(item_getparam(int0, 6713)) > 0)) {
                            return [1, ""];
                        };
                        if ((STRING_LENGTH(item_getparam(int0, 6714)) > 0)) {
                            return [1, ""];
                        };
                        break;
                    }
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8: {
                        if ((STRING_LENGTH(string0) > 0)) {
                            return [1, string0];
                        };
                        break;
                    }
                };
                break;
            }
        };
    };
    return [0, ""];
}