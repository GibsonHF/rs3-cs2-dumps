//[clientscript,stats_update]
function script548(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: stat, int9: component, int10: component, int11: int): void {
    var int10 = comp(1477, 908);
    if ((varclient_80 == 0)) {
        return;
    };
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var string0 = "";
    var int21 = script12289(int8);
    var int22 = enum_getvalue(17, 0, 10865 as cs2enum, int8);
    var string1 = `${enum_getvalue(17, 36, 680 as cs2enum, int8)}: ${inttostring(STAT(int8), 10)}/${inttostring(STAT_BASE_ACTUAL(int8), 10)}`;
    if ((script11868(int8) == 1)) {
        string1 = `${enum_getvalue(17, 36, 680 as cs2enum, int8)}: ${inttostring(script11863(int8), 10)}/${inttostring(script11862(int8), 10)}`;
    };
    var int23 = 0;
    switch (int8) {
        case 0: {
            int23 = varplayer_3304;
            break;
        }
        case 2: {
            int23 = varplayer_3305;
            break;
        }
        case 1: {
            int23 = varplayer_3306;
            break;
        }
        case 6: {
            int23 = varplayer_3307;
            break;
        }
        case 4: {
            int23 = varplayer_3308;
            break;
        }
        case 5: {
            int23 = varplayer_2850;
            break;
        }
        case 23: {
            int23 = varplayer_3309;
            break;
        }
        case 14: {
            int23 = varplayer_3310;
            break;
        }
        case 13: {
            int23 = varplayer_3311;
            break;
        }
        case 12: {
            int23 = varplayer_3312;
            break;
        }
        case 8: {
            int23 = varplayer_3313;
            break;
        }
        case 19: {
            int23 = varplayer_3314;
            break;
        }
        case 11: {
            int23 = varplayer_3315;
            break;
        }
        case 10: {
            int23 = varplayer_3316;
            break;
        }
        case 7: {
            int23 = varplayer_3317;
            break;
        }
        case 24: {
            int23 = varplayer_3318;
            break;
        }
        case 18: {
            int23 = varplayer_3319;
            break;
        }
        case 20: {
            int23 = varplayer_3320;
            break;
        }
        case 21: {
            int23 = varplayer_3321;
            break;
        }
        case 17: {
            int23 = varplayer_3322;
            break;
        }
        case 22: {
            int23 = varplayer_3323;
            break;
        }
        case 3: {
            int23 = varplayer_3324;
            break;
        }
        case 16: {
            int23 = varplayer_3325;
            break;
        }
        case 9: {
            int23 = varplayer_3326;
            break;
        }
        case 15: {
            int23 = varplayer_3327;
            break;
        }
        case 25: {
            int23 = varplayer_3836;
            break;
        }
        case 26: {
            int23 = varplayer_6092;
            break;
        }
        case 27: {
            int23 = varplayer_9406;
            break;
        }
        case 28: {
            int23 = varplayer_11202;
            break;
        }
    };
    if ((((CC_FIND(int10, int0) == 1) && (PARAWIDTH(string1, 190, 67 as fontmetrics) < CC_GETWIDTH())) && (varclient_80 == script11860(int8)))) {
        CC_SETTEXT(string1);
        if ((CC_FIND(int10, int1) == 1)) {
            CC_SETTEXT(TOSTRING_LOCALISED(STAT_VISIBLE_XP_ACTUAL(int8), 1));
        };
        if (((script11860(int8) < int22) && (CC_FIND(int10, int2) == 1))) {
            CC_SETTEXT(TOSTRING_LOCALISED((enum_getvalue(0, 0, int21, (script11860(int8) + 1)) - STAT_VISIBLE_XP_ACTUAL(int8)), 1));
        };
        if (((int23 > 0) && (CC_FIND(int10, int3) == 1))) {
            CC_SETTEXT(TOSTRING_LOCALISED((int23 / 10), 1));
        };
        if ((script4036(enum_getvalue(17, 0, 1482 as cs2enum, int8)) == 1)) {
            [int14, int12, int13] = script4037(enum_getvalue(17, 0, 1482 as cs2enum, int8));
            int19 = int12;
            if ((int14 == 1)) {
                int19 = enum_getvalue(0, 0, int21, int12);
            };
            int20 = MAX(0, (int19 - STAT_VISIBLE_XP_ACTUAL(int8)));
            string0 = TOSTRING_LOCALISED(int20, 1);
            if ((CC_FIND(int10, int6) == 1)) {
                if ((int14 == 1)) {
                    int17 = enum_getvalue(0, 0, int21, int13);
                    int18 = enum_getvalue(0, 0, int21, int12);
                    if (((int18 - int17) != 0)) {
                        int15 = SCALE((STAT_VISIBLE_XP_ACTUAL(int8) - int17), (int18 - int17), 100);
                    } else {
                        int15 = -1;
                    };
                } else if (((int12 - int13) != 0)) {
                    int15 = SCALE((STAT_VISIBLE_XP_ACTUAL(int8) - int13), (int12 - int13), 100);
                } else {
                    int15 = -1;
                };
                if ((int15 > 100)) {
                    int15 = 100;
                };
                int15 = MAX(int15, 0);
                int16 = (int15 * (int7 - 4));
                int16 = (int16 / 100);
                CC_SETSIZE(int16, 16, 0, 0);
                if ((CC_FIND(int10, int5) == 1)) {
                    if ((int15 > 47)) {
                        CC_SETCOLOUR(0);
                    };
                    CC_SETTEXT(`${inttostring(int15, 10)}%`);
                };
                if ((CC_FIND(int10, int4) == 1)) {
                    CC_SETTEXT(string0);
                };
            };
        };
        return;
    };
    CC_DELETEALL(int10);
    varclient_80 = STAT_BASE_ACTUAL(int8);
    script547(int9, int11, int8, 0);
    return;
}