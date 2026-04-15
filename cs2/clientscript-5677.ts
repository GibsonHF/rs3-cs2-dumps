//
function script5677(int0: component): void {
    var int1 = -1 as stat;
    switch (int0) {
        case 79495205: {
            int1 = 0 as stat;
            break;
        }
        case 79495206: {
            int1 = 2 as stat;
            break;
        }
        case 79495207: {
            int1 = 1 as stat;
            break;
        }
        case 79495208: {
            int1 = 4 as stat;
            break;
        }
        case 79495209: {
            int1 = 5 as stat;
            break;
        }
        case 79495210: {
            int1 = 6 as stat;
            break;
        }
        case 79495211: {
            int1 = 3 as stat;
            break;
        }
        case 79495212: {
            int1 = 16 as stat;
            break;
        }
        case 79495213: {
            int1 = 15 as stat;
            break;
        }
        case 79495214: {
            int1 = 17 as stat;
            break;
        }
        case 79495215: {
            int1 = 12 as stat;
            break;
        }
        case 79495216: {
            int1 = 9 as stat;
            break;
        }
        case 79495217: {
            int1 = 14 as stat;
            break;
        }
        case 79495218: {
            int1 = 13 as stat;
            break;
        }
        case 79495219: {
            int1 = 10 as stat;
            break;
        }
        case 79495220: {
            int1 = 7 as stat;
            break;
        }
        case 79495221: {
            int1 = 11 as stat;
            break;
        }
        case 79495222: {
            int1 = 8 as stat;
            break;
        }
        case 79495223: {
            int1 = 20 as stat;
            break;
        }
        case 79495224: {
            int1 = 18 as stat;
            break;
        }
        case 79495225: {
            int1 = 19 as stat;
            break;
        }
        case 79495226: {
            int1 = 21 as stat;
            break;
        }
        case 79495227: {
            int1 = 22 as stat;
            break;
        }
        case 79495228: {
            int1 = 23 as stat;
            break;
        }
        case 79495229: {
            int1 = 24 as stat;
            break;
        }
        case 79495230: {
            int1 = 25 as stat;
            break;
        }
        case 79495231: {
            int1 = 26 as stat;
            break;
        }
        case 79495232: {
            int1 = 27 as stat;
            break;
        }
        case 79495233: {
            int1 = 28 as stat;
            break;
        }
        case 79495234: {
            int1 = -1 as stat;
            break;
        }
        default: {
            return;
        }
    };
    var string0 = "";
    var int2 = 0;
    var int3 = (varclient_2695 / 10);
    var int4 = enum_getvalue(17, 0, 1482 as cs2enum, int1);
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = script12040(int4);
    if ((int1 != -1 as stat)) {
        string0 = strconcat(enum_getvalue(17, 36, 680 as cs2enum, int1), `: ${inttostring(script11861(int1), 10)}/${inttostring(script11890(int1), 10)}<br>`);
        string0 = strconcat(string0, `Current XP: ${TOSTRING_LOCALISED(STAT_VISIBLE_XP(int1), 1)}<br>`);
        [int5, int6, int7] = script4037(int4);
        if ((script10888(int4) == 0)) {
            if ((int5 == 0)) {
                string0 = strconcat(string0, `Target XP: ${TOSTRING_LOCALISED(int6, 1)}<br>`);
                string0 = strconcat(string0, `Remainder: ${TOSTRING_LOCALISED((int6 - STAT_VISIBLE_XP(int1)), 1)}`);
            } else {
                string0 = strconcat(string0, `XP for target level: ${TOSTRING_LOCALISED(enum_getvalue(0, 0, int8, int6), 1)}<br>`);
                string0 = strconcat(string0, `Remainder: ${TOSTRING_LOCALISED((enum_getvalue(0, 0, int8, int6) - STAT_VISIBLE_XP(int1)), 1)}`);
            };
        } else {
            string0 = strconcat(string0, `Next level: ${TOSTRING_LOCALISED(enum_getvalue(0, 0, int8, (script11889(int1) + 1)), 1)}<br>`);
            string0 = strconcat(string0, `Remainder: ${TOSTRING_LOCALISED((enum_getvalue(0, 0, int8, (script11889(int1) + 1)) - STAT_VISIBLE_XP(int1)), 1)}`);
        };
        switch (int1) {
            case 0: {
                int2 = varplayer_3304;
                break;
            }
            case 2: {
                int2 = varplayer_3305;
                break;
            }
            case 1: {
                int2 = varplayer_3306;
                break;
            }
            case 6: {
                int2 = varplayer_3307;
                break;
            }
            case 4: {
                int2 = varplayer_3308;
                break;
            }
            case 5: {
                int2 = varplayer_2850;
                break;
            }
            case 23: {
                int2 = varplayer_3309;
                break;
            }
            case 14: {
                int2 = varplayer_3310;
                break;
            }
            case 13: {
                int2 = varplayer_3311;
                break;
            }
            case 12: {
                int2 = varplayer_3312;
                break;
            }
            case 8: {
                int2 = varplayer_3313;
                break;
            }
            case 19: {
                int2 = varplayer_3314;
                break;
            }
            case 11: {
                int2 = varplayer_3315;
                break;
            }
            case 10: {
                int2 = varplayer_3316;
                break;
            }
            case 7: {
                int2 = varplayer_3317;
                break;
            }
            case 24: {
                int2 = varplayer_3318;
                break;
            }
            case 18: {
                int2 = varplayer_3319;
                break;
            }
            case 20: {
                int2 = varplayer_3320;
                break;
            }
            case 21: {
                int2 = varplayer_3321;
                break;
            }
            case 17: {
                int2 = varplayer_3322;
                break;
            }
            case 22: {
                int2 = varplayer_3323;
                break;
            }
            case 3: {
                int2 = varplayer_3324;
                break;
            }
            case 16: {
                int2 = varplayer_3325;
                break;
            }
            case 9: {
                int2 = varplayer_3326;
                break;
            }
            case 15: {
                int2 = varplayer_3327;
                break;
            }
            case 25: {
                int2 = varplayer_3836;
                break;
            }
            case 26: {
                int2 = varplayer_6092;
                break;
            }
            case 27: {
                int2 = varplayer_9406;
                break;
            }
            case 28: {
                int2 = varplayer_11202;
                break;
            }
        };
        if ((int2 > 0)) {
            string0 = strconcat(string0, `<br>Bonus XP: <col=00FF00>${TOSTRING_LOCALISED((int2 / 10), 1)}`);
        };
    } else {
        string0 = strconcat("Current XP", `: ${inttostring(int3, 10)}<br>`);
        if ((varclient_2695 < 9000)) {
            string0 = strconcat(string0, `Remainder until adolescent : ${inttostring(((9000 - varclient_2695) / 10), 10)}`);
        } else {
            string0 = strconcat(string0, `Remainder until adult : ${inttostring(((24000 - varclient_2695) / 10), 10)}`);
        };
    };
    script8800(string0, int0, -1);
    return;
}