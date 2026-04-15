//
function script7249(int0: int): void {
    var int1 = -1 as cs2enum;
    var int2 = 0;
    var int3 = -1;
    switch (varplayer_3392) {
        case 1: {
            int1 = 1010 as cs2enum;
            int2 = TESTBIT(varplayer_3378, int0);
            switch (varplayer_3390) {
                case 1: {
                    int3 = varbitplayer_17035;
                    break;
                }
                case 2: {
                    int3 = varbitplayer_17043;
                    break;
                }
                case 3: {
                    int3 = varbitplayer_17051;
                    break;
                }
                case 4: {
                    int3 = varbitplayer_17059;
                    break;
                }
            };
            break;
        }
        case 2: {
            int1 = 1011 as cs2enum;
            int2 = TESTBIT(varplayer_3379, int0);
            switch (varplayer_3390) {
                case 1: {
                    int3 = varbitplayer_17037;
                    break;
                }
                case 2: {
                    int3 = varbitplayer_17045;
                    break;
                }
                case 3: {
                    int3 = varbitplayer_17053;
                    break;
                }
                case 4: {
                    int3 = varbitplayer_17061;
                    break;
                }
            };
            break;
        }
        case 3: {
            int1 = 1011 as cs2enum;
            int2 = TESTBIT(varplayer_3379, int0);
            switch (varplayer_3390) {
                case 1: {
                    int3 = varbitplayer_17038;
                    break;
                }
                case 2: {
                    int3 = varbitplayer_17046;
                    break;
                }
                case 3: {
                    int3 = varbitplayer_17054;
                    break;
                }
                case 4: {
                    int3 = varbitplayer_17062;
                    break;
                }
            };
            break;
        }
        case 4: {
            int1 = 1012 as cs2enum;
            int2 = TESTBIT(varbitplayer_17033, int0);
            switch (varplayer_3390) {
                case 1: {
                    int3 = varbitplayer_17036;
                    break;
                }
                case 2: {
                    int3 = varbitplayer_17044;
                    break;
                }
                case 3: {
                    int3 = varbitplayer_17052;
                    break;
                }
                case 4: {
                    int3 = varbitplayer_17060;
                    break;
                }
            };
            break;
        }
        case 5: {
            int1 = 1013 as cs2enum;
            int2 = TESTBIT(varbitplayer_17034, int0);
            switch (varplayer_3390) {
                case 1: {
                    int3 = varbitplayer_17039;
                    break;
                }
                case 2: {
                    int3 = varbitplayer_17047;
                    break;
                }
                case 3: {
                    int3 = varbitplayer_17055;
                    break;
                }
                case 4: {
                    int3 = varbitplayer_17063;
                    break;
                }
            };
            break;
        }
    };
    if ((int1 == -1 as cs2enum)) {
        return;
    };
    var int4 = enum_getvalue(0, 73, int1, int0);
    if ((int4 == -1 as struct)) {
        return;
    };
    var int5 = struct_getparam(int4, 701);
    var int6 = struct_getparam(int4, 702);
    var int7 = struct_getparam(int4, 703);
    var int8 = struct_getparam(int4, 704);
    var string0 = "";
    var string1 = "";
    var int9 = struct_getparam(int4, 664);
    var int10 = struct_getparam(int4, 697);
    var string2 = "";
    var int11 = struct_getparam(int4, 665);
    var int12 = struct_getparam(int4, 698);
    var string3 = "";
    var int13 = struct_getparam(int4, 684);
    var int14 = struct_getparam(int4, 699);
    var string4 = "";
    var int15 = struct_getparam(int4, 688);
    var int16 = struct_getparam(int4, 700);
    var string5 = "";
    string2 = inttostring(int9, 10);
    string3 = inttostring(int11, 10);
    string4 = inttostring(int13, 10);
    string5 = inttostring(int15, 10);
    IF_SETTEXT(string2, comp(916, 127));
    if ((int9 > varclient_2612)) {
        IF_SETCOLOUR(1936391, comp(916, 127));
    } else if ((int9 < varclient_2612)) {
        IF_SETCOLOUR(16711680, comp(916, 127));
    } else {
        IF_SETCOLOUR(16446166, comp(916, 127));
    };
    IF_SETTEXT(string3, comp(916, 124));
    if ((int11 > varclient_2616)) {
        IF_SETCOLOUR(1936391, comp(916, 124));
    } else if ((int11 < varclient_2616)) {
        IF_SETCOLOUR(16711680, comp(916, 124));
    } else {
        IF_SETCOLOUR(16446166, comp(916, 124));
    };
    IF_SETTEXT(string4, comp(916, 125));
    if ((int13 > varclient_2614)) {
        IF_SETCOLOUR(1936391, comp(916, 125));
    } else if ((int13 < varclient_2614)) {
        IF_SETCOLOUR(16711680, comp(916, 125));
    } else {
        IF_SETCOLOUR(16446166, comp(916, 125));
    };
    IF_SETTEXT(string5, comp(916, 126));
    if ((int15 > varclient_2618)) {
        IF_SETCOLOUR(1936391, comp(916, 126));
    } else if ((int15 < varclient_2618)) {
        IF_SETCOLOUR(16711680, comp(916, 126));
    } else {
        IF_SETCOLOUR(16446166, comp(916, 126));
    };
    var int17 = 1;
    IF_SETCOLOUR(16446166, comp(916, 141));
    IF_SETCOLOUR(16446166, comp(916, 143));
    if ((int2 == 0)) {
        switch (int5) {
            case 1: {
                if ((int6 > varplayer_3441)) {
                    IF_SETCOLOUR(16711680, comp(916, 141));
                    int17 = 0;
                };
                break;
            }
            case 2: {
                if ((int6 > varplayer_3442)) {
                    IF_SETCOLOUR(16711680, comp(916, 141));
                    int17 = 0;
                };
                break;
            }
            case 3: {
                if ((int6 > varplayer_3443)) {
                    IF_SETCOLOUR(16711680, comp(916, 141));
                    int17 = 0;
                };
                break;
            }
            case 4: {
                if ((int6 > varplayer_3444)) {
                    IF_SETCOLOUR(16711680, comp(916, 141));
                    int17 = 0;
                };
                break;
            }
            case 5: {
                if ((int6 > varplayer_3445)) {
                    IF_SETCOLOUR(16711680, comp(916, 141));
                    int17 = 0;
                };
                break;
            }
            case 6: {
                if ((int6 > varplayer_3446)) {
                    IF_SETCOLOUR(16711680, comp(916, 141));
                    int17 = 0;
                };
                break;
            }
            case 7: {
                if ((int6 > varplayer_3447)) {
                    IF_SETCOLOUR(16711680, comp(916, 141));
                    int17 = 0;
                };
                break;
            }
            case 8: {
                if ((int6 > varplayer_4038)) {
                    IF_SETCOLOUR(16711680, comp(916, 141));
                    int17 = 0;
                };
                break;
            }
            case 9: {
                if ((int6 > varplayer_4039)) {
                    IF_SETCOLOUR(16711680, comp(916, 141));
                    int17 = 0;
                };
                break;
            }
        };
        string0 = ` ${inttostring(int6, 10)}`;
        if ((((int5 > 0) && (int5 < 8)) && (int6 > 0))) {
            IF_SETTEXT(string0, comp(916, 141));
            stack(enum_getvalue(0, 23, 7153 as cs2enum, int5));
            stack(60031116);
            IF_SETGRAPHIC();
            IF_SETSIZE(17, 17, 0, 0, 60031116);
        } else {
            IF_SETTEXT("", comp(916, 141));
            stack(-1);
            stack(60031116);
            IF_SETGRAPHIC();
        };
        switch (int7) {
            case 1: {
                if ((int8 > varplayer_3441)) {
                    IF_SETCOLOUR(16711680, comp(916, 143));
                    int17 = 0;
                };
                break;
            }
            case 2: {
                if ((int8 > varplayer_3442)) {
                    IF_SETCOLOUR(16711680, comp(916, 143));
                    int17 = 0;
                };
                break;
            }
            case 3: {
                if ((int8 > varplayer_3443)) {
                    IF_SETCOLOUR(16711680, comp(916, 143));
                    int17 = 0;
                };
                break;
            }
            case 4: {
                if ((int8 > varplayer_3444)) {
                    IF_SETCOLOUR(16711680, comp(916, 143));
                    int17 = 0;
                };
                break;
            }
            case 5: {
                if ((int8 > varplayer_3445)) {
                    IF_SETCOLOUR(16711680, comp(916, 143));
                    int17 = 0;
                };
                break;
            }
            case 6: {
                if ((int8 > varplayer_3446)) {
                    IF_SETCOLOUR(16711680, comp(916, 143));
                    int17 = 0;
                };
                break;
            }
            case 7: {
                if ((int8 > varplayer_3447)) {
                    IF_SETCOLOUR(16711680, comp(916, 143));
                    int17 = 0;
                };
                break;
            }
            case 8: {
                if ((int8 > varplayer_4038)) {
                    IF_SETCOLOUR(16711680, comp(916, 143));
                    int17 = 0;
                };
                break;
            }
            case 9: {
                if ((int8 > varplayer_4039)) {
                    IF_SETCOLOUR(16711680, comp(916, 143));
                    int17 = 0;
                };
                break;
            }
        };
        string1 = ` ${inttostring(int8, 10)}`;
        if ((((int7 > 0) && (int7 < 10)) && (int8 > 0))) {
            IF_SETTEXT(string1, comp(916, 143));
            stack(enum_getvalue(0, 23, 7153 as cs2enum, int7));
            stack(60031118);
            IF_SETGRAPHIC();
            IF_SETSIZE(17, 17, 0, 0, 60031118);
        } else {
            IF_SETTEXT("", comp(916, 143));
            stack(-1);
            stack(60031118);
            IF_SETGRAPHIC();
        };
        IF_SETHIDE(false, comp(916, 138));
        IF_SETHIDE(true, comp(916, 128));
        script13969(comp(916, 144), comp(-1, 65535), 28553 as struct, "Buy");
        script13971(comp(916, 145), comp(-1, 65535), 28553 as struct, "Buy", true);
        if ((int17 == 0)) {
            IF_SETHIDE(false, comp(916, 145));
            if ((CC_FIND(comp(916, 115), int0) == 1)) {
                CC_SETGRAPHIC(9998 as graphic);
            };
        } else {
            IF_SETHIDE(true, comp(916, 145));
        };
    } else if ((varplayer_3391 == int3)) {
        IF_SETHIDE(true, comp(916, 138));
        IF_SETHIDE(true, comp(916, 128));
        script13969(comp(916, 144), comp(-1, 65535), 28553 as struct, "Close");
        script13971(comp(916, 145), comp(-1, 65535), 28553 as struct, "Close", true);
        IF_SETHIDE(true, comp(916, 145));
    } else {
        string2 = inttostring(varclient_2612, 10);
        string3 = inttostring(varclient_2616, 10);
        string4 = inttostring(varclient_2614, 10);
        string5 = inttostring(varclient_2618, 10);
        IF_SETTEXT(string2, comp(916, 133));
        IF_SETTEXT(string3, comp(916, 130));
        IF_SETTEXT(string4, comp(916, 131));
        IF_SETTEXT(string5, comp(916, 132));
        if ((int9 < varclient_2612)) {
            IF_SETCOLOUR(1936391, comp(916, 133));
        } else if ((int9 > varclient_2612)) {
            IF_SETCOLOUR(16711680, comp(916, 133));
        } else {
            IF_SETCOLOUR(16446166, comp(916, 133));
        };
        if ((int11 < varclient_2616)) {
            IF_SETCOLOUR(1936391, comp(916, 130));
        } else if ((int11 > varclient_2616)) {
            IF_SETCOLOUR(16711680, comp(916, 130));
        } else {
            IF_SETCOLOUR(16446166, comp(916, 130));
        };
        if ((int13 < varclient_2614)) {
            IF_SETCOLOUR(1936391, comp(916, 131));
        } else if ((int13 > varclient_2614)) {
            IF_SETCOLOUR(16711680, comp(916, 131));
        } else {
            IF_SETCOLOUR(16446166, comp(916, 131));
        };
        if ((int15 < varclient_2618)) {
            IF_SETCOLOUR(1936391, comp(916, 132));
        } else if ((int15 > varclient_2618)) {
            IF_SETCOLOUR(16711680, comp(916, 132));
        } else {
            IF_SETCOLOUR(16446166, comp(916, 132));
        };
        IF_SETHIDE(true, comp(916, 138));
        IF_SETHIDE(false, comp(916, 128));
        script13969(comp(916, 144), comp(-1, 65535), 28553 as struct, "Activate");
        script13971(comp(916, 145), comp(-1, 65535), 28553 as struct, "Activate", true);
        IF_SETHIDE(true, comp(916, 145));
    };
    return;
}