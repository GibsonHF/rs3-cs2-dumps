//
function script13776(int0: obj, int1: component, int2: component, int3: int): int {
    var int4 = 16;
    var int5 = 1;
    var int6 = 0;
    var int7 = IF_GETHEIGHT(int1);
    var int8 = 32;
    var int9 = IF_GETWIDTH(int1);
    var int10 = -1 as obj;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = int3;
    if (((int3 > 0) && (CC_FIND(int2, (int3 - 1)) == 1))) {
        int6 = ((CC_GETY() + CC_GETHEIGHT()) + (16 / 4));
    };
    if ((item_getparam(int0, 6835) == 1)) {
        int12 = (((script10021(INV_GETVAR(varclient_5121, varclient_5122, 33777)) + script10021(INV_GETVAR(varclient_5121, varclient_5122, 33778))) + script10021(INV_GETVAR(varclient_5121, varclient_5122, 33779))) + script10021(INV_GETVAR(varclient_5121, varclient_5122, 21605)));
        if ((int12 > 0)) {
            CC_CREATE(int2, 5, int3++);
            CC_SETSIZE(36, 32, 0, 0);
            CC_SETPOSITION((0 - ((int12 - 1) * 20)), int6, int5, 0);
            CC_SETOBJECT_ALWAYSNUM(enum_getvalue(0, 33, 11885 as cs2enum, INV_GETVAR(varclient_5121, varclient_5122, 33774)), INV_GETVAR(varclient_5121, varclient_5122, 33777));
            CC_CREATE(int2, 5, int3++);
            CC_SETSIZE(36, 32, 0, 0);
            CC_SETPOSITION((40 - ((int12 - 1) * 20)), int6, int5, 0);
            CC_SETOBJECT_ALWAYSNUM(enum_getvalue(0, 33, 11885 as cs2enum, INV_GETVAR(varclient_5121, varclient_5122, 33775)), INV_GETVAR(varclient_5121, varclient_5122, 33778));
            CC_CREATE(int2, 5, int3++);
            CC_SETSIZE(36, 32, 0, 0);
            CC_SETPOSITION((80 - ((int12 - 1) * 20)), int6, int5, 0);
            CC_SETOBJECT_ALWAYSNUM(enum_getvalue(0, 33, 11885 as cs2enum, INV_GETVAR(varclient_5121, varclient_5122, 33776)), INV_GETVAR(varclient_5121, varclient_5122, 33779));
            CC_CREATE(int2, 5, int3++);
            CC_SETSIZE(36, 32, 0, 0);
            CC_SETPOSITION((120 - ((int12 - 1) * 20)), int6, int5, 0);
            CC_SETOBJECT_ALWAYSNUM(enum_getvalue(0, 33, 11885 as cs2enum, INV_GETVAR(varclient_5121, varclient_5122, 21604)), INV_GETVAR(varclient_5121, varclient_5122, 21605));
        };
    };
    if ((script4034(int0) == 1)) {
        var int0 = 20767 as obj;
    };
    if (((item_getparam(int0, 6295) == 1) || (item_getparam(int0, 7393) == 1))) {
        [int14, int13] = script470(int0, 1);
        [int15, int13] = script470(int0, 2);
        if ((item_getparam(int0, 6295) == 1)) {
            [int16, int13] = script470(int0, 3);
        };
        if ((int15 == 0)) {
            int15 = int16;
            int16 = 0;
        };
        if ((int14 == 0)) {
            int14 = int15;
            int15 = int16;
            int16 = 0;
        };
        int12 = ((script10021(int14) + script10021(int15)) + script10021(int16));
        if ((int14 != 0)) {
            CC_CREATE(int2, 5, int3++);
            CC_SETSIZE(25, 25, 0, 0);
            CC_SETPOSITION((0 - ((int12 - 1) * 20)), int6, 1, 0);
            if ((int14 != 31)) {
                CC_SETGRAPHIC(enum_getvalue(0, 23, 371 as cs2enum, int14));
            } else {
                CC_SETGRAPHIC(32075 as graphic);
            };
            int8 = 25;
        };
        if ((int15 != 0)) {
            CC_CREATE(int2, 5, int3++);
            CC_SETSIZE(25, 25, 0, 0);
            CC_SETPOSITION((40 - ((int12 - 1) * 20)), int6, 1, 0);
            if ((int15 != 31)) {
                CC_SETGRAPHIC(enum_getvalue(0, 23, 371 as cs2enum, int15));
            } else {
                CC_SETGRAPHIC(32075 as graphic);
            };
        };
        if ((int16 != 0)) {
            CC_CREATE(int2, 5, int3++);
            CC_SETSIZE(25, 25, 0, 0);
            CC_SETPOSITION((80 - ((int12 - 1) * 20)), int6, 1, 0);
            if ((int16 != 31)) {
                CC_SETGRAPHIC(enum_getvalue(0, 23, 371 as cs2enum, int16));
            } else {
                CC_SETGRAPHIC(32075 as graphic);
            };
        };
        int9 = MAX(int9, (int12 * (25 + 20)));
    } else {
        switch (int0) {
            case 18338: {
                int4 = -55;
                int9 = MAX(190, int9);
                [int12, int17, int18, int19] = script4743(INV_GETVAR(varclient_5121, varclient_5122, 2154));
                CC_CREATE(int2, 5, int3++);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION(int4, int6, int5, 0);
                CC_SETOBJECT_ALWAYSNUM(1623 as obj, int12);
                CC_CREATE(int2, 5, int3++);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION((int4 + 40), int6, int5, 0);
                CC_SETOBJECT_ALWAYSNUM(1621 as obj, int17);
                CC_CREATE(int2, 5, int3++);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION((int4 + 80), int6, int5, 0);
                CC_SETOBJECT_ALWAYSNUM(1619 as obj, int18);
                CC_CREATE(int2, 5, int3++);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION((int4 + 120), int6, int5, 0);
                CC_SETOBJECT_ALWAYSNUM(1617 as obj, int19);
                int12 = 4;
                break;
            }
            case 31455: {
                int4 = -75;
                int9 = MAX(220, int9);
                CC_CREATE(int2, 5, int3++);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION(int4, int6, int5, 0);
                CC_SETOBJECT_ALWAYSNUM(1623 as obj, varbitplayer_22581);
                CC_CREATE(int2, 5, int3++);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION((int4 + 40), int6, int5, 0);
                CC_SETOBJECT_ALWAYSNUM(1621 as obj, varbitplayer_22582);
                CC_CREATE(int2, 5, int3++);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION((int4 + 80), int6, int5, 0);
                CC_SETOBJECT_ALWAYSNUM(1619 as obj, varbitplayer_22583);
                CC_CREATE(int2, 5, int3++);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION((int4 + 120), int6, int5, 0);
                CC_SETOBJECT_ALWAYSNUM(1617 as obj, varbitplayer_22584);
                CC_CREATE(int2, 5, int3++);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION((int4 + 160), int6, int5, 0);
                CC_SETOBJECT_ALWAYSNUM(1631 as obj, varbitplayer_22585);
                int12 = 5;
                break;
            }
            case 50805: {
                int4 = -75;
                int9 = MAX(220, int9);
                CC_CREATE(int2, 5, int3++);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION(int4, int6, int5, 0);
                CC_SETOBJECT_ALWAYSNUM(1623 as obj, varbitplayer_48172);
                CC_CREATE(int2, 5, int3++);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION((int4 + 40), int6, int5, 0);
                CC_SETOBJECT_ALWAYSNUM(1621 as obj, varbitplayer_48173);
                CC_CREATE(int2, 5, int3++);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION((int4 + 80), int6, int5, 0);
                CC_SETOBJECT_ALWAYSNUM(1619 as obj, varbitplayer_48174);
                CC_CREATE(int2, 5, int3++);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION((int4 + 120), int6, int5, 0);
                CC_SETOBJECT_ALWAYSNUM(1617 as obj, varbitplayer_48175);
                CC_CREATE(int2, 5, int3++);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION((int4 + 160), int6, int5, 0);
                CC_SETOBJECT_ALWAYSNUM(1631 as obj, varbitplayer_48176);
                int12 = 5;
                break;
            }
            case 38934: {
                int9 = MAX(260, int9);
                int4 = -95;
                CC_CREATE(int2, 5, int3++);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION(int4, int6, int5, 0);
                CC_SETOBJECT_ALWAYSNUM(30139 as obj, varbitplayer_44598);
                CC_CREATE(int2, 5, int3++);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION((int4 + 40), int6, int5, 0);
                CC_SETOBJECT_ALWAYSNUM(30140 as obj, varbitplayer_44599);
                CC_CREATE(int2, 5, int3++);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION((int4 + 80), int6, int5, 0);
                CC_SETOBJECT_ALWAYSNUM(30141 as obj, varbitplayer_44600);
                CC_CREATE(int2, 5, int3++);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION((int4 + 120), int6, int5, 0);
                CC_SETOBJECT_ALWAYSNUM(30142 as obj, varbitplayer_44601);
                CC_CREATE(int2, 5, int3++);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION((int4 + 160), int6, int5, 0);
                CC_SETOBJECT_ALWAYSNUM(30143 as obj, varbitplayer_44602);
                CC_CREATE(int2, 5, int3++);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION((int4 + 200), int6, int5, 0);
                CC_SETOBJECT_ALWAYSNUM(30144 as obj, varbitplayer_44603);
                int12 = 6;
                break;
            }
            case 47836: {
                int21 = ENUM_GETOUTPUTCOUNT(15320 as cs2enum);
                while ((int20 < int21)) {
                    int10 = enum_getvalue(0, 33, 15320 as cs2enum, int20);
                    int12 = script7361(int10);
                    CC_CREATE(int2, 5, int3++);
                    CC_SETSIZE(36, 32, 0, 0);
                    CC_SETOBJECT_ALWAYSNUM(int10, int12);
                    int20 = (int20 + 1);
                };
                int20 = 0;
                int12 = (int3 - int23);
                while ((int23 < int3)) {
                    if ((CC_FIND(int2, int23++) == 1)) {
                        script7229(5, int12, int6, int20);
                        if ((MODULO(int20, 5) == 4)) {
                            int12 = ABS(--int12);
                        };
                        int20 = (int20 + 1);
                    };
                };
                if ((int20 > 0)) {
                    int8 = (35 + (35 * ((int20 - 1) / 5)));
                    int9 = MAX(int9, ((36 * MIN(5, int20)) + 20));
                };
                int12 = (int12 + 1);
                break;
            }
            case 48056: {
                if ((script6666() == 1)) {
                    int21 = ENUM_GETOUTPUTCOUNT(15289 as cs2enum);
                    while ((int20 < int21)) {
                        int10 = enum_getvalue(0, 33, 15289 as cs2enum, int20);
                        int12 = script6646(int10);
                        if ((int12 > 0)) {
                            CC_CREATE(int2, 5, int3++);
                            CC_SETSIZE(36, 32, 0, 0);
                            CC_SETOBJECT_ALWAYSNUM(int10, int12);
                        };
                        int20 = (int20 + 1);
                    };
                    int20 = 0;
                    int12 = (int3 - int23);
                    while ((int23 < int3)) {
                        if ((CC_FIND(int2, int23++) == 1)) {
                            script7229(5, int12, int6, int20);
                            if ((MODULO(int20, 5) == 4)) {
                                int12 = ABS(--int12);
                            };
                            int20 = (int20 + 1);
                        };
                    };
                    if ((int20 > 0)) {
                        int8 = (35 + (35 * ((int20 - 1) / 5)));
                        int9 = MAX(int9, ((36 * MIN(5, int20)) + 20));
                    };
                    int12 = (int12 + 1);
                };
                break;
            }
            case 49538: {
                int21 = ENUM_GETOUTPUTCOUNT(14069 as cs2enum);
                int22 = 0;
                int20 = -1;
                while ((++int20 < int21)) {
                    int10 = enum_getvalue(0, 33, 14069 as cs2enum, int20);
                    int12 = script14695(int10);
                    if ((int12 > 0)) {
                        CC_CREATE(int2, 5, int3++);
                        CC_SETSIZE(36, 32, 0, 0);
                        CC_SETOBJECT_ALWAYSNUM(int10, int12);
                        int22 = (int22 + 1);
                    };
                };
                if ((int22 > 0)) {
                    int20 = 0;
                    int9 = MAX(int9, (MIN(6, int22) * 36));
                    int8 = (32 * (1 + ((int22 - 1) / 6)));
                    while ((int23 < int3)) {
                        if ((CC_FIND(int2, int23++) == 1)) {
                            script7229(6, (int22 - (6 * (int20 / int22))), int6, int20);
                            int20 = (int20 + 1);
                        };
                    };
                    int12 = int22;
                };
                break;
            }
            case 51022: {
                int21 = ENUM_GETOUTPUTCOUNT(16107 as cs2enum);
                int22 = 0;
                int20 = -1;
                while ((++int20 < int21)) {
                    int10 = enum_getvalue(0, 33, 16107 as cs2enum, int20);
                    int12 = INV_TOTAL(895 as inv, int10);
                    if ((int12 > 0)) {
                        CC_CREATE(int2, 5, int3++);
                        CC_SETSIZE(36, 32, 0, 0);
                        CC_SETOBJECT_ALWAYSNUM(int10, int12);
                        int22 = (int22 + 1);
                    };
                };
                if ((int22 > 0)) {
                    int20 = 0;
                    int9 = MAX(int9, ((MIN(6, int22) * 36) + 16));
                    int8 = (32 * (1 + ((int22 - 1) / 6)));
                    while ((int23 < int3)) {
                        if ((CC_FIND(int2, int23++) == 1)) {
                            script7229(6, (int22 - (6 * (int20 / int22))), int6, int20);
                            int20 = (int20 + 1);
                        };
                    };
                    int12 = int22;
                };
                break;
            }
            case 52824: {
                int21 = ENUM_GETOUTPUTCOUNT(8487 as cs2enum);
                int22 = 0;
                int20 = -1;
                int12 = 1;
                while ((++int20 < int21)) {
                    int10 = enum_getvalue(0, 33, 8487 as cs2enum, int20);
                    if ((script16377(int10) == 1)) {
                        CC_CREATE(int2, 5, int3++);
                        CC_SETSIZE(36, 32, 0, 0);
                        CC_SETOBJECT(int10, -1);
                        int22 = (int22 + 1);
                    };
                };
                if ((int22 > 0)) {
                    int20 = 0;
                    int9 = MAX(int9, ((MIN(6, int22) * 36) + 16));
                    int8 = (32 * (1 + ((int22 - 1) / 6)));
                    while ((int23 < int3)) {
                        if ((CC_FIND(int2, int23++) == 1)) {
                            script7229(6, (int22 - (6 * (int20 / int22))), int6, int20);
                            int20 = (int20 + 1);
                        };
                    };
                    int12 = int22;
                };
                break;
            }
            default: {
                switch (OC_CATEGORY(int0)) {
                    case 4222: {
                        switch (int0) {
                            case 5509: {
                                int11 = varbitplayer_16502;
                                int12 = varbitplayer_16497;
                                break;
                            }
                            case 5510:
                            case 5511: {
                                int11 = varbitplayer_16503;
                                int12 = varbitplayer_16498;
                                break;
                            }
                            case 5512:
                            case 5513: {
                                int11 = varbitplayer_16504;
                                int12 = varbitplayer_16499;
                                break;
                            }
                            case 5514:
                            case 5515: {
                                int11 = varbitplayer_16505;
                                int12 = varbitplayer_16500;
                                break;
                            }
                            case 24205: {
                                int11 = MIN(INV_GETVAR(varclient_5121, varclient_5122, 53289), 3);
                                int12 = INV_GETVAR(varclient_5121, varclient_5122, 16521);
                                break;
                            }
                            case 58451: {
                                int11 = varbitplayer_57686;
                                int12 = varbitplayer_57685;
                                break;
                            }
                        };
                        if ((int12 > 0)) {
                            switch (int11) {
                                case 1: {
                                    int10 = 1436 as obj;
                                    break;
                                }
                                case 0:
                                case 2: {
                                    int10 = 7936 as obj;
                                    break;
                                }
                                case 3: {
                                    int10 = 55667 as obj;
                                    break;
                                }
                            };
                            CC_CREATE(int2, 5, int3++);
                            CC_SETSIZE(36, 32, 0, 0);
                            CC_SETPOSITION(0, int6, 1, 0);
                            CC_SETOBJECT_ALWAYSNUM(int10, int12);
                        };
                        break;
                    }
                    case 3542: {
                        int12 = varbitplayer_27718;
                        if ((int12 > 0)) {
                            var int3 = script13777(int2, int3, int4, int6, 31613 as obj, int12);
                        };
                        break;
                    }
                    case 4210: {
                        int12 = INV_GETVAR(varclient_5121, varclient_5122, 25454);
                        if ((int12 > 0)) {
                            int3 = script13777(int2, int3, int4, int6, 32341 as obj, int12);
                        };
                        break;
                    }
                    case 3847: {
                        int12 = INV_GETVAR(varclient_5121, varclient_5122, 31193);
                        if ((int12 > 0)) {
                            int3 = script13777(int2, int3, int4, int6, 37227 as obj, int12);
                        };
                        break;
                    }
                    case 4448: {
                        if ((script2532() == 1)) {
                            int21 = ENUM_GETOUTPUTCOUNT(17159 as cs2enum);
                            while ((int20 < int21)) {
                                int10 = enum_getvalue(0, 33, 17159 as cs2enum, int20);
                                int12 = script18309(int10);
                                if (((int12 > 0) && (script2535(int0, int10) == 1))) {
                                    CC_CREATE(int2, 5, int3++);
                                    CC_SETSIZE(36, 32, 0, 0);
                                    CC_SETOBJECT_ALWAYSNUM(int10, int12);
                                };
                                int20 = (int20 + 1);
                            };
                            int20 = 0;
                            int12 = (int3 - int23);
                            while ((int23 < int3)) {
                                if ((CC_FIND(int2, int23++) == 1)) {
                                    switch (MODULO(MIN(int12, 4), 4)) {
                                        case 1: {
                                            CC_SETPOSITION(0, (int6 + (35 * (int20 / 4))), 1, 0);
                                            break;
                                        }
                                        case 2: {
                                            switch (MODULO(int20, 4)) {
                                                case 0: {
                                                    CC_SETPOSITION(((0 - 36) / 2), (int6 + (35 * (int20 / 4))), 1, 0);
                                                    break;
                                                }
                                                case 1: {
                                                    CC_SETPOSITION((36 / 2), (int6 + (35 * (int20 / 4))), 1, 0);
                                                    break;
                                                }
                                            };
                                            break;
                                        }
                                        case 3: {
                                            switch (MODULO(int20, 4)) {
                                                case 0: {
                                                    CC_SETPOSITION((0 - 36), (int6 + (35 * (int20 / 4))), 1, 0);
                                                    break;
                                                }
                                                case 1: {
                                                    CC_SETPOSITION(0, (int6 + (35 * (int20 / 4))), 1, 0);
                                                    break;
                                                }
                                                case 2: {
                                                    CC_SETPOSITION(36, (int6 + (35 * (int20 / 4))), 1, 0);
                                                    break;
                                                }
                                            };
                                            break;
                                        }
                                        case 0: {
                                            switch (MODULO(int20, 4)) {
                                                case 0: {
                                                    CC_SETPOSITION(SCALE((0 - 36), 2, 3), (int6 + (35 * (int20 / 4))), 1, 0);
                                                    break;
                                                }
                                                case 1: {
                                                    CC_SETPOSITION(((0 - 36) / 2), (int6 + (35 * (int20 / 4))), 1, 0);
                                                    break;
                                                }
                                                case 2: {
                                                    CC_SETPOSITION((36 / 2), (int6 + (35 * (int20 / 4))), 1, 0);
                                                    break;
                                                }
                                                case 3: {
                                                    CC_SETPOSITION(SCALE(36, 2, 3), (int6 + (35 * (int20 / 4))), 1, 0);
                                                    break;
                                                }
                                            };
                                            break;
                                        }
                                    };
                                    if ((MODULO(int20, 4) == 3)) {
                                        int12 = ABS(--int12);
                                    };
                                    int20 = (int20 + 1);
                                };
                            };
                            if ((int20 > 0)) {
                                int8 = (35 + (35 * ((int20 - 1) / 4)));
                                int9 = MAX(int9, ((36 * MIN(4, int20)) + 20));
                            };
                            int12 = (int12 + 1);
                        };
                        break;
                    }
                    case 3168: {
                        int12 = INV_GETVAR(varclient_5121, varclient_5122, 21711);
                        if ((int12 > 0)) {
                            int3 = script13777(int2, int3, int4, int6, 30915 as obj, int12);
                        };
                        break;
                    }
                    case 4699: {
                        int21 = ENUM_GETOUTPUTCOUNT(15971 as cs2enum);
                        int22 = 0;
                        int20 = -1;
                        while ((++int20 < int21)) {
                            int10 = enum_getvalue(0, 33, 15971 as cs2enum, int20);
                            if ((int0 == 59637 as obj)) {
                                if (((OC_CATEGORY(int10) != 4707 as category) && (item_getparam(int10, 9304) == true))) {
                                    int12 = 2147483647;
                                } else {
                                    int12 = 0;
                                };
                            } else {
                                int12 = INV_TOTAL(891 as inv, int10);
                            };
                            if ((int12 > 0)) {
                                CC_CREATE(int2, 5, int3++);
                                CC_SETSIZE(36, 32, 0, 0);
                                CC_SETOBJECT_ALWAYSNUM(int10, int12);
                                int22 = (int22 + 1);
                            };
                        };
                        if ((int22 > 0)) {
                            int20 = 0;
                            int9 = MAX(int9, (MIN(5, int22) * 36));
                            int8 = (32 * (1 + ((int22 - 1) / 5)));
                            while ((int23 < int3)) {
                                if ((CC_FIND(int2, int23++) == 1)) {
                                    script7229(5, (int22 - (5 * (int20 / int22))), int6, int20);
                                    int20 = (int20 + 1);
                                };
                            };
                            int12 = int22;
                        };
                        break;
                    }
                    case 4359: {
                        if ((INV_GETVAR(varclient_5121, varclient_5122, 48837) == 1)) {
                            int6 = (int6 - (16 / 4));
                            int8 = 16;
                            CC_CREATE(int2, 5, int3++);
                            CC_SETSIZE(16, int8, 0, 0);
                            CC_SETPOSITION(0, int6, 1, 0);
                            CC_SETGRAPHIC(15217 as graphic);
                            int12 = 1;
                        };
                        break;
                    }
                    case 5297: {
                        [int12, int9, int8, int3] = script18330(937 as inv, int9, int8, int2, int3, int23, int6);
                        break;
                    }
                    case 5368: {
                        int21 = ENUM_GETOUTPUTCOUNT(17223 as cs2enum);
                        int22 = 0;
                        int20 = -1;
                        while ((++int20 < int21)) {
                            int10 = enum_getvalue(0, 33, 17223 as cs2enum, int20);
                            int12 = INV_TOTAL(953 as inv, int10);
                            if ((int12 > 0)) {
                                CC_CREATE(int2, 5, int3++);
                                CC_SETSIZE(36, 32, 0, 0);
                                CC_SETOBJECT_ALWAYSNUM(int10, int12);
                                int22 = (int22 + 1);
                            };
                        };
                        if ((int22 > 0)) {
                            int20 = 0;
                            int9 = MAX(int9, (MIN(5, int22) * 36));
                            int8 = 32;
                            while ((int23 < int3)) {
                                if ((CC_FIND(int2, int23++) == 1)) {
                                    script7229(5, (int22 - (5 * (int20 / int22))), int6, int20);
                                    int20 = (int20 + 1);
                                };
                            };
                            int12 = int22;
                        };
                        break;
                    }
                    case 5631: {
                        [int12, int9, int8, int3] = script18330(974 as inv, int9, int8, int2, int3, int23, int6);
                        break;
                    }
                };
                break;
            }
        };
    };
    var int24 = 0;
    if ((int2 == comp(1477, 887))) {
        int24 = (10 + (16 / 4));
    };
    if ((int12 > 0)) {
        IF_SETSIZE(int9, ((int6 + int8) + int24), 0, 0, int1);
    };
    return int3;
}