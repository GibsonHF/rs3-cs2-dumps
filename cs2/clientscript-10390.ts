//
function script10390(int0: struct, int1: int): int {
    CC_DELETEALL(comp(1524, 87));
    if ((int0 == -1 as struct)) {
        return 0;
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = IF_GETWIDTH(comp(1524, 87));
    var int5 = 40;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = struct_getparam(int0, 4503);
    var int11 = struct_getparam(int0, 4504);
    var int12 = -1 as struct;
    var int13 = -1 as graphic;
    var int14 = -1 as obj;
    var string0 = "";
    var int15 = 1;
    var int16 = -1;
    varclient_4502 = true;
    if (((MAP_MEMBERS() == 0) && (struct_getparam(int0, 1290) == 2))) {
        varclient_4502 = false;
        [int2, int3] = script10391(0, -1 as obj, 21354 as graphic, "This content is only available on members' worlds.", int2, int3, int4, int5);
        [int2, int3] = [0, (int3 + int5)];
    };
    while ((int6 < 12)) {
        [int15, int13, int14, int12] = [1, -1 as graphic, -1 as obj, -1 as struct];
        switch (int6) {
            case 0: {
                [int7, int8] = [struct_getparam(int0, 1294), struct_getparam(int0, 1295)];
                break;
            }
            case 1: {
                [int7, int8] = [struct_getparam(int0, 1296), struct_getparam(int0, 1297)];
                break;
            }
            case 2: {
                [int7, int8] = [struct_getparam(int0, 1298), struct_getparam(int0, 1299)];
                break;
            }
            case 3: {
                [int7, int8] = [struct_getparam(int0, 1300), struct_getparam(int0, 1301)];
                break;
            }
            case 4: {
                [int7, int8] = [struct_getparam(int0, 1302), struct_getparam(int0, 1303)];
                break;
            }
            case 5: {
                [int7, int8] = [struct_getparam(int0, 1304), struct_getparam(int0, 1305)];
                break;
            }
            case 6: {
                [int7, int8] = [struct_getparam(int0, 1306), struct_getparam(int0, 1307)];
                break;
            }
            case 7: {
                [int7, int8] = [struct_getparam(int0, 1308), struct_getparam(int0, 1309)];
                break;
            }
            case 8: {
                [int7, int8] = [struct_getparam(int0, 1310), struct_getparam(int0, 1311)];
                break;
            }
            case 9: {
                [int7, int8] = [struct_getparam(int0, 1312), struct_getparam(int0, 1313)];
                break;
            }
            case 10: {
                [int7, int8] = [struct_getparam(int0, 2227), struct_getparam(int0, 2228)];
                break;
            }
            case 11: {
                [int7, int8] = [struct_getparam(int0, 2229), struct_getparam(int0, 2230)];
                break;
            }
        };
        if (((int7 > 0) && (int7 < 60))) {
            stack(enum_getvalue(0, 23, 8548 as cs2enum, int7));
            stack(`You need level ${inttostring(int8, 10)} in: ${enum_getvalue(0, 36, 108 as cs2enum, int7)}`);
            [int13, string0] = stack();
            if ((STAT_BASE(enum_getvalue(0, 17, 681 as cs2enum, int7)) < int8)) {
                int15 = 0;
            };
        } else {
            switch (int7) {
                case 60: {
                    int12 = script5795(int8);
                    if ((int12 != -1 as struct)) {
                        if ((struct_getparam(int12, 1345) > 0)) {
                            int13 = script2107(enum_getvalue(0, 3, 2252 as cs2enum, struct_getparam(int12, 1345)));
                        } else {
                            int13 = struct_getparam(int12, 1271);
                        };
                        string0 = `You must have completed the task: '${struct_getparam(int12, 1266)}'`;
                        if ((script3227(struct_getparam(int12, 1268)) != 2)) {
                            int15 = 0;
                        };
                        int12 = -1 as struct;
                    };
                    break;
                }
                case 61: {
                    int13 = script2107(enum_getvalue(0, 3, 2252 as cs2enum, int8));
                    string0 = `You must have completed the quest: '${script1525(int8)}'`;
                    if ((script1524(int8) == 0)) {
                        int15 = 0;
                    };
                    break;
                }
                case 62: {
                    if ((int0 == 7212 as struct)) {
                        int13 = script2107(enum_getvalue(0, 3, 2252 as cs2enum, int8));
                        string0 = "You must have received a warning about the contents of the tombs.";
                        if ((varbitplayer_36034 == 0)) {
                            int15 = 0;
                        };
                    } else if ((int0 == 683 as struct)) {
                        int13 = 10371 as graphic;
                        string0 = "You must first travel to Anachronia, via the boat at the dig site east of Varrock.";
                        if ((varbitplayer_44469 != 50)) {
                            int15 = 0;
                        };
                    };
                    break;
                }
                case 66: {
                    switch (int0) {
                        case 40485: {
                            if ((script680() == 0)) {
                                int15 = 0;
                            };
                            break;
                        }
                        case 40367: {
                            if ((script735() == 0)) {
                                int15 = 0;
                            };
                            break;
                        }
                        case 4505: {
                            if ((script3494() == 0)) {
                                int15 = 0;
                            };
                            break;
                        }
                        case 46269: {
                            if ((script16489() == 0)) {
                                int15 = 0;
                            };
                            break;
                        }
                    };
                    int13 = struct_getparam(int0, 1271);
                    if (((strcmp(struct_getparam(int0, 8082), "") != 0) && (script6431() == true))) {
                        string0 = struct_getparam(int0, 8082);
                    } else {
                        string0 = struct_getparam(int0, 1274);
                    };
                    break;
                }
                case 0: {
                    int6 = 12;
                    break;
                }
            };
        };
        int6 = (int6 + 1);
        if ((int13 != -1 as graphic)) {
            [int2, int3] = script10391(int15, int14, int13, string0, int2, int3, int4, int5);
        };
    };
    if ((int1 == 8)) {
        stack(30004 as obj);
        stack("One member of your group must own a barrows totem.");
        [int14, string0] = stack();
    };
    if ((int14 != -1 as obj)) {
        if ((int14 == 30004 as obj)) {
            int15 = 1;
        } else if ((script259(int14) > 0)) {
            int15 = 1;
        } else {
            int15 = 0;
        };
        [int2, int3] = script10391(int15, int14, -1 as graphic, string0, int2, int3, int4, int5);
    };
    if (((int10 != -1) || (int11 != -1))) {
        if ((int10 != -1)) {
            string0 = `You need a combat level of ${inttostring(int10, 10)}`;
            if ((script1432() >= int10)) {
                int15 = 1;
            } else {
                int15 = 0;
            };
        } else if ((int11 != -1)) {
            if ((varclient_4502 == true)) {
                int16 = 0;
            };
            string0 = `It is recommended to have a combat level of ${inttostring(int11, 10)}`;
            if ((script1432() >= int11)) {
                int15 = 1;
            } else {
                int15 = 0;
            };
        };
        [int2, int3] = script10391(int15, -1 as obj, 237 as graphic, string0, int2, int3, int4, int5);
        if ((int16 == 0)) {
            varclient_4502 = true;
        };
    };
    if ((int2 > 0)) {
        int3 = (int3 + int5);
    };
    string0 = struct_getparam(int0, 4505);
    if ((strcmp("", string0) != 0)) {
        int15 = 1;
        int3 = script8891(comp(1524, 87), string0, 0, int3, 0);
        switch (int1) {
            case 0: {
                if ((varbitplayer_2366 < 6)) {
                    int15 = 0;
                };
                break;
            }
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: {
                if (((STAT_BASE(16 as stat) < 60) && (STAT_BASE(2 as stat) < 60))) {
                    int15 = 0;
                };
                if ((varbitplayer_15159 == 0)) {
                    int15 = 0;
                };
                break;
            }
            case 15: {
                if ((varbitplayer_4527 < 11)) {
                    int15 = 0;
                };
                break;
            }
            case 16: {
                if ((varbitplayer_5420 == 0)) {
                    int15 = 0;
                };
                break;
            }
            case 19: {
                if (((((STAT_BASE(11 as stat) < 30) && (STAT_BASE(2 as stat) < 30)) && (STAT_BASE(16 as stat) < 30)) && (STAT_BASE(12 as stat) < 30))) {
                    int15 = 0;
                };
                if (((STAT_BASE(13 as stat) < 60) && branch_lt_long[629](script17400(), 2500n))) {
                    int15 = 0;
                };
                break;
            }
            case 20: {
                if ((varbitplayer_5208 < 28)) {
                    int15 = 0;
                };
                break;
            }
            case 8:
            case 24:
            case 38: {
                if ((varbitplayer_9663 == 0)) {
                    int15 = 0;
                };
                break;
            }
        };
        if ((int15 == 0)) {
            varclient_4502 = false;
            int3 = script8891(comp(1524, 87), "<br>You do not meet this requirement.", 0, int3, 1);
        };
    };
    if (((struct_getparam(int0, 4511) == true) && (MAP_LANG() != 0))) {
        varclient_4502 = false;
        int3 = script8891(comp(1524, 87), "This content is only available on English worlds.", 0, int3, 1);
    };
    if ((int3 == 0)) {
        int3 = script8891(comp(1524, 87), "This content has no requirements.", 0, int3, 0);
    };
    return MAX(int3, 40);
}