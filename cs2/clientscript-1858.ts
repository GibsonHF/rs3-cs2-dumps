//
function script1858(int0: int): unknown_int {
    switch (varplayer_12314) {
        case 1: {
            switch (int0) {
                case 0: {
                    return 1;
                }
                case 1: {
                    return 1;
                }
                case 2: {
                    return 1;
                }
                case 3: {
                    return 1;
                }
                case 4: {
                    return 1;
                }
                case 5: {
                    return 1;
                }
                case 6: {
                    return 1;
                }
                case 7: {
                    return 1;
                }
                case 8: {
                    return 1;
                }
                case 9: {
                    return 1;
                }
                case 10: {
                    if ((varbitplayer_58404 >= 4)) {
                        return 1;
                    };
                    break;
                }
                case 11: {
                    return 1;
                }
                case 12: {
                    return 1;
                }
                case 13: {
                    return 1;
                }
                case 14: {
                    if ((varbitplayer_58404 >= 2)) {
                        return 1;
                    };
                    break;
                }
                case 15: {
                    if ((QUEST_FINISHED(489 as quest) == false)) {
                        return 1;
                    };
                    break;
                }
                case 16:
                case 17: {
                    if ((varbitplayer_58404 >= 4)) {
                        return 1;
                    };
                    break;
                }
                case 18: {
                    if ((varbitplayer_58404 >= 5)) {
                        return 1;
                    };
                    break;
                }
                case 19: {
                    if ((varbitplayer_58404 >= 3)) {
                        return 1;
                    };
                    break;
                }
                default: {
                    script12478(`League 1 does not specify feature ${inttostring(int0, 10)}`);
                    return 0;
                }
            };
            break;
        }
        case 0: {
            return 0;
        }
        case -1: {
            return 0;
        }
        default: {
            script12478(`League ${inttostring(varplayer_12314, 10)} does not specify feature enabled.`);
            return 0;
        }
    };
    return 0;
}