//
function script5691(int0: number): void {
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    var int4 = 1;
    var int5 = 0;
    var int6 = 0;
    var int7 = 1;
    var int8 = 0;
    CC_DELETEALL(comp(1218, 247));
    CC_DELETEALL(comp(1218, 245));
    var int9 = 0;
    var int10 = STAT_BASE(enum_getvalue(0, 17, 681 as cs2enum, varclient_1753));
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 41;
    int2 = script6346(int0, varclient_1754, int2);
    int9 = int2;
    var int15 = -1 as struct;
    var int16 = -1 as dbrow;
    IF_SETHIDE(true, comp(1218, 242));
    if ((IF_FIND(comp(1218, 246)) == 1)) {
        switch (varclient_1755) {
            case 1: {
                int1 = cc_getparam(2223);
                break;
            }
            case 2: {
                int1 = cc_getparam(2221);
                break;
            }
            case 3: {
                int1 = cc_getparam(2222);
                break;
            }
            default: {
                int1 = cc_getparam(2224);
                break;
            }
        };
    };
    while ((int1 != -1)) {
        if ((CC_FIND(comp(1218, 246), int1) == 1)) {
            int15 = cc_getparam(8877);
            int16 = cc_getparam(6569);
            if (((varclient_1754 <= 0) || (script12100(int15, int16) == varclient_1754))) {
                int3 = script2553(int15, int16);
                if ((varbitplayer_41394 == 1)) {
                    if ((int3 == 1)) {
                        int6 = 0;
                        CC_SETPOSITION(0, 0, 0, 0);
                        CC_SETHIDE(true);
                    } else {
                        int13 = script12098(int15, int16);
                        switch (varclient_1755) {
                            case 1: {
                                if (((int13 >= int12) && (int13 <= int10))) {
                                    int11 = (((int9 + (int14 * int5)) - IF_GETHEIGHT(comp(1218, 255))) + int14);
                                    int12 = int13;
                                };
                                break;
                            }
                            case 2: {
                                break;
                            }
                            case 3: {
                                break;
                            }
                            default: {
                                if (((int13 > int12) && (int13 <= int10))) {
                                    int11 = (int9 + (int14 * int5));
                                    int12 = int13;
                                };
                                break;
                            }
                        };
                        int6 = 36;
                        int4 = 0;
                        CC_CREATE[1](comp(1218, 245), 5, IF_GETNEXTSUBID(comp(1218, 245)));
                        CC_SETSIZE[1](590, int6, 0, 0);
                        CC_SETPOSITION[1](0, (int9 + (int14 * int5)), 0, 0);
                        switch (varbitplayer_22875) {
                            case 1: {
                                if ((int7 == 1)) {
                                    CC_SETGRAPHIC[1](812 as graphic);
                                    if ((int6 != 0)) {
                                        int7 = 0;
                                    };
                                } else {
                                    CC_SETGRAPHIC[1](696 as graphic);
                                    if ((int6 != 0)) {
                                        int7 = 1;
                                    };
                                };
                                break;
                            }
                            case 2: {
                                if ((int7 == 1)) {
                                    CC_SETGRAPHIC[1](6399 as graphic);
                                    if ((int6 != 0)) {
                                        int7 = 0;
                                    };
                                } else {
                                    CC_SETGRAPHIC[1](6398 as graphic);
                                    if ((int6 != 0)) {
                                        int7 = 1;
                                    };
                                };
                                break;
                            }
                            default: {
                                if ((int7 == 1)) {
                                    CC_SETGRAPHIC[1](9309 as graphic);
                                    if ((int6 != 0)) {
                                        int7 = 0;
                                    };
                                } else {
                                    CC_SETGRAPHIC[1](9308 as graphic);
                                    if ((int6 != 0)) {
                                        int7 = 1;
                                    };
                                };
                                break;
                            }
                        };
                        int5 = (int5 + 1);
                        CC_SETPOSITION(5, int2, 0, 0);
                        CC_SETSIZE(590, 36, 0, 0);
                        CC_SETONTIMER(callback(script5692, int1, int2, int15, int16));
                        CC_SETHIDE(false);
                        int2 = (int2 + 41);
                    };
                } else {
                    int13 = script12098(int15, int16);
                    switch (varclient_1755) {
                        case 1: {
                            if (((int13 >= int12) && (int13 <= int10))) {
                                int11 = (((int9 + (int14 * int5)) - IF_GETHEIGHT(comp(1218, 255))) + int14);
                                int12 = int13;
                            };
                            break;
                        }
                        case 2: {
                            break;
                        }
                        case 3: {
                            break;
                        }
                        default: {
                            if (((int13 > int12) && (int13 <= int10))) {
                                int11 = (int9 + (int14 * int5));
                                int12 = int13;
                            };
                            break;
                        }
                    };
                    int6 = 36;
                    int4 = 0;
                    CC_CREATE[1](comp(1218, 245), 5, IF_GETNEXTSUBID(comp(1218, 245)));
                    CC_SETSIZE[1](590, int6, 0, 0);
                    CC_SETPOSITION[1](0, (int9 + (int14 * int5)), 0, 0);
                    switch (varbitplayer_22875) {
                        case 1: {
                            if ((int7 == 1)) {
                                CC_SETGRAPHIC[1](812 as graphic);
                                if ((int6 != 0)) {
                                    int7 = 0;
                                };
                            } else {
                                CC_SETGRAPHIC[1](696 as graphic);
                                if ((int6 != 0)) {
                                    int7 = 1;
                                };
                            };
                            break;
                        }
                        case 2: {
                            if ((int7 == 1)) {
                                CC_SETGRAPHIC[1](6399 as graphic);
                                if ((int6 != 0)) {
                                    int7 = 0;
                                };
                            } else {
                                CC_SETGRAPHIC[1](6398 as graphic);
                                if ((int6 != 0)) {
                                    int7 = 1;
                                };
                            };
                            break;
                        }
                        default: {
                            if ((int7 == 1)) {
                                CC_SETGRAPHIC[1](9309 as graphic);
                                if ((int6 != 0)) {
                                    int7 = 0;
                                };
                            } else {
                                CC_SETGRAPHIC[1](9308 as graphic);
                                if ((int6 != 0)) {
                                    int7 = 1;
                                };
                            };
                            break;
                        }
                    };
                    int5 = (int5 + 1);
                    CC_SETPOSITION(5, int2, 0, 0);
                    CC_SETSIZE(590, 36, 0, 0);
                    CC_SETONTIMER(callback(script5692, int1, int2, int15, int16));
                    CC_SETHIDE(false);
                    int2 = (int2 + 41);
                };
            } else if ((varclient_1754 == 1)) {
                if ((script16271(int15, int16) == 1)) {
                    int3 = script2553(int15, int16);
                    if ((varbitplayer_41394 == 1)) {
                        if ((int3 == 1)) {
                            int6 = 0;
                            CC_SETPOSITION(0, 0, 0, 0);
                            CC_SETHIDE(true);
                        } else {
                            int13 = script12098(int15, int16);
                            switch (varclient_1755) {
                                case 1: {
                                    if (((int13 >= int12) && (int13 <= int10))) {
                                        int11 = (((int9 + (int14 * int5)) - IF_GETHEIGHT(comp(1218, 255))) + int14);
                                        int12 = int13;
                                    };
                                    break;
                                }
                                case 2: {
                                    break;
                                }
                                case 3: {
                                    break;
                                }
                                default: {
                                    if (((int13 > int12) && (int13 <= int10))) {
                                        int11 = (int9 + (int14 * int5));
                                        int12 = int13;
                                    };
                                    break;
                                }
                            };
                            int6 = 36;
                            int4 = 0;
                            CC_CREATE[1](comp(1218, 245), 5, IF_GETNEXTSUBID(comp(1218, 245)));
                            CC_SETSIZE[1](590, int6, 0, 0);
                            CC_SETPOSITION[1](0, (int9 + (int14 * int5)), 0, 0);
                            switch (varbitplayer_22875) {
                                case 1: {
                                    if ((int7 == 1)) {
                                        CC_SETGRAPHIC[1](812 as graphic);
                                        if ((int6 != 0)) {
                                            int7 = 0;
                                        };
                                    } else {
                                        CC_SETGRAPHIC[1](696 as graphic);
                                        if ((int6 != 0)) {
                                            int7 = 1;
                                        };
                                    };
                                    break;
                                }
                                case 2: {
                                    if ((int7 == 1)) {
                                        CC_SETGRAPHIC[1](6399 as graphic);
                                        if ((int6 != 0)) {
                                            int7 = 0;
                                        };
                                    } else {
                                        CC_SETGRAPHIC[1](6398 as graphic);
                                        if ((int6 != 0)) {
                                            int7 = 1;
                                        };
                                    };
                                    break;
                                }
                                default: {
                                    if ((int7 == 1)) {
                                        CC_SETGRAPHIC[1](9309 as graphic);
                                        if ((int6 != 0)) {
                                            int7 = 0;
                                        };
                                    } else {
                                        CC_SETGRAPHIC[1](9308 as graphic);
                                        if ((int6 != 0)) {
                                            int7 = 1;
                                        };
                                    };
                                    break;
                                }
                            };
                            int5 = (int5 + 1);
                            CC_SETPOSITION(5, int2, 0, 0);
                            CC_SETSIZE(590, 36, 0, 0);
                            CC_SETONTIMER(callback(script5692, int1, int2, int15, int16));
                            CC_SETHIDE(false);
                            int2 = (int2 + 41);
                        };
                    } else {
                        int13 = script12098(int15, int16);
                        switch (varclient_1755) {
                            case 1: {
                                if (((int13 >= int12) && (int13 <= int10))) {
                                    int11 = (((int9 + (int14 * int5)) - IF_GETHEIGHT(comp(1218, 255))) + int14);
                                    int12 = int13;
                                };
                                break;
                            }
                            case 2: {
                                break;
                            }
                            case 3: {
                                break;
                            }
                            default: {
                                if (((int13 > int12) && (int13 <= int10))) {
                                    int11 = (int9 + (int14 * int5));
                                    int12 = int13;
                                };
                                break;
                            }
                        };
                        int6 = 36;
                        int4 = 0;
                        CC_CREATE[1](comp(1218, 245), 5, IF_GETNEXTSUBID(comp(1218, 245)));
                        CC_SETSIZE[1](590, int6, 0, 0);
                        CC_SETPOSITION[1](0, (int9 + (int14 * int5)), 0, 0);
                        switch (varbitplayer_22875) {
                            case 1: {
                                if ((int7 == 1)) {
                                    CC_SETGRAPHIC[1](812 as graphic);
                                    if ((int6 != 0)) {
                                        int7 = 0;
                                    };
                                } else {
                                    CC_SETGRAPHIC[1](696 as graphic);
                                    if ((int6 != 0)) {
                                        int7 = 1;
                                    };
                                };
                                break;
                            }
                            case 2: {
                                if ((int7 == 1)) {
                                    CC_SETGRAPHIC[1](6399 as graphic);
                                    if ((int6 != 0)) {
                                        int7 = 0;
                                    };
                                } else {
                                    CC_SETGRAPHIC[1](6398 as graphic);
                                    if ((int6 != 0)) {
                                        int7 = 1;
                                    };
                                };
                                break;
                            }
                            default: {
                                if ((int7 == 1)) {
                                    CC_SETGRAPHIC[1](9309 as graphic);
                                    if ((int6 != 0)) {
                                        int7 = 0;
                                    };
                                } else {
                                    CC_SETGRAPHIC[1](9308 as graphic);
                                    if ((int6 != 0)) {
                                        int7 = 1;
                                    };
                                };
                                break;
                            }
                        };
                        int5 = (int5 + 1);
                        CC_SETPOSITION(5, int2, 0, 0);
                        CC_SETSIZE(590, 36, 0, 0);
                        CC_SETONTIMER(callback(script5692, int1, int2, int15, int16));
                        CC_SETHIDE(false);
                        int2 = (int2 + 41);
                    };
                } else {
                    CC_SETHIDE(true);
                };
            } else {
                CC_SETHIDE(true);
            };
            switch (varclient_1755) {
                case 1: {
                    int1 = cc_getparam(2223);
                    break;
                }
                case 2: {
                    int1 = cc_getparam(2221);
                    break;
                }
                case 3: {
                    int1 = cc_getparam(2222);
                    break;
                }
                default: {
                    int1 = cc_getparam(2224);
                    break;
                }
            };
        } else {
            int1 = -1;
        };
    };
    if ((varclient_1753 == 27)) {
        if ((varbitplayer_41394 == 1)) {
            IF_SETTEXT("Invention is a members only skill", comp(1218, 243));
            IF_SETHIDE(false, comp(1218, 243));
        } else if ((int4 == 1)) {
            if ((varbitplayer_41394 == 1)) {
                IF_SETTEXT("No results found", comp(1218, 243));
                IF_SETHIDE(false, comp(1218, 243));
            } else {
                IF_SETHIDE(true, comp(1218, 243));
            };
        } else {
            IF_SETHIDE(true, comp(1218, 243));
        };
    } else if ((int4 == 1)) {
        if ((varbitplayer_41394 == 1)) {
            IF_SETTEXT("No results found", comp(1218, 243));
            IF_SETHIDE(false, comp(1218, 243));
        } else {
            IF_SETHIDE(true, comp(1218, 243));
        };
    } else {
        IF_SETHIDE(true, comp(1218, 243));
    };
    if ((int2 < IF_GETHEIGHT(comp(1218, 255)))) {
        IF_SETSCROLLSIZE(0, 0, comp(1218, 244));
    } else {
        IF_SETSCROLLSIZE(0, int2, comp(1218, 244));
    };
    IF_SETSCROLLPOS(0, (int11 - 5), comp(1218, 244));
    IF_SETSIZE(590, int2, 0, 0, comp(1218, 246));
    IF_SETSIZE(590, int2, 0, 0, comp(1218, 247));
    script31(79823103, 79823092, 5666, 5663, 5664, 5665, 5686, 5685);
    return;
}