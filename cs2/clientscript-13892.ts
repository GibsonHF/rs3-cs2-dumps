//
function script13892(): void {
    var int0 = -1;
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(7717 as cs2enum);
    var int3 = 0;
    var int4 = 0;
    var int5 = -1 as struct;
    var int6 = -1 as struct;
    var int7 = comp(-1, 65535);
    var int8 = 0;
    var int9 = false;
    if (((varclient_3692 == 1) || (varclient_3693 == 1))) {
        int8 = 1;
    };
    varbitclient_19930 = 191;
    script8411(1002, 0);
    IF_SETHIDE(false, comp(276, 16));
    var int10 = IF_GETHEIGHT(comp(276, 16));
    IF_SETSIZE(50, int10, 0, 1, struct_getparam(38884 as struct, 3503));
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    [int14, int15, int16, int17] = WINDOW_GETINSETS();
    while ((int1 < int2)) {
        int0 = enum_getvalue(0, 0, 7717 as cs2enum, int1);
        int5 = script10405(int0);
        if ((int5 != -1 as struct)) {
            int7 = struct_getparam(int5, 3503);
            if (((int7 != comp(-1, 65535)) && (IF_FIND(int7) == 1))) {
                if (((enum_getreversecount(0, 13330 as cs2enum, int0) <= 0) && ((int8 == 0) || (script9932(int0) == 0)))) {
                    int6 = enum_getvalue(0, 73, 7712 as cs2enum, int0);
                    if ((int6 != -1 as struct)) {
                        CC_SETSIZE(struct_getparam(int6, 3484), struct_getparam(int6, 3485), 0, 0);
                    };
                    int9 = false;
                    switch (int0) {
                        case 1042: {
                            script14159();
                            break;
                        }
                        case 1043: {
                            if ((varplayer_7879 != 1)) {
                                int9 = true;
                            };
                            break;
                        }
                        case 1044: {
                            script13901();
                            break;
                        }
                        case 1048: {
                            CC_SETSIZE(65, 410, 0, 0);
                            CC_SETPOSITION(((50 + 250) - 4), int10, 2, 0);
                            int9 = true;
                            break;
                        }
                        case 1009: {
                            CC_SETSIZE((((script11319() + 1) * 6) + 10), (((script11319() + 1) * 1) + 10), 0, 0);
                            CC_SETPOSITION((0 - (6 + (CC_GETWIDTH() / 2))), (IF_GETY(comp(1923, 5)) - (CC_GETHEIGHT() + 4)), 1, 0);
                            break;
                        }
                        case 1038: {
                            CC_SETSIZE((((script11319() + 1) * 6) + 10), (((script11319() + 1) * 1) + 10), 0, 0);
                            CC_SETPOSITION((((CC_GETWIDTH() / 2) + 1) - 6), (IF_GETY(comp(1923, 5)) - (CC_GETHEIGHT() + 4)), 1, 0);
                            break;
                        }
                        case 1006: {
                            script14156();
                            break;
                        }
                        case 1004: {
                            CC_SETSIZE(0, 0, 0, 0);
                            CC_SETPOSITION(0, 0, 2, 0);
                            script13869();
                            break;
                        }
                        case 1014: {
                            CC_SETPOSITION(((70 + 5) + struct_getparam(script10405(32), 3499)), (5 + 100), 0, 0);
                            break;
                        }
                        case 1010: {
                            CC_SETPOSITION(250, 0, 0, 0);
                            break;
                        }
                        case 1021: {
                            CC_SETPOSITION(390, 40, 2, 0);
                            break;
                        }
                        case 1050: {
                            CC_SETPOSITION(350, 0, 2, 0);
                            break;
                        }
                        case 1030: {
                            CC_SETPOSITION(((50 + 250) + 10), 0, 2, 0);
                            break;
                        }
                        case 1000: {
                            CC_SETSIZE(0, 0, 1, 1);
                            CC_SETPOSITION(0, 0, 1, 1);
                            break;
                        }
                        case 1005: {
                            CC_SETPOSITION(0, (5 + (82 + 100)), 0, 0);
                            int9 = script10229();
                            break;
                        }
                        case 1017: {
                            CC_SETSIZE(0, 0, 1, 1);
                            CC_SETPOSITION(0, 0, 1, 1);
                            break;
                        }
                        case 1013:
                        case 1007:
                        case 1023: {
                            CC_SETPOSITION(0, 0, 1, 1);
                            break;
                        }
                        case 1047: {
                            CC_SETSIZE(960, 540, 0, 0);
                            break;
                        }
                        case 1001: {
                            CC_SETSIZE(800, 480, 0, 0);
                            CC_SETPOSITION(0, 0, 1, 1);
                            break;
                        }
                        case 1037: {
                            CC_SETPOSITION(0, 150, 0, 0);
                            CC_SETSIZE(116, 75, 0, 0);
                            break;
                        }
                        case 1008: {
                            CC_SETSIZE(250, 410, 0, 0);
                            CC_SETPOSITION(50, int10, 2, 0);
                            if ((IF_HASSUB(script8073()) == 0)) {
                                int9 = true;
                            };
                            break;
                        }
                        case 1028: {
                            CC_SETPOSITION((int14 + 5), ((int15 + 82) + 5), 0, 0);
                            CC_SETSIZE(300, 251, 0, 0);
                            break;
                        }
                        case 1024: {
                            CC_SETPOSITION(1, 1, 0, 0);
                            break;
                        }
                        case 1002: {
                            CC_SETSIZE(50, int10, 0, 1);
                            CC_SETPOSITION(0, 0, 2, 2);
                            break;
                        }
                        case 1012: {
                            CC_SETPOSITION(0, 0, 0, 1);
                            break;
                        }
                        case 1026: {
                            CC_SETPOSITION(0, 0, 1, 0);
                            break;
                        }
                        case 1018:
                        case 1039: {
                            CC_SETPOSITION(0, 96, 1, 0);
                            break;
                        }
                        case 1029: {
                            CC_SETPOSITION((50 + 250), 0, 2, 0);
                            break;
                        }
                        case 1052: {
                            CC_SETPOSITION(0, 0, 1, 1);
                            break;
                        }
                        case 2008: {
                            CC_SETSIZE(CC_GETWIDTH(), 100, 0, 0);
                            CC_SETPOSITION(0, (185 + 100), 0, 0);
                            break;
                        }
                        case 1041: {
                            CC_SETPOSITION(0, 0, 1, 1);
                            CC_SETSIZE(0, 0, 1, 1);
                            break;
                        }
                        case 32: {
                            CC_SETPOSITION(0, 185, 0, 0);
                            script15870();
                            if (((varbitclient_44897 == 1) || (IF_GETHIDE(comp(276, 27)) == false))) {
                                int9 = true;
                            };
                            script10162();
                            script10228();
                            break;
                        }
                        case 1036: {
                            CC_SETPOSITION(((8 + IF_GETX(comp(279, 21))) + IF_GETWIDTH(comp(279, 21))), IF_GETY(comp(279, 21)), 0, 0);
                            break;
                        }
                        case 1051: {
                            CC_SETPOSITION(((70 + IF_GETX(comp(279, 10))) + IF_GETWIDTH(comp(279, 10))), 0, 0, 0);
                            break;
                        }
                        case 18: {
                            if ((IF_GETHIDE(comp(276, 27)) == true)) {
                                CC_SETPOSITION(0, 82, 0, 0);
                                CC_SETSIZE(300, 100, 0, 0);
                            } else {
                                CC_SETPOSITION(script3365(comp(857, 28)), script3366(comp(857, 28)), 0, 0);
                                CC_SETSIZE(IF_GETWIDTH(comp(857, 28)), IF_GETHEIGHT(comp(857, 28)), 0, 0);
                            };
                            script15844(0);
                            switch (script14238(-1)) {
                                case -1: {
                                    if ((varbitclient_41275 == 0)) {
                                        script6060(IF_GETTRANS(comp(137, 2)));
                                    } else {
                                        script9292();
                                    };
                                    break;
                                }
                                case 0: {
                                    int9 = true;
                                    break;
                                }
                            };
                            break;
                        }
                        case 9:
                        case 14:
                        case 15:
                        case 16:
                        case 27:
                        case 45: {
                            CC_SETPOSITION(53, 49, 0, 0);
                            CC_SETSIZE(285, 110, 0, 1);
                            if ((script14238(int0) == 1)) {
                                CC_SENDTOFRONT();
                                int9 = false;
                            } else {
                                int9 = true;
                            };
                            break;
                        }
                        case 1025: {
                            CC_SETPOSITION(((IF_GETX(comp(276, 15)) + IF_GETWIDTH(comp(276, 15))) + 5), 0, 0, 0);
                            CC_SETSIZE(50, 20, 0, 0);
                            break;
                        }
                        default: {
                            if ((script20451(int5) != 3)) {
                                [int3, int4] = script8724(1, int0);
                                CC_SETSIZE(int3, int4, 0, 0);
                            };
                            if ((struct_getparam(int5, 3534) != -1)) {
                                if (((IF_GETHEIGHT(comp(1477, 60)) - int10) < 410)) {
                                    CC_SETSIZE(250, int10, 0, 1);
                                    CC_SETPOSITION(50, int10, 2, 0);
                                } else {
                                    CC_SETSIZE(250, 410, 0, 0);
                                    CC_SETPOSITION(50, int10, 2, 0);
                                };
                                int9 = true;
                            };
                            break;
                        }
                    };
                    CC_SETHIDE(int9);
                    if ((struct_getparam(int5, 3521) == true)) {
                        if ((script16577(int0) == 0)) {
                            script8361(int0);
                        } else {
                            script8350(14, int0, 0);
                        };
                    };
                    if ((struct_getparam(int5, 3533) == true)) {
                        script8393(int0, 0);
                    };
                    IF_SETONRESIZE(callback(script9933, int0, -2147483645), int7);
                    IF_CALLONRESIZE(int7);
                } else {
                    CC_SETHIDE(true);
                };
            };
            switch (int0) {
                case 9:
                case 14:
                case 15:
                case 16:
                case 27:
                case 45: {
                    int7 = struct_getparam(int5, 3504);
                    int13 = (IF_GETNEXTSUBID(int7) - 1);
                    while ((int13 >= 0)) {
                        if ((CC_FIND(int7, int13) == 1)) {
                            CC_SETCOLOUR(script693(13, 46, 61));
                            CC_SETTRANS(128);
                        };
                        int13 = (int13 - 1);
                    };
                    break;
                }
            };
        };
        int1 = (int1 + 1);
    };
    if (((varbitclient_49616 == 0) && (script2384(0, 1) < 0))) {
        script1159();
    };
    if (((varbitclient_38843 > 0) && (int8 == 0))) {
        script8311((varbitclient_38843 - 1));
        script2638();
    };
    if ((IF_HASSUB(comp(1448, 3)) == 0)) {
        script8290(0);
    } else {
        script8288(varbitplayer_18994);
    };
    script13893(int8);
    IF_SETHIDE(true, comp(1477, 882));
    script8144();
    return;
}