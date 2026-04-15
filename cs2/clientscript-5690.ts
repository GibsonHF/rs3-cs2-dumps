//
function script5690(): void {
    if ((varclient_1753 <= 0)) {
        if ((varbitplayer_3264 > 0)) {
            varclient_1753 = varbitplayer_3264;
        } else {
            varclient_1753 = 8;
        };
    };
    IF_SETHIDE(false, comp(1218, 262));
    CC_DELETEALL(comp(1218, 246));
    CC_DELETEALL(comp(1218, 247));
    CC_DELETEALL(comp(1218, 245));
    var int0 = 0;
    var int1 = 0;
    var string0 = "";
    var int2 = -1;
    var int3 = 0;
    var int4 = 0;
    var int5 = enum_getvalue(0, 26, 5420 as cs2enum, varclient_1753);
    var int6 = ENUM_GETOUTPUTCOUNT(int5);
    define_array((int6 + 1));
    var int7 = 0;
    var int8 = 1;
    switch (varclient_1753) {
        case 1: {
            int8 = varclient_1469;
            break;
        }
        case 2: {
            int8 = varclient_1470;
            break;
        }
        case 5: {
            int8 = varclient_1471;
            break;
        }
        case 3: {
            int8 = varclient_1472;
            break;
        }
        case 7: {
            int8 = varclient_1473;
            break;
        }
        case 4: {
            int8 = varclient_1474;
            break;
        }
        case 6: {
            int8 = varclient_1475;
            break;
        }
        case 8: {
            int8 = varclient_1476;
            break;
        }
        case 9: {
            int8 = varclient_1477;
            break;
        }
        case 10: {
            int8 = varclient_1478;
            break;
        }
        case 11: {
            int8 = varclient_1479;
            break;
        }
        case 19: {
            int8 = varclient_1480;
            break;
        }
        case 13: {
            int8 = varclient_1481;
            break;
        }
        case 14: {
            int8 = varclient_1482;
            break;
        }
        case 15: {
            int8 = varclient_1483;
            break;
        }
        case 16: {
            int8 = varclient_1484;
            break;
        }
        case 17: {
            int8 = varclient_1485;
            break;
        }
        case 18: {
            int8 = varclient_1486;
            break;
        }
        case 12: {
            int8 = varclient_1487;
            break;
        }
        case 20: {
            int8 = varclient_1488;
            break;
        }
        case 21: {
            int8 = varclient_1489;
            break;
        }
        case 22: {
            int8 = varclient_1490;
            break;
        }
        case 23: {
            int8 = varclient_1491;
            break;
        }
        case 24: {
            int8 = varclient_1492;
            break;
        }
        case 25: {
            int8 = varclient_1493;
            break;
        }
        case 26: {
            int8 = varclient_3715;
            break;
        }
        case 27: {
            int8 = varclient_5125;
            break;
        }
        case 28: {
            int8 = varclient_6783;
            break;
        }
        case 29: {
            int8 = varclient_7292;
            break;
        }
    };
    script5712(varclient_1753);
    var int9 = STAT_BASE(enum_getvalue(0, 17, 681 as cs2enum, varclient_1753));
    var int10 = -1 as struct;
    var int11 = 0;
    var int12 = 0;
    var int13 = -1 as obj;
    var int14 = false;
    var int15 = 0;
    var int16 = enum_getvalue(0, 17, 681 as cs2enum, varclient_1753);
    var int17 = -1 as quest;
    var int18 = 0;
    var int19 = 36;
    var int20 = 0;
    var int21 = -1 as graphic;
    var int22 = script3981();
    if ((int9 > int8)) {
        while ((int1 <= int22)) {
            int17 = enum_getvalue(0, 3, 2252 as cs2enum, int1);
            if ((int17 != -1 as quest)) {
                int15 = (int15 + 1);
                [string0, int0] = script8584(int16, int8, int17);
                if ((int0 == 1)) {
                    if ((quest_getparam(int17, 7829) == -1 as graphic)) {
                        int21 = 2270 as graphic;
                    } else {
                        int21 = script2107(int17);
                    };
                    int3 = script8790(int3, string0, int21);
                };
            };
            int1 = (int1 + 1);
        };
        int1 = 0;
        while ((int7 < int6)) {
            int10 = enum_getvalue(0, 73, int5, int7);
            int11 = script12097(int10);
            int12 = script12098(int10);
            int14 = script2553(int10);
            int13 = struct_getparam(int10, 2213);
            if ((((((int13 != -1 as obj) && (item_getparam(int13, 2640) > 0)) && (item_getparam(int13, 2640) != 62)) && (item_getparam(int13, 2641) == 0)) && (item_getparam(int13, 2640) == varclient_1753))) {
                int12 = item_getparam(int13, 2645);
                if ((((((item_getparam(int13, 2639) == true) || (OC_MEMBERS(item_getparam(int13, 2655)) == 1)) || (OC_MEMBERS(item_getparam(int13, 2656)) == 1)) || (OC_MEMBERS(item_getparam(int13, 2650)) == 1)) || (OC_MEMBERS(int13) == 1))) {
                    int14 = true;
                };
            };
            if (((int12 > int8) && (int12 <= int9))) {
                CC_CREATE(comp(1218, 246), 5, IF_GETNEXTSUBID(comp(1218, 246)));
                int19 = 36;
                CC_SETSIZE(590, int19, 0, 0);
                CC_SETPOSITION(0, 0, 0, 0);
                CC_SETONCLICK(callback(script5697, -2147483643, int10));
                CC_SETONTIMER(callback(script5692, -2147483643, int3, int10));
                if ((int14 == 1)) {
                    CC_SETGRAPHIC(9310 as graphic);
                };
                CC_CREATE(comp(1218, 245), 5, IF_GETNEXTSUBID(comp(1218, 245)));
                CC_SETSIZE(590, int19, 0, 0);
                CC_SETPOSITION(0, int3, 0, 0);
                int3 = (int3 + 41);
                switch (varbitplayer_22875) {
                    case 1: {
                        if ((int18 == 1)) {
                            CC_SETGRAPHIC(812 as graphic);
                            int18 = 0;
                        } else {
                            CC_SETGRAPHIC(696 as graphic);
                            int18 = 1;
                        };
                        break;
                    }
                    case 2: {
                        if ((int18 == 1)) {
                            CC_SETGRAPHIC(6399 as graphic);
                            int18 = 0;
                        } else {
                            CC_SETGRAPHIC(6398 as graphic);
                            int18 = 1;
                        };
                        break;
                    }
                    default: {
                        if ((int18 == 1)) {
                            CC_SETGRAPHIC(9309 as graphic);
                            int18 = 0;
                        } else {
                            CC_SETGRAPHIC(9308 as graphic);
                            int18 = 1;
                        };
                        break;
                    }
                };
            };
            int7 = (int7 + 1);
        };
        if ((int3 > 0)) {
            IF_SETHIDE(true, comp(1218, 262));
            IF_SETHIDE(true, comp(1218, 256));
            IF_SETHIDE(true, comp(1218, 259));
            IF_SETHIDE(false, comp(1218, 240));
            IF_SETHIDE(true, comp(1218, 242));
            if ((int3 < IF_GETHEIGHT(comp(1218, 255)))) {
                IF_SETSCROLLSIZE(0, 0, comp(1218, 244));
            } else {
                IF_SETSCROLLSIZE(0, int3, comp(1218, 244));
            };
            IF_SETSCROLLPOS(0, 0, comp(1218, 244));
            IF_SETSIZE(590, int3, 0, 0, comp(1218, 246));
            IF_SETSIZE(590, int3, 0, 0, comp(1218, 247));
            script7791(comp(1218, 255), comp(1218, 244));
            return;
        };
    };
    IF_SETHIDE(false, comp(1218, 255));
    int7 = 0;
    int3 = script6346(varclient_1753, varclient_1754, int3);
    IF_SETHIDE(true, comp(1218, 240));
    while ((int7 < int6)) {
        CC_CREATE(comp(1218, 246), 5, int7);
        int10 = enum_getvalue(0, 73, int5, int7);
        int14 = script2553(int10);
        int13 = struct_getparam(int10, 2213);
        if ((((((int13 != -1 as obj) && (item_getparam(int13, 2640) > 0)) && (item_getparam(int13, 2640) != 62)) && (item_getparam(int13, 2641) == 0)) && (item_getparam(int13, 2640) == varclient_1753))) {
            int12 = item_getparam(int13, 2645);
            if ((((((item_getparam(int13, 2639) == true) || (OC_MEMBERS(item_getparam(int13, 2655)) == 1)) || (OC_MEMBERS(item_getparam(int13, 2656)) == 1)) || (OC_MEMBERS(item_getparam(int13, 2650)) == 1)) || (OC_MEMBERS(int13) == 1))) {
                int14 = true;
            };
        };
        if (((varbitplayer_41394 == 1) && (int14 == true))) {
            int19 = 0;
            int20 = (int20 + 1);
        } else {
            int19 = 36;
        };
        CC_SETSIZE(590, int19, 0, 0);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETONCLICK(callback(script5697, -2147483643, int10));
        if ((int14 == 1)) {
            CC_SETGRAPHIC(9310 as graphic);
        };
        CC_CREATE(comp(1218, 245), 5, IF_GETNEXTSUBID(comp(1218, 245)));
        CC_SETSIZE(590, int19, 0, 0);
        CC_SETPOSITION(0, (41 * (int7 - int20)), 0, 0);
        switch (varbitplayer_22875) {
            case 1: {
                if ((int18 == 1)) {
                    CC_SETGRAPHIC(812 as graphic);
                    if ((int19 != 0)) {
                        int18 = 0;
                    };
                } else {
                    CC_SETGRAPHIC(696 as graphic);
                    if ((int19 != 0)) {
                        int18 = 1;
                    };
                };
                break;
            }
            case 2: {
                if ((int18 == 1)) {
                    CC_SETGRAPHIC(6399 as graphic);
                    if ((int19 != 0)) {
                        int18 = 0;
                    };
                } else {
                    CC_SETGRAPHIC(6398 as graphic);
                    if ((int19 != 0)) {
                        int18 = 1;
                    };
                };
                break;
            }
            default: {
                if ((int18 == 1)) {
                    CC_SETGRAPHIC(9309 as graphic);
                    if ((int19 != 0)) {
                        int18 = 0;
                    };
                } else {
                    CC_SETGRAPHIC(9308 as graphic);
                    if ((int19 != 0)) {
                        int18 = 1;
                    };
                };
                break;
            }
        };
        pop_array(int7, int7);
        int7 = (int7 + 1);
    };
    varclient_1754 = script12842(varclient_1753);
    pop_array(int6, -1);
    script5698(0, 0, (int6 - 1), int5);
    int7 = 0;
    IF_SETPARAM_INT(2221, push_array(int7), comp(1218, 246));
    IF_SETPARAM_INT(2222, push_array((int6 - 1)), comp(1218, 246));
    while ((int7 < int6)) {
        if ((CC_FIND(comp(1218, 246), push_array(int7)) == 1)) {
            CC_SETPARAM_INT(2221, push_array((int7 + 1)));
            if ((int7 > 0)) {
                CC_SETPARAM_INT(2222, push_array((int7 - 1)));
            };
        };
        int7 = (int7 + 1);
    };
    int7 = 0;
    script5699(0, 0, (int6 - 1), int5);
    IF_SETPARAM_INT(2223, push_array(int7), comp(1218, 246));
    IF_SETPARAM_INT(2224, push_array((int6 - 1)), comp(1218, 246));
    while ((int7 < int6)) {
        if ((CC_FIND(comp(1218, 246), push_array(int7)) == 1)) {
            CC_SETPARAM_INT(2223, push_array((int7 + 1)));
            if ((int7 > 0)) {
                CC_SETPARAM_INT(2224, push_array((int7 - 1)));
            };
        };
        int7 = (int7 + 1);
    };
    IF_SETSCROLLPOS(0, 0, comp(1218, 244));
    script5691(varclient_1753);
    return;
}