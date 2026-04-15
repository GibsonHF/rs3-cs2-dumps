//
function script6392(int0: int, int1: obj, int2: int, int3: obj, int4: int, int5: obj, int6: int, int7: obj, int8: int, int9: obj, int10: int, int11: obj, int12: int, int13: obj, int14: int, int15: obj, int16: int, int17: obj, int18: int, int19: obj, int20: int, int21: obj, int22: int, int23: obj, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string, string8: string, string9: string, string10: string, string11: string, string12: string, string13: string, string14: string): string {
    var string15 = "";
    var int24 = 1;
    var int25 = -1 as obj;
    var int26 = 0;
    var string16 = "";
    var string17 = "";
    var string18 = "";
    while ((int24 <= 12)) {
        switch (int24) {
            case 1: {
                int26 = int0;
                int25 = int1;
                string16 = string0;
                break;
            }
            case 2: {
                int26 = int2;
                int25 = int3;
                string16 = string1;
                break;
            }
            case 3: {
                int26 = int4;
                int25 = int5;
                string16 = string2;
                break;
            }
            case 4: {
                int26 = int6;
                int25 = int7;
                string16 = string3;
                break;
            }
            case 5: {
                int26 = int8;
                int25 = int9;
                string16 = string4;
                break;
            }
            case 6: {
                int26 = int10;
                int25 = int11;
                string16 = string5;
                break;
            }
            case 7: {
                int26 = int12;
                int25 = int13;
                string16 = string6;
                break;
            }
            case 8: {
                int26 = int14;
                int25 = int15;
                string16 = string7;
                break;
            }
            case 9: {
                int26 = int16;
                int25 = int17;
                string16 = string8;
                break;
            }
            case 10: {
                int26 = int18;
                int25 = int19;
                string16 = string9;
                break;
            }
            case 11: {
                int26 = int20;
                int25 = int21;
                string16 = string10;
                break;
            }
            case 12: {
                int26 = int22;
                int25 = int23;
                string16 = string11;
                break;
            }
        };
        if ((int25 != -1 as obj)) {
            if ((STRING_LENGTH(string15) > 0)) {
                string15 = strconcat(string15, string14);
            };
            if ((int26 > 1)) {
                string15 = strconcat(string15, `${TOSTRING_LOCALISED(int26, 1)} x `);
            };
            string15 = strconcat(string15, OC_NAME(int25));
            if ((((OC_CATEGORY(int25) == 3196 as category) || (OC_CATEGORY(int25) == 87 as category)) || (OC_CATEGORY(int25) == 3142 as category))) {
                if ((item_getparam(int25, 886) == 1)) {
                    string15 = strconcat(string15, " (");
                    string17 = script6388(int25);
                    string18 = script6389(int25, "");
                    switch (MAP_LANG()) {
                        case 3: {
                            if ((STRING_LENGTH(string17) == 0)) {
                                string15 = strconcat(string15, TOSTRING_LOCALISED((item_getparam(int25, 58) / 10), 1));
                                string15 = strconcat(string15, " ");
                                string15 = strconcat(string15, "XP");
                                if ((STRING_LENGTH(string18) > 0)) {
                                    string15 = strconcat(string15, " ");
                                    string15 = strconcat(string15, string18);
                                };
                            } else {
                                string15 = strconcat(string15, "XP");
                                if ((STRING_LENGTH(string18) > 0)) {
                                    string15 = strconcat(string15, " ");
                                    string15 = strconcat(string15, string18);
                                };
                                string15 = strconcat(string15, " ");
                                string15 = strconcat(string15, string17);
                            };
                            break;
                        }
                        case 2: {
                            if ((STRING_LENGTH(string17) == 0)) {
                                string15 = strconcat(string15, TOSTRING_LOCALISED((item_getparam(int25, 58) / 10), 1));
                                if ((STRING_LENGTH(string18) > 0)) {
                                    string15 = strconcat(string15, " ");
                                    string15 = strconcat(string15, "XP in");
                                    if ((STRING_LENGTH(string18) > 0)) {
                                        string15 = strconcat(string15, " ");
                                        string15 = strconcat(string15, string18);
                                    };
                                } else {
                                    string15 = strconcat(string15, " ");
                                    string15 = strconcat(string15, "XP");
                                };
                            } else {
                                string15 = strconcat(string15, string17);
                                string15 = strconcat(string15, " ");
                                string15 = strconcat(string15, "of XP in");
                                if ((STRING_LENGTH(string18) > 0)) {
                                    string15 = strconcat(string15, " ");
                                    string15 = strconcat(string15, string18);
                                };
                            };
                            break;
                        }
                        case 1: {
                            if ((STRING_LENGTH(string17) == 0)) {
                                string15 = strconcat(string15, TOSTRING_LOCALISED((item_getparam(int25, 58) / 10), 1));
                                if ((STRING_LENGTH(string18) > 0)) {
                                    string15 = strconcat(string15, " ");
                                    string15 = strconcat(string15, "XP in");
                                    string15 = strconcat(string15, " ");
                                    string15 = strconcat(string15, string18);
                                } else {
                                    string15 = strconcat(string15, " ");
                                    string15 = strconcat(string15, "XP");
                                };
                            } else {
                                string15 = strconcat(string15, string17);
                                string15 = strconcat(string15, " ");
                                string15 = strconcat(string15, "XP in");
                                string15 = strconcat(string15, " ");
                                string15 = script6389(int25, string15);
                            };
                            break;
                        }
                        default: {
                            if ((STRING_LENGTH(string17) == 0)) {
                                string15 = strconcat(string15, TOSTRING_LOCALISED((item_getparam(int25, 58) / 10), 1));
                            } else {
                                string15 = strconcat(string15, string17);
                            };
                            string15 = strconcat(string15, " ");
                            if ((STRING_LENGTH(string18) > 0)) {
                                string15 = strconcat(string15, string18);
                                string15 = strconcat(string15, " ");
                            };
                            string15 = strconcat(string15, "XP");
                            break;
                        }
                    };
                    if ((item_getparam(int25, 124) > 1)) {
                        string15 = strconcat(string15, ` - requires level ${inttostring(item_getparam(int25, 124), 10)}`);
                    };
                    string15 = strconcat(string15, ")");
                };
                if (((item_getparam(int25, 4242) == 26 as stat) && (varbitplayer_30223 < 105))) {
                    string15 = strconcat(string15, " (You must complete the Invention tutorial before you can claim this reward.)");
                };
            };
            if ((STRING_LENGTH(string16) > 0)) {
                string15 = strconcat(string15, ` ${string16}`);
            };
        };
        int24 = (int24 + 1);
    };
    if ((STRING_LENGTH(string12) != STRING_LENGTH(string13))) {
        if ((STRING_LENGTH(string15) != 0)) {
            string15 = strconcat(string15, string14);
            string15 = strconcat(string15, string12);
            string15 = strconcat(string15, ".");
        } else {
            string15 = strconcat(string15, string12);
        };
    } else if ((STRING_LENGTH(string15) != 0)) {
        string15 = strconcat(string15, ".");
    } else {
        return string13;
    };
    return string15;
}