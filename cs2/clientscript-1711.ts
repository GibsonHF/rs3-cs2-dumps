//
function script1711(int0: int, int1: unknown_int): void {
    var int2 = 0;
    var int3 = comp(-1, 65535);
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = comp(-1, 65535);
    var int9 = comp(-1, 65535);
    var int10 = -1;
    var int11 = -1;
    var int12 = -1;
    var int13 = comp(-1, 65535);
    var int14 = comp(-1, 65535);
    var int15 = comp(-1, 65535);
    var int16 = -1;
    var int17 = comp(-1, 65535);
    var int18 = -1;
    var int19 = comp(-1, 65535);
    var int20 = -1;
    var int21 = comp(-1, 65535);
    var int22 = comp(-1, 65535);
    var int23 = comp(-1, 65535);
    if ((int0 == 1)) {
        IF_SETHIDE(true, comp(950, 10));
        IF_SETHIDE(false, comp(950, 7));
        if (((varplayer_3416 == 0) && (varbitplayer_17131 == 0))) {
            IF_SETHIDE(false, comp(950, 275));
        } else {
            IF_SETHIDE(true, comp(950, 275));
        };
        switch (int1) {
            case 1: {
                int2 = varbitplayer_17118;
                break;
            }
            case 2: {
                int2 = varbitplayer_17119;
                break;
            }
            case 3: {
                int2 = varbitplayer_17120;
                break;
            }
        };
        IF_SETHIDE(true, comp(950, 33));
        IF_SETHIDE(true, comp(950, 53));
        IF_SETHIDE(true, comp(950, 73));
    } else {
        IF_SETHIDE(false, comp(950, 10));
        IF_SETHIDE(true, comp(950, 7));
        switch (int1) {
            case 1: {
                int2 = varbitplayer_17115;
                break;
            }
            case 2: {
                int2 = varbitplayer_17116;
                break;
            }
            case 3: {
                int2 = varbitplayer_17117;
                break;
            }
        };
        IF_SETHIDE(false, comp(950, 33));
        IF_SETHIDE(false, comp(950, 53));
        IF_SETHIDE(false, comp(950, 73));
    };
    switch (int1) {
        case 1: {
            int3 = comp(950, 34);
            int8 = comp(950, 19);
            int9 = comp(950, 20);
            int10 = 62259226;
            int11 = 62259228;
            int12 = 62259230;
            int13 = comp(950, 27);
            int14 = comp(950, 29);
            int15 = comp(950, 31);
            int17 = comp(950, 21);
            int19 = comp(950, 22);
            int21 = comp(950, 23);
            int22 = comp(950, 32);
            int23 = comp(950, 25);
            break;
        }
        case 2: {
            int3 = comp(950, 54);
            int8 = comp(950, 39);
            int9 = comp(950, 40);
            int10 = 62259246;
            int11 = 62259248;
            int12 = 62259250;
            int13 = comp(950, 47);
            int14 = comp(950, 49);
            int15 = comp(950, 51);
            int17 = comp(950, 41);
            int19 = comp(950, 42);
            int21 = comp(950, 43);
            int22 = comp(950, 52);
            int23 = comp(950, 45);
            break;
        }
        case 3: {
            int3 = comp(950, 74);
            int8 = comp(950, 59);
            int9 = comp(950, 60);
            int10 = 62259266;
            int11 = 62259268;
            int12 = 62259270;
            int13 = comp(950, 67);
            int14 = comp(950, 69);
            int15 = comp(950, 71);
            int17 = comp(950, 61);
            int19 = comp(950, 62);
            int21 = comp(950, 63);
            int22 = comp(950, 72);
            int23 = comp(950, 65);
            break;
        }
    };
    IF_SETTEXT("", int23);
    IF_SETTEXT("", int8);
    IF_SETTEXT("No voyage available", int3);
    stack(-1);
    stack(int10);
    IF_SETGRAPHIC();
    stack(-1);
    stack(int11);
    IF_SETGRAPHIC();
    stack(-1);
    stack(int12);
    IF_SETGRAPHIC();
    IF_SETONMOUSEREPEAT(callback(), int10);
    IF_SETONMOUSEREPEAT(callback(), int11);
    IF_SETONMOUSEREPEAT(callback(), int12);
    stack(-1);
    stack(int17);
    IF_SETGRAPHIC();
    stack(-1);
    stack(int19);
    IF_SETGRAPHIC();
    stack(-1);
    stack(int21);
    IF_SETGRAPHIC();
    IF_SETONMOUSEREPEAT(callback(), int17);
    IF_SETONMOUSEREPEAT(callback(), int19);
    IF_SETONMOUSEREPEAT(callback(), int21);
    IF_SETTEXT("", int13);
    IF_SETTEXT("", int14);
    IF_SETTEXT("", int15);
    CC_DELETEALL(int9);
    if ((int2 == 0)) {
        IF_SETHIDE(false, int22);
        return;
    };
    IF_SETHIDE(true, int22);
    IF_SETTEXT("Rewards:", int23);
    var int24 = enum_getvalue(0, 73, 1022 as cs2enum, int2);
    if ((int24 == -1 as struct)) {
        return;
    };
    var string0 = struct_getparam(int24, 2365);
    var int25 = 0;
    var int26 = 0;
    var int27 = 0;
    var string1 = "";
    var string2 = "";
    var string3 = "";
    if ((int2 == 417)) {
        int25 = varbitplayer_17498;
    } else {
        int25 = struct_getparam(int24, 3066);
    };
    int26 = struct_getparam(int24, 3067);
    int27 = struct_getparam(int24, 3068);
    switch (int25) {
        case 1: {
            int16 = 15778;
            string1 = "The Whaler";
            break;
        }
        case 2: {
            int16 = 15769;
            string1 = "The Biologist";
            break;
        }
        case 3: {
            int16 = 15760;
            string1 = "The Occultist";
            break;
        }
        case 4: {
            int16 = 15749;
            string1 = "The Assassin";
            break;
        }
        case 5: {
            int16 = 15750;
            string1 = "The Convict";
            break;
        }
        case 6: {
            int16 = 15751;
            string1 = "The Missionary";
            break;
        }
        case 7: {
            int16 = 22046;
            string1 = "The Trapper";
            break;
        }
        case 8: {
            int16 = 22045;
            string1 = "The Chef";
            break;
        }
        case 9: {
            int16 = 22047;
            string1 = "The Architect";
            break;
        }
        case 10: {
            int16 = 22055;
            string1 = "The Exile";
            break;
        }
        case 11: {
            int16 = 22053;
            string1 = "The Memory";
            break;
        }
        case 12: {
            int16 = 22054;
            string1 = "The Tengu";
            break;
        }
    };
    switch (int26) {
        case 1: {
            int18 = 15778;
            string2 = "The Whaler";
            break;
        }
        case 2: {
            int18 = 15769;
            string2 = "The Biologist";
            break;
        }
        case 3: {
            int18 = 15760;
            string2 = "The Occultist";
            break;
        }
        case 4: {
            int18 = 15749;
            string2 = "The Assassin";
            break;
        }
        case 5: {
            int18 = 15750;
            string2 = "The Convict";
            break;
        }
        case 6: {
            int18 = 15751;
            string2 = "The Missionary";
            break;
        }
        case 7: {
            int18 = 22046;
            string2 = "The Trapper";
            break;
        }
        case 8: {
            int18 = 22045;
            string2 = "The Chef";
            break;
        }
        case 9: {
            int18 = 22047;
            string2 = "The Architect";
            break;
        }
        case 10: {
            int18 = 22055;
            string2 = "The Exile";
            break;
        }
        case 11: {
            int18 = 22053;
            string2 = "The Memory";
            break;
        }
        case 12: {
            int18 = 22054;
            string2 = "The Tengu";
            break;
        }
    };
    switch (int27) {
        case 1: {
            int20 = 15778;
            string3 = "The Whaler";
            break;
        }
        case 2: {
            int20 = 15769;
            string3 = "The Biologist";
            break;
        }
        case 3: {
            int20 = 15760;
            string3 = "The Occultist";
            break;
        }
        case 4: {
            int20 = 15749;
            string3 = "The Assassin";
            break;
        }
        case 5: {
            int20 = 15750;
            string3 = "The Convict";
            break;
        }
        case 6: {
            int20 = 15751;
            string3 = "The Missionary";
            break;
        }
        case 7: {
            int20 = 22046;
            string3 = "The Trapper";
            break;
        }
        case 8: {
            int20 = 22045;
            string3 = "The Chef";
            break;
        }
        case 9: {
            int20 = 22047;
            string3 = "The Architect";
            break;
        }
        case 10: {
            int20 = 22055;
            string3 = "The Exile";
            break;
        }
        case 11: {
            int20 = 22053;
            string3 = "The Memory";
            break;
        }
        case 12: {
            int20 = 22054;
            string3 = "The Tengu";
            break;
        }
    };
    if ((int0 == 1)) {
        if ((int27 > 0)) {
            IF_SETSIZE(30, 30, 0, 0, int17);
            IF_SETSIZE(30, 30, 0, 0, int19);
            IF_SETSIZE(30, 30, 0, 0, int21);
            IF_SETPOSITION(147, 42, 0, 0, int17);
            IF_SETPOSITION(132, 75, 0, 0, int19);
            IF_SETPOSITION(166, 75, 0, 0, int21);
        } else if ((int26 > 0)) {
            IF_SETSIZE(35, 35, 0, 0, int17);
            IF_SETSIZE(35, 35, 0, 0, int19);
            IF_SETPOSITION(145, 39, 0, 0, int17);
            IF_SETPOSITION(145, 76, 0, 0, int19);
            int20 = -1;
        } else if ((int25 > 0)) {
            IF_SETSIZE(35, 35, 0, 0, int17);
            IF_SETPOSITION(145, 59, 0, 0, int17);
            int18 = -1;
            int20 = -1;
        };
        stack(int16);
        stack(int17);
        IF_SETGRAPHIC();
        if (((strcmp(string1, "") != 0) && (int16 != -1))) {
            IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), int17);
        } else {
            IF_SETONMOUSEREPEAT(callback(), int17);
        };
        stack(int18);
        stack(int19);
        IF_SETGRAPHIC();
        if (((strcmp(string2, "") != 0) && (int18 != -1))) {
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -1), int19);
        } else {
            IF_SETONMOUSEREPEAT(callback(), int19);
        };
        stack(int20);
        stack(int21);
        IF_SETGRAPHIC();
        if (((strcmp(string3, "") != 0) && (int20 != -1))) {
            IF_SETONMOUSEREPEAT(callback(script8799, string3, -2147483645, -1), int21);
        } else {
            IF_SETONMOUSEREPEAT(callback(), int21);
        };
    };
    var int28 = struct_getparam(int24, 3056);
    var int29 = struct_getparam(int24, 3057);
    var int30 = struct_getparam(int24, 3058);
    var int31 = (int28 - varclient_2621);
    var int32 = (int29 - varclient_2622);
    var int33 = (int30 - varclient_2623);
    IF_SETTEXT(string0, int3);
    var int34 = (((int28 + int29) + int30) / 3);
    var int35 = (((int31 + int32) + int33) / 3);
    script1883(int34, int35, int9, 0);
    var string4 = "";
    var int36 = (((int28 + int29) + int30) / 3);
    var int37 = (((int31 + int32) + int33) / 3);
    IF_SETTEXT("Difficulty:", int8);
    var int38 = struct_getparam(int24, 3060);
    var int39 = struct_getparam(int24, 3062);
    var int40 = struct_getparam(int24, 3064);
    if ((int38 == 20)) {
        stack(enum_getvalue(0, 23, 7213 as cs2enum, varbitplayer_17497));
        stack(int10);
        IF_SETGRAPHIC();
    } else {
        stack(enum_getvalue(0, 23, 1024 as cs2enum, int38));
        stack(int10);
        IF_SETGRAPHIC();
    };
    if ((int39 == 20)) {
        stack(enum_getvalue(0, 23, 7213 as cs2enum, varbitplayer_17497));
        stack(int11);
        IF_SETGRAPHIC();
    } else {
        stack(enum_getvalue(0, 23, 1024 as cs2enum, int39));
        stack(int11);
        IF_SETGRAPHIC();
    };
    if ((int40 == 20)) {
        stack(enum_getvalue(0, 23, 7213 as cs2enum, varbitplayer_17497));
        stack(int11);
        IF_SETGRAPHIC();
    } else {
        stack(enum_getvalue(0, 23, 1024 as cs2enum, int40));
        stack(int12);
        IF_SETGRAPHIC();
    };
    var string5 = "";
    var string6 = "";
    var int41 = struct_getparam(int24, 3061);
    var int42 = -1;
    var int43 = struct_getparam(int24, 2366);
    string5 = inttostring(int41, 10);
    if ((int43 == 2)) {
        string5 = enum_getvalue(0, 36, 7164 as cs2enum, int41);
        switch (int41) {
            case 0: {
                int42 = 26209;
                break;
            }
            case 2: {
                int42 = 26217;
                break;
            }
            case 3: {
                int42 = 26225;
                break;
            }
            case 4: {
                int42 = 26233;
                break;
            }
            case 5: {
                int42 = 26241;
                break;
            }
            case 6: {
                int42 = 26245;
                break;
            }
            case 13: {
                int42 = 30555;
                break;
            }
            case 14: {
                int42 = 30561;
                break;
            }
        };
    } else if (((int43 == 6) || (int43 == 10))) {
        switch (int41) {
            case 1: {
                string5 = "The Whaler";
                break;
            }
            case 2: {
                string5 = "The Biologist";
                break;
            }
            case 3: {
                string5 = "The Occultist";
                break;
            }
            case 4: {
                string5 = "The Assassin";
                break;
            }
            case 5: {
                string5 = "The Convict";
                break;
            }
            case 6: {
                string5 = "The Missionary";
                break;
            }
            case 7: {
                string5 = "The Trapper";
                break;
            }
            case 8: {
                string5 = "The Chef";
                break;
            }
            case 9: {
                string5 = "The Architect";
                break;
            }
            case 10: {
                string5 = "The Exile";
                break;
            }
            case 11: {
                string5 = "The Memory";
                break;
            }
            case 12: {
                string5 = "The Tengu";
                break;
            }
            case 14:
            case 13:
            case 16:
            case 15: {
                string5 = "Trio";
                break;
            }
        };
    } else if ((int43 == 7)) {
        string5 = `New trait: ${struct_getparam(enum_getvalue(0, 73, 2175 as cs2enum, int41), 3090)}`;
    } else if ((int43 == 4)) {
        if ((int41 <= 12)) {
            switch (script4223()) {
                case 4: {
                    string5 = "15,000";
                    break;
                }
                case 5: {
                    string5 = "20,000";
                    break;
                }
                case 6: {
                    string5 = "25,000";
                    break;
                }
                case 7: {
                    string5 = "30,000";
                    break;
                }
                case 8: {
                    string5 = "35,000";
                    break;
                }
                default: {
                    string5 = "10,000";
                    break;
                }
            };
        } else {
            switch (script4223()) {
                case 4: {
                    string5 = "25,000 x2";
                    break;
                }
                case 5: {
                    string5 = "30,000 x2";
                    break;
                }
                case 6: {
                    string5 = "35,000 x2";
                    break;
                }
                case 7: {
                    string5 = "40,000 x2";
                    break;
                }
                case 8: {
                    string5 = "45,000 x2";
                    break;
                }
                default: {
                    string5 = "20,000 x2";
                    break;
                }
            };
        };
    } else if ((int43 == 11)) {
        switch (int38) {
            case 28: {
                string5 = `Ration packs x${inttostring(int41, 10)}`;
                break;
            }
            case 29: {
                string5 = `Powder kegs x${inttostring(int41, 10)}`;
                break;
            }
            case 30: {
                string5 = `Bottled seasinger cries x${inttostring(int41, 10)}`;
                break;
            }
            case 32: {
                string5 = "Captain trait removal";
                break;
            }
        };
    } else if ((int43 == 12)) {
        switch (int38) {
            case 34: {
                string5 = "Gemstone kaseki x1";
                break;
            }
            case 35: {
                string5 = "Tengu tsuba x1";
                break;
            }
            case 31: {
                string5 = "Worldbearer ring x1";
                break;
            }
            case 33: {
                string5 = "Gift of Gu x1";
                break;
            }
        };
    };
    if (((strcmp(string5, "") != 0) && (strcmp(string5, "0") != 0))) {
        IF_SETTEXT(string5, int13);
        string6 = enum_getvalue(0, 36, 1025 as cs2enum, int38);
        if ((int43 == 2)) {
            string6 = `Unlock island: ${enum_getvalue(0, 36, 7164 as cs2enum, int41)}`;
        } else if ((int43 == 7)) {
            string6 = `Captain gains a trait:<br>${struct_getparam(enum_getvalue(0, 73, 2175 as cs2enum, int41), 3091)}`;
        } else if ((int43 == 4)) {
            string6 = `Experience: ${string5}`;
        };
        IF_SETONMOUSEREPEAT(callback(script8799, string6, -2147483645, -1), int10);
    };
    int41 = struct_getparam(int24, 3063);
    string5 = inttostring(int41, 10);
    if (((int43 == 2) && (int42 != -1))) {
        stack(item_getparam(int42, 3080));
        stack(int11);
        IF_SETGRAPHIC();
        string6 = `Unlock crewman: ${OC_NAME(int42)}`;
        IF_SETONMOUSEREPEAT(callback(script8799, string6, -2147483645, -1), int11);
        string5 = "";
    };
    if (((strcmp(string5, "") != 0) && (strcmp(string5, "0") != 0))) {
        IF_SETTEXT(string5, int14);
        string6 = enum_getvalue(0, 36, 1025 as cs2enum, int39);
        IF_SETONMOUSEREPEAT(callback(script8799, string6, -2147483645, -1), int11);
    };
    int41 = struct_getparam(int24, 3065);
    string5 = inttostring(int41, 10);
    if (((strcmp(string5, "") != 0) && (strcmp(string5, "0") != 0))) {
        IF_SETTEXT(string5, int15);
        string6 = enum_getvalue(0, 36, 1025 as cs2enum, int40);
        IF_SETONMOUSEREPEAT(callback(script8799, string6, -2147483645, -1), int12);
    };
    script1885();
    return;
}