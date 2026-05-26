//
function script7249(int0: number): void {
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
    IF_SETTEXT(string2, 60031103);
    if ((int9 > varclient_2612)) {
        IF_SETCOLOUR(1936391, 60031103);
    } else if ((int9 < varclient_2612)) {
        IF_SETCOLOUR(16711680, 60031103);
    } else {
        IF_SETCOLOUR(16446166, 60031103);
    };
    IF_SETTEXT(string3, 60031100);
    if ((int11 > varclient_2616)) {
        IF_SETCOLOUR(1936391, 60031100);
    } else if ((int11 < varclient_2616)) {
        IF_SETCOLOUR(16711680, 60031100);
    } else {
        IF_SETCOLOUR(16446166, 60031100);
    };
    IF_SETTEXT(string4, 60031101);
    if ((int13 > varclient_2614)) {
        IF_SETCOLOUR(1936391, 60031101);
    } else if ((int13 < varclient_2614)) {
        IF_SETCOLOUR(16711680, 60031101);
    } else {
        IF_SETCOLOUR(16446166, 60031101);
    };
    IF_SETTEXT(string5, 60031102);
    if ((int15 > varclient_2618)) {
        IF_SETCOLOUR(1936391, 60031102);
    } else if ((int15 < varclient_2618)) {
        IF_SETCOLOUR(16711680, 60031102);
    } else {
        IF_SETCOLOUR(16446166, 60031102);
    };
    var int17 = 1;
    IF_SETCOLOUR(16446166, 60031117);
    IF_SETCOLOUR(16446166, 60031119);
    if ((int2 == 0)) {
        switch (int5) {
            case 1: {
                if ((int6 > varplayer_3441)) {
                    IF_SETCOLOUR(16711680, 60031117);
                    int17 = 0;
                };
                break;
            }
            case 2: {
                if ((int6 > varplayer_3442)) {
                    IF_SETCOLOUR(16711680, 60031117);
                    int17 = 0;
                };
                break;
            }
            case 3: {
                if ((int6 > varplayer_3443)) {
                    IF_SETCOLOUR(16711680, 60031117);
                    int17 = 0;
                };
                break;
            }
            case 4: {
                if ((int6 > varplayer_3444)) {
                    IF_SETCOLOUR(16711680, 60031117);
                    int17 = 0;
                };
                break;
            }
            case 5: {
                if ((int6 > varplayer_3445)) {
                    IF_SETCOLOUR(16711680, 60031117);
                    int17 = 0;
                };
                break;
            }
            case 6: {
                if ((int6 > varplayer_3446)) {
                    IF_SETCOLOUR(16711680, 60031117);
                    int17 = 0;
                };
                break;
            }
            case 7: {
                if ((int6 > varplayer_3447)) {
                    IF_SETCOLOUR(16711680, 60031117);
                    int17 = 0;
                };
                break;
            }
            case 8: {
                if ((int6 > varplayer_4038)) {
                    IF_SETCOLOUR(16711680, 60031117);
                    int17 = 0;
                };
                break;
            }
            case 9: {
                if ((int6 > varplayer_4039)) {
                    IF_SETCOLOUR(16711680, 60031117);
                    int17 = 0;
                };
                break;
            }
        };
        string0 = ` ${inttostring(int6, 10)}`;
        if ((((int5 > 0) && (int5 < 8)) && (int6 > 0))) {
            IF_SETTEXT(string0, 60031117);
            stack(enum_getvalue(0, 23, 7153 as cs2enum, int5));
            stack(60031116);
            IF_SETGRAPHIC();
            IF_SETSIZE(17, 17, 0, 0, 60031116);
        } else {
            IF_SETTEXT("", 60031117);
            stack(-1);
            stack(60031116);
            IF_SETGRAPHIC();
        };
        switch (int7) {
            case 1: {
                if ((int8 > varplayer_3441)) {
                    IF_SETCOLOUR(16711680, 60031119);
                    int17 = 0;
                };
                break;
            }
            case 2: {
                if ((int8 > varplayer_3442)) {
                    IF_SETCOLOUR(16711680, 60031119);
                    int17 = 0;
                };
                break;
            }
            case 3: {
                if ((int8 > varplayer_3443)) {
                    IF_SETCOLOUR(16711680, 60031119);
                    int17 = 0;
                };
                break;
            }
            case 4: {
                if ((int8 > varplayer_3444)) {
                    IF_SETCOLOUR(16711680, 60031119);
                    int17 = 0;
                };
                break;
            }
            case 5: {
                if ((int8 > varplayer_3445)) {
                    IF_SETCOLOUR(16711680, 60031119);
                    int17 = 0;
                };
                break;
            }
            case 6: {
                if ((int8 > varplayer_3446)) {
                    IF_SETCOLOUR(16711680, 60031119);
                    int17 = 0;
                };
                break;
            }
            case 7: {
                if ((int8 > varplayer_3447)) {
                    IF_SETCOLOUR(16711680, 60031119);
                    int17 = 0;
                };
                break;
            }
            case 8: {
                if ((int8 > varplayer_4038)) {
                    IF_SETCOLOUR(16711680, 60031119);
                    int17 = 0;
                };
                break;
            }
            case 9: {
                if ((int8 > varplayer_4039)) {
                    IF_SETCOLOUR(16711680, 60031119);
                    int17 = 0;
                };
                break;
            }
        };
        string1 = ` ${inttostring(int8, 10)}`;
        if ((((int7 > 0) && (int7 < 10)) && (int8 > 0))) {
            IF_SETTEXT(string1, 60031119);
            stack(enum_getvalue(0, 23, 7153 as cs2enum, int7));
            stack(60031118);
            IF_SETGRAPHIC();
            IF_SETSIZE(17, 17, 0, 0, 60031118);
        } else {
            IF_SETTEXT("", 60031119);
            stack(-1);
            stack(60031118);
            IF_SETGRAPHIC();
        };
        IF_SETHIDE(0, 60031114);
        IF_SETHIDE(1, 60031104);
        script13969(60031120, -1, 28553, "Buy");
        script13971(60031121, -1, 28553, "Buy", 1);
        if ((int17 == 0)) {
            IF_SETHIDE(0, 60031121);
            if ((CC_FIND(60031091, int0) == 1)) {
                CC_SETGRAPHIC(9998);
            };
        } else {
            IF_SETHIDE(1, 60031121);
        };
    } else if ((varplayer_3391 == int3)) {
        IF_SETHIDE(1, 60031114);
        IF_SETHIDE(1, 60031104);
        script13969(60031120, -1, 28553, "Close");
        script13971(60031121, -1, 28553, "Close", 1);
        IF_SETHIDE(1, 60031121);
    } else {
        string2 = inttostring(varclient_2612, 10);
        string3 = inttostring(varclient_2616, 10);
        string4 = inttostring(varclient_2614, 10);
        string5 = inttostring(varclient_2618, 10);
        IF_SETTEXT(string2, 60031109);
        IF_SETTEXT(string3, 60031106);
        IF_SETTEXT(string4, 60031107);
        IF_SETTEXT(string5, 60031108);
        if ((int9 < varclient_2612)) {
            IF_SETCOLOUR(1936391, 60031109);
        } else if ((int9 > varclient_2612)) {
            IF_SETCOLOUR(16711680, 60031109);
        } else {
            IF_SETCOLOUR(16446166, 60031109);
        };
        if ((int11 < varclient_2616)) {
            IF_SETCOLOUR(1936391, 60031106);
        } else if ((int11 > varclient_2616)) {
            IF_SETCOLOUR(16711680, 60031106);
        } else {
            IF_SETCOLOUR(16446166, 60031106);
        };
        if ((int13 < varclient_2614)) {
            IF_SETCOLOUR(1936391, 60031107);
        } else if ((int13 > varclient_2614)) {
            IF_SETCOLOUR(16711680, 60031107);
        } else {
            IF_SETCOLOUR(16446166, 60031107);
        };
        if ((int15 < varclient_2618)) {
            IF_SETCOLOUR(1936391, 60031108);
        } else if ((int15 > varclient_2618)) {
            IF_SETCOLOUR(16711680, 60031108);
        } else {
            IF_SETCOLOUR(16446166, 60031108);
        };
        IF_SETHIDE(1, 60031114);
        IF_SETHIDE(0, 60031104);
        script13969(60031120, -1, 28553, "Activate");
        script13971(60031121, -1, 28553, "Activate", 1);
        IF_SETHIDE(1, 60031121);
    };
    return;
}