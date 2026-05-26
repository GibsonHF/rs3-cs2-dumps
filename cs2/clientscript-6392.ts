//
function script6392(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number, int13: number, int14: number, int15: number, int16: number, int17: number, int18: number, int19: number, int20: number, int21: number, int22: number, int23: number, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string, string8: string, string9: string, string10: string, string11: string, string12: string, string13: string, string14: string): string {
    var string15 = "";
    var int24 = 1;
    var int25 = -1;
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
        if ((int25 != -1)) {
            if ((STRING_LENGTH(string15) > 0)) {
                string15 = strconcat(string15, string14);
            };
            if ((int26 > 1)) {
                string15 = strconcat(string15, `${TOSTRING_LOCALISED(int26, 1)} x `);
            };
            string15 = strconcat(string15, OC_NAME(int25));
            if ((((OC_CATEGORY(int25) == 3196) || (OC_CATEGORY(int25) == 87)) || (OC_CATEGORY(int25) == 3142))) {
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