//
function script3337(int0: int, int1: int): void {
    var int2 = 0;
    switch (int0) {
        case 1: {
            int2 = varclient_1469;
            break;
        }
        case 2: {
            int2 = varclient_1470;
            break;
        }
        case 5: {
            int2 = varclient_1471;
            break;
        }
        case 3: {
            int2 = varclient_1472;
            break;
        }
        case 7: {
            int2 = varclient_1473;
            break;
        }
        case 4: {
            int2 = varclient_1474;
            break;
        }
        case 6: {
            int2 = varclient_1475;
            break;
        }
        case 8: {
            int2 = varclient_1476;
            break;
        }
        case 9: {
            int2 = varclient_1477;
            break;
        }
        case 10: {
            int2 = varclient_1478;
            break;
        }
        case 11: {
            int2 = varclient_1479;
            break;
        }
        case 19: {
            int2 = varclient_1480;
            break;
        }
        case 13: {
            int2 = varclient_1481;
            break;
        }
        case 14: {
            int2 = varclient_1482;
            break;
        }
        case 15: {
            int2 = varclient_1483;
            break;
        }
        case 16: {
            int2 = varclient_1484;
            break;
        }
        case 17: {
            int2 = varclient_1485;
            break;
        }
        case 18: {
            int2 = varclient_1486;
            break;
        }
        case 12: {
            int2 = varclient_1487;
            break;
        }
        case 20: {
            int2 = varclient_1488;
            break;
        }
        case 21: {
            int2 = varclient_1489;
            break;
        }
        case 22: {
            int2 = varclient_1490;
            break;
        }
        case 23: {
            int2 = varclient_1491;
            break;
        }
        case 24: {
            int2 = varclient_1492;
            break;
        }
        case 25: {
            int2 = varclient_1493;
            break;
        }
        case 26: {
            int2 = varclient_3715;
            break;
        }
        case 27: {
            int2 = varclient_5125;
            break;
        }
        case 28: {
            int2 = varclient_6783;
            break;
        }
        case 29: {
            int2 = varclient_7292;
            break;
        }
        default: {
            return;
        }
    };
    var int3 = enum_getvalue(0, 17, 681 as cs2enum, int0);
    var int4 = STAT_BASE(int3);
    var int5 = enum_getvalue(0, 26, 5420 as cs2enum, int0);
    var int6 = ENUM_GETOUTPUTCOUNT(int5);
    var int7 = enum_getvalue(0, 17, 681 as cs2enum, int0);
    int7 = enum_getvalue(17, 17, 744 as cs2enum, int7);
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = -1;
    var int13 = 0;
    var int14 = 0;
    var string0 = "";
    var int15 = -1 as obj;
    var int16 = -1 as struct;
    var string1 = "";
    var int17 = false;
    var string2 = "";
    var int1 = (int1 / 5);
    if (((int4 > int2) && (int4 <= 120))) {
        string2 = script16836(int2, int3);
        if ((STRING_LENGTH(string2) > 0)) {
            script3367(string2, int11, int1);
            int11 = (int11 + 1);
        };
        switch (int0) {
            case 1:
            case 2:
            case 5:
            case 3:
            case 7:
            case 4:
            case 6:
            case 24:
            case 29: {
                if ((varbitplayer_3294 == 1)) {
                    varbitplayer_3294 = 0;
                    script3367("Increased Combat level!", int11, int1);
                    int11 = (int11 + 1);
                };
                break;
            }
        };
        if (((int0 == 7) || (int0 == 6))) {
            if ((int0 == 7)) {
                script3367("More prayer points!", int11, int1);
            } else {
                script3367("More lifepoints!", int11, int1);
            };
            int11 = (int11 + 1);
        };
        while (((int10 < int6) && (int11 < 5))) {
            int16 = enum_getvalue(0, 73, int5, int10);
            int8 = script12097(int16);
            int9 = script12098(int16);
            int15 = struct_getparam(int16, 2213);
            string1 = script12095(int16);
            int17 = script2553(int16);
            if ((((((int15 != -1 as obj) && (item_getparam(int15, 2640) > 0)) && (item_getparam(int15, 2640) != 62)) && (item_getparam(int15, 2641) == 0)) && ((item_getparam(int15, 2640) == int8) || (int8 == -1)))) {
                int9 = item_getparam(int15, 2645);
                string1 = OC_NAME(int15);
                if ((((((item_getparam(int15, 2639) == true) || (OC_MEMBERS(item_getparam(int15, 2655)) == 1)) || (OC_MEMBERS(item_getparam(int15, 2656)) == 1)) || (OC_MEMBERS(item_getparam(int15, 2650)) == 1)) || (OC_MEMBERS(int15) == 1))) {
                    int17 = true;
                };
            };
            if (((int9 == int4) && (struct_getparam(enum_getvalue(0, 73, int5, int10), 2219) == true))) {
                CC_CREATE(comp(1216, 6), 4, IF_GETNEXTSUBID(comp(1216, 6)));
                CC_SETPOSITION(0, 25, 1, 2);
                int14 = (STRINGWIDTH(string1, 23 as fontmetrics) + STRINGWIDTH("New", 23 as fontmetrics));
                if ((int17 == false)) {
                    int7 = 0 as stat;
                } else {
                    int7 = -1 as stat;
                };
                CC_SETSIZE(0, 33, 1, 0);
                CC_SETONTIMER(callback(script3368, -2147483643, string1, (CLIENTCLOCK() + (int11 * int1))));
                int13 = CC_GETX();
                CC_CREATE(79691782, 5, IF_GETNEXTSUBID(79691782));
                CC_SETPOSITION(0, 24, 1, 2);
                CC_SETSIZE(int14, 33, 0, 0);
                CC_SETTILING(1);
                if ((int7 == -1)) {
                    int12 = 27186;
                } else {
                    int12 = 27167;
                };
                CC_SETONTIMER(callback(script4226, -2147483643, int12, (CLIENTCLOCK() + (int11 * int1))));
                CC_SENDTOBACK();
                int13 = CC_GETX();
                int14 = CC_GETWIDTH();
                CC_CREATE(79691782, 5, IF_GETNEXTSUBID(79691782));
                CC_SETPOSITION((int13 - 50), 24, 0, 2);
                CC_SETSIZE(50, 33, 0, 0);
                if ((int7 == -1)) {
                    int12 = 27185;
                } else {
                    int12 = 27166;
                };
                CC_SETONTIMER(callback(script4226, -2147483643, int12, (CLIENTCLOCK() + (int11 * int1))));
                CC_SENDTOBACK();
                CC_CREATE(79691782, 5, IF_GETNEXTSUBID(79691782));
                CC_SETPOSITION((int13 + int14), 24, 0, 2);
                CC_SETSIZE(50, 33, 0, 0);
                if ((int7 == -1)) {
                    int12 = 27187;
                } else {
                    int12 = 27168;
                };
                CC_SETONTIMER(callback(script4226, -2147483643, int12, (CLIENTCLOCK() + (int11 * int1))));
                CC_SENDTOBACK();
                CC_CREATE(79691777, 6, IF_GETNEXTSUBID(79691777));
                CC_SETMODEL(32144);
                CC_SETSIZE(32, 32, 0, 0);
                CC_SETMODELANIM(15754);
                CC_SETMODELANGLE(0, 0, 512, 0, 0, (1500 + RANDOM(1000)));
                int14 = ((STRINGWIDTH(script12095(enum_getvalue(0, 73, int5, int10)), 23) / 2) + 20);
                if ((RANDOM(2) == 0)) {
                    CC_SETPOSITION(int14, 120, 1, 0);
                } else {
                    CC_SETPOSITION((int14 * -1), 120, 1, 0);
                };
                CC_SETONTIMER(callback(script3369, -2147483643, (CLIENTCLOCK() + (int11 * int1)), 0));
                int11 = (int11 + 1);
            };
            int10 = (int10 + 1);
        };
    };
    return;
}