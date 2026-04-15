//
function script9202(): string {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 1;
    var int11 = 0;
    while ((int10 <= ENUM_GETOUTPUTCOUNT(681 as cs2enum))) {
        switch (enum_getvalue(0, 17, 681 as cs2enum, int10)) {
            case 0: {
                int11 = varplayer_3304;
                break;
            }
            case 2: {
                int11 = varplayer_3305;
                break;
            }
            case 1: {
                int11 = varplayer_3306;
                break;
            }
            case 6: {
                int11 = varplayer_3307;
                break;
            }
            case 4: {
                int11 = varplayer_3308;
                break;
            }
            case 5: {
                int11 = varplayer_2850;
                break;
            }
            case 23: {
                int11 = varplayer_3309;
                break;
            }
            case 14: {
                int11 = varplayer_3310;
                break;
            }
            case 13: {
                int11 = varplayer_3311;
                break;
            }
            case 12: {
                int11 = varplayer_3312;
                break;
            }
            case 8: {
                int11 = varplayer_3313;
                break;
            }
            case 19: {
                int11 = varplayer_3314;
                break;
            }
            case 11: {
                int11 = varplayer_3315;
                break;
            }
            case 10: {
                int11 = varplayer_3316;
                break;
            }
            case 7: {
                int11 = varplayer_3317;
                break;
            }
            case 24: {
                int11 = varplayer_3318;
                break;
            }
            case 18: {
                int11 = varplayer_3319;
                break;
            }
            case 20: {
                int11 = varplayer_3320;
                break;
            }
            case 21: {
                int11 = varplayer_3321;
                break;
            }
            case 17: {
                int11 = varplayer_3322;
                break;
            }
            case 22: {
                int11 = varplayer_3323;
                break;
            }
            case 3: {
                int11 = varplayer_3324;
                break;
            }
            case 16: {
                int11 = varplayer_3325;
                break;
            }
            case 9: {
                int11 = varplayer_3326;
                break;
            }
            case 15: {
                int11 = varplayer_3327;
                break;
            }
            case 25: {
                int11 = varplayer_3836;
                break;
            }
            case 26: {
                int11 = varplayer_6092;
                break;
            }
            case 27: {
                int11 = varplayer_9406;
                break;
            }
            case 28: {
                int11 = varplayer_11202;
                break;
            }
        };
        int11 = (int11 / 10);
        [int0, int1, int2, int3, int4, int5, int6, int7, int8, int9] = script5865(int11, int0, int1, int2, int3, int4, int5, int6, int7, int8, int9);
        int10 = (int10 + 1);
    };
    var string0 = inttostring(int0, 10);
    var string1 = SUBSTRING(inttostring(int1, 10), 0, 1);
    var string2 = SUBSTRING(inttostring(int2, 10), 0, 1);
    var string3 = SUBSTRING(inttostring(int3, 10), 0, 1);
    var string4 = SUBSTRING(inttostring(int4, 10), 0, 1);
    var string5 = SUBSTRING(inttostring(int5, 10), 0, 1);
    var string6 = SUBSTRING(inttostring(int6, 10), 0, 1);
    var string7 = SUBSTRING(inttostring(int7, 10), 0, 1);
    var string8 = SUBSTRING(inttostring(int8, 10), 0, 1);
    var string9 = SUBSTRING(inttostring(int9, 10), 0, 1);
    var int12 = 10;
    if ((int9 == 0)) {
        string9 = "";
        int12 = (int12 - 1);
        if ((int8 == 0)) {
            string8 = "";
            int12 = (int12 - 1);
            if ((int7 == 0)) {
                string7 = "";
                int12 = (int12 - 1);
                if ((int6 == 0)) {
                    string6 = "";
                    int12 = (int12 - 1);
                    if ((int5 == 0)) {
                        string5 = "";
                        int12 = (int12 - 1);
                        if ((int4 == 0)) {
                            string4 = "";
                            int12 = (int12 - 1);
                            if ((int3 == 0)) {
                                string3 = "";
                                int12 = (int12 - 1);
                                if ((int2 == 0)) {
                                    string2 = "";
                                    int12 = (int12 - 1);
                                    if ((int1 == 0)) {
                                        string1 = "";
                                        int12 = (int12 - 1);
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    var string10 = "";
    if ((int12 > 3)) {
        string10 = script8001();
    };
    var string11 = "";
    if ((int12 > 6)) {
        string11 = script8001();
    };
    var string12 = "";
    if ((int12 > 9)) {
        string12 = script8001();
    };
    var string13 = `${string9}${string12}${string8}${string7}${string6}${string11}${string5}${string4}${string3}${string10}${string2}${string1}${string0}`;
    return string13;
}