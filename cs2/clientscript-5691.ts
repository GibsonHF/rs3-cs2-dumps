//
function script5691(int0: int): void {
    var int1 = enum_getvalue(0, 26, 5420 as cs2enum, int0);
    var int2 = -1;
    var int3 = 0;
    var int4 = false;
    var int5 = 1;
    var int6 = 0;
    var int7 = 0;
    var int8 = 1;
    var int9 = 0;
    CC_DELETEALL(comp(1218, 247));
    CC_DELETEALL(comp(1218, 245));
    var int10 = 0;
    var int11 = STAT_BASE(enum_getvalue(0, 17, 681 as cs2enum, varclient_1753));
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 41;
    int3 = script6346(int0, varclient_1754, int3);
    int10 = int3;
    var int16 = -1 as struct;
    IF_SETHIDE(true, comp(1218, 242));
    if ((IF_FIND(comp(1218, 246)) == 1)) {
        switch (varclient_1755) {
            case 1: {
                int2 = cc_getparam(2223);
                break;
            }
            case 2: {
                int2 = cc_getparam(2221);
                break;
            }
            case 3: {
                int2 = cc_getparam(2222);
                break;
            }
            default: {
                int2 = cc_getparam(2224);
                break;
            }
        };
    };
    while ((int2 != -1)) {
        if ((CC_FIND(comp(1218, 246), int2) == 1)) {
            int16 = enum_getvalue(0, 73, int1, int2);
            if ((((varclient_1754 <= 0) || (script12100(int16) == varclient_1754)) || ((varclient_1754 == 1) && (struct_getparam(int16, 2218) == true)))) {
                int4 = script2553(int16);
                if (((varbitplayer_41394 == 1) && (int4 == true))) {
                    int7 = 0;
                    CC_SETPOSITION(0, 0, 0, 0);
                    CC_SETONTIMER(callback(script5692, int2, int3, int16));
                    CC_SETHIDE(0);
                } else {
                    int14 = script12098(int16);
                    switch (varclient_1755) {
                        case 1: {
                            if (((int14 >= int13) && (int14 <= int11))) {
                                int12 = (((int10 + (int15 * int6)) - IF_GETHEIGHT(comp(1218, 255))) + int15);
                                int13 = int14;
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
                            if (((int14 > int13) && (int14 <= int11))) {
                                int12 = (int10 + (int15 * int6));
                                int13 = int14;
                            };
                            break;
                        }
                    };
                    int7 = 36;
                    int5 = 0;
                    CC_CREATE[1](comp(1218, 245), 5, IF_GETNEXTSUBID(comp(1218, 245)));
                    CC_SETSIZE[1](590, int7, 0, 0);
                    CC_SETPOSITION[1](0, (int10 + (int15 * int6)), 0, 0);
                    switch (varbitplayer_22875) {
                        case 1: {
                            if ((int8 == 1)) {
                                CC_SETGRAPHIC[1](812 as graphic);
                                if ((int7 != 0)) {
                                    int8 = 0;
                                };
                            } else {
                                CC_SETGRAPHIC[1](696 as graphic);
                                if ((int7 != 0)) {
                                    int8 = 1;
                                };
                            };
                            break;
                        }
                        case 2: {
                            if ((int8 == 1)) {
                                CC_SETGRAPHIC[1](6399 as graphic);
                                if ((int7 != 0)) {
                                    int8 = 0;
                                };
                            } else {
                                CC_SETGRAPHIC[1](6398 as graphic);
                                if ((int7 != 0)) {
                                    int8 = 1;
                                };
                            };
                            break;
                        }
                        default: {
                            if ((int8 == 1)) {
                                CC_SETGRAPHIC[1](9309 as graphic);
                                if ((int7 != 0)) {
                                    int8 = 0;
                                };
                            } else {
                                CC_SETGRAPHIC[1](9308 as graphic);
                                if ((int7 != 0)) {
                                    int8 = 1;
                                };
                            };
                            break;
                        }
                    };
                    int6 = (int6 + 1);
                    CC_SETPOSITION(5, int3, 0, 0);
                    CC_SETONTIMER(callback(script5692, int2, int3, int16));
                    CC_SETHIDE(0);
                    int3 = (int3 + 41);
                };
            } else {
                CC_SETHIDE(true);
            };
            switch (varclient_1755) {
                case 1: {
                    int2 = cc_getparam(2223);
                    break;
                }
                case 2: {
                    int2 = cc_getparam(2221);
                    break;
                }
                case 3: {
                    int2 = cc_getparam(2222);
                    break;
                }
                default: {
                    int2 = cc_getparam(2224);
                    break;
                }
            };
        } else {
            int2 = -1;
        };
    };
    if (((varclient_1753 == 27) && (varbitplayer_41394 == 1))) {
        IF_SETTEXT("Invention is a members only skill", comp(1218, 243));
        IF_SETHIDE(false, comp(1218, 243));
    } else if (((int5 == 1) && (varbitplayer_41394 == 1))) {
        IF_SETTEXT("No results found", comp(1218, 243));
        IF_SETHIDE(false, comp(1218, 243));
    } else {
        IF_SETHIDE(true, comp(1218, 243));
    };
    if ((int3 < IF_GETHEIGHT(comp(1218, 255)))) {
        IF_SETSCROLLSIZE(0, 0, comp(1218, 244));
    } else {
        IF_SETSCROLLSIZE(0, int3, comp(1218, 244));
    };
    IF_SETSCROLLPOS(0, (int12 - 5), comp(1218, 244));
    IF_SETSIZE(590, int3, 0, 0, comp(1218, 246));
    IF_SETSIZE(590, int3, 0, 0, comp(1218, 247));
    script31(comp(1218, 255), comp(1218, 244), 5666 as graphic, 5663 as graphic, 5664 as graphic, 5665 as graphic, 5686 as graphic, 5685 as graphic);
    return;
}