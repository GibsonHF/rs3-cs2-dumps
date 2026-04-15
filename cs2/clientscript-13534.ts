//
function script13534(int0: int, int1: cs2enum, int2: unknown_int, int3: component, int4: component): [int, int] {
    if ((((int1 == -1 as cs2enum) || (int3 == comp(-1, 65535))) || (int4 == comp(-1, 65535)))) {
        return [-1, -1];
    };
    var int5 = script383(int0);
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = ENUM_GETOUTPUTCOUNT(int1);
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = -1 as struct;
    var int18 = -1 as graphic;
    var int19 = -1 as graphic;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var string6 = "";
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    while ((int9 < int10)) {
        int17 = enum_getvalue(0, 73, int1, int9);
        CC_CREATE[1](int4, 4, int9);
        if (((TESTBIT(struct_getparam(int17, 6651), int5) == 1) && (script19379(int17) == 1))) {
            if ((struct_getparam(int17, 6654) == 1)) {
                [int11, int12] = script11599(int0, int17);
            } else {
                int12 = 0;
                switch (int17) {
                    case 37640: {
                        int11 = varclient_2834;
                        int12 = (1 - int11);
                        break;
                    }
                    case 37641: {
                        int11 = varbitplayer_20828;
                        int12 = (1 - int11);
                        break;
                    }
                    case 37642: {
                        switch (CHAT_GETFILTER_PRIVATE()) {
                            case 1: {
                                int11 = 1;
                                int12 = 1;
                                break;
                            }
                            case 2: {
                                int11 = 0;
                                int12 = 1;
                                break;
                            }
                            default: {
                                int11 = 1;
                                int12 = 0;
                                break;
                            }
                        };
                        break;
                    }
                    default: {
                        int11 = -1;
                        int12 = -1;
                        break;
                    }
                };
            };
            string2 = struct_getparam(int17, 6647);
            int13 = struct_getparam(int17, 6653);
            string5 = `${string2}: `;
            int19 = struct_getparam(int17, 6726);
            if (((int17 == 37632 as struct) && (varbitplayer_36983 == 1))) {
                string0 = "<col=00FFFF>Hide";
                string1 = "Turn ON";
                int18 = struct_getparam(int17, 6656);
            } else if ((int11 == 0)) {
                string0 = "<col=7592A0>Off";
                if (((int17 == 37632 as struct) && (varbitplayer_36983 == 0))) {
                    string1 = "Hide";
                } else {
                    string1 = "Turn ON";
                };
                int18 = struct_getparam(int17, 6657);
            } else if ((int12 == 1)) {
                string0 = `<col=AED0E0>${struct_getparam(int17, 6648)}`;
                string1 = "Turn OFF";
                int18 = struct_getparam(int17, 6656);
            } else if ((int12 == -1)) {
                string5 = string2;
                string1 = string2;
                string2 = "";
                string0 = "";
                int18 = struct_getparam(int17, 6655);
                switch (int17) {
                    case 37653: {
                        if ((varclient_4505 == 1)) {
                            int18 = 21715 as graphic;
                            int19 = 21716 as graphic;
                        } else {
                            int18 = 21713 as graphic;
                            int19 = 21714 as graphic;
                        };
                        break;
                    }
                    case 37645: {
                        if ((CLAN_GETCHATCOUNT() > 0)) {
                            string1 = "Leave Chat";
                            string5 = string1;
                            int18 = 6243 as graphic;
                        } else {
                            string1 = "Join Chat";
                            string5 = string1;
                            int18 = 6242 as graphic;
                        };
                        break;
                    }
                    case 37647: {
                        if ((unk10993(0) == 1)) {
                            string1 = "Leave Clan Chat";
                            string5 = string1;
                            int18 = 6255 as graphic;
                        } else {
                            string1 = "Join Clan Chat";
                            string5 = string1;
                            int18 = 6256 as graphic;
                        };
                        break;
                    }
                    case 37648: {
                        if ((ACTIVECLANCHANNEL_FIND_LISTENED() == 1)) {
                            string1 = "Leave Guest Chat";
                            string5 = string1;
                            int18 = 6255 as graphic;
                        } else {
                            string1 = "Join Guest Chat";
                            string5 = string1;
                            int18 = 6256 as graphic;
                        };
                        break;
                    }
                };
            } else {
                string5 = `${struct_getparam(int17, 6647)}: `;
                string0 = "<col=FFCB05>On";
                if ((strcmp("", struct_getparam(int17, 6648)) == 0)) {
                    string1 = "Turn OFF";
                } else {
                    string1 = "Filter";
                };
                int18 = struct_getparam(int17, 6655);
            };
            if ((int17 == 37649 as struct)) {
                CC_SETOP[1](2, "Report Player");
                CC_SETOP[1](3, "Report Bug");
            };
            if ((int17 == 41813 as struct)) {
                string5 = `${string5}: `;
                string0 = `<col=FFCB05>${enum_getvalue(0, 36, 1443 as cs2enum, script3873())}pt</col>`;
            };
            if ((int17 == 37912 as struct)) {
                if ((int2 == 1)) {
                    int15 = 0;
                    int16 = 0;
                } else {
                    int6 = (int6 - 6);
                    int15 = 16;
                    int16 = 14;
                };
            } else {
                int15 = 16;
                if ((varbitplayer_38842 == 1)) {
                    int16 = 40;
                } else {
                    int16 = 20;
                };
            };
            CC_CREATE(int3, 5, IF_GETNEXTSUBID(int3));
            CC_SETGRAPHIC(int18);
            CC_SETSIZE(int15, 16, 0, 0);
            if ((int19 != -1 as graphic)) {
                CC_SETONMOUSEOVER(callback(script5336, -2147483645, -2147483643, int19));
                CC_SETONMOUSELEAVE(callback(script5336, -2147483645, -2147483643, int18));
            };
            if ((int2 == 1)) {
                CC_SETPOSITION(5, (int7 + ((int16 - 20) / 2)), 0, 0);
                CC_SETSIZE[1](0, int16, 1, 0);
                CC_SETPOSITION[1](0, int7, 0, 0);
                string3 = `<col=AED0E0>${string5}</col>${string0}`;
                string4 = `<col=FFFFFF>${string5}${string0}</col>`;
                CC_CREATE(int3, 4, IF_GETNEXTSUBID(int3));
                CC_SETPOSITION(25, int7, 0, 0);
                CC_SETSIZE(25, int16, 1, 0);
                CC_SETTEXTFONT(26 as fontmetrics);
                CC_SETTEXTALIGN(0, 1, 0);
                CC_SETTEXT(string3);
                CC_SETONMOUSEOVER(callback(script7777, -2147483645, -2147483643, string4));
                CC_SETONMOUSELEAVE(callback(script7777, -2147483645, -2147483643, string3));
                int8 = MAX(int8, (25 + STRINGWIDTH(REMOVETAGS(string3), 26)));
            } else {
                if ((int17 != 37912 as struct)) {
                    string6 = string5;
                    if ((strcmp(string0, "") != 0)) {
                        string6 = `${string6}<br>Current setting: ${string0}`;
                    };
                    string6 = `${string6}<br>${struct_getparam(int17, 6724)}`;
                    CC_SETONMOUSEREPEAT(callback(script3876, string6, -2147483645, -2147483643));
                };
                CC_SETPOSITION(int6, 0, 0, 1);
                CC_SETSIZE[1](int15, 16, 0, 0);
                CC_SETPOSITION[1](int6, 0, 0, 1);
                int8 = (int6 + int16);
            };
            if ((int17 != 37912 as struct)) {
                CC_SETONOP[1](callback(script8494, int0, int17, -2147483644, int1, int2));
                CC_SETOP[1](1, string1);
                if ((TESTBIT(struct_getparam(int17, 6652), script383(int0)) == 0)) {
                    if ((TESTBIT(int13, 2) == 1)) {
                        CC_SETOP[1](2, "Turn ON");
                    };
                    if ((TESTBIT(int13, 3) == 1)) {
                        CC_SETOP[1](3, struct_getparam(int17, 6648));
                    };
                    if ((TESTBIT(int13, 4) == 1)) {
                        CC_SETOP[1](4, "Turn OFF");
                    };
                    if ((TESTBIT(int13, 5) == 1)) {
                        CC_SETOP[1](5, "Hide");
                    };
                    CC_SETOPBASE[1](string2);
                };
            };
            if ((int2 == 1)) {
                int7 = (int7 + int16);
            } else {
                int6 = (int6 + int16);
            };
        };
        int9 = (int9 + 1);
    };
    if ((int2 == 1)) {
        int8 = (int8 + 13);
        int7 = (int7 + 8);
    };
    return [int8, int7];
}