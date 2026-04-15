//
function script6995(int0: unknown_int, int1: int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: int): void {
    if (((int1 < 1) || (int1 > 14))) {
        return;
    };
    var int6 = script11800(script11798(int0));
    if ((script10505(int6) == 0)) {
        return;
    };
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = -1 as obj;
    var int17 = -1 as cs2enum;
    var int18 = -1 as graphic;
    var string0 = "";
    var string1 = "Activate";
    var string2 = "";
    var int19 = -1 as struct;
    var int20 = -1 as struct;
    var int21 = 0;
    var int22 = 0;
    var int23 = 1;
    var int24 = 1;
    var int25 = 1;
    var int26 = 0;
    var int27 = 0;
    var int28 = script1580(int0, int1);
    var int29 = script7974(int0, int1);
    var int30 = script313(int0, int1);
    var int31 = script7975(int0, int1);
    var int32 = script7977(int0, int1);
    var int33 = script7979(int0, int1);
    var int34 = script7976(int0, int1);
    IF_SETHIDE(true, int30);
    var int35 = -1 as obj;
    var int36 = -1;
    var int37 = -1;
    var int38 = -1;
    var int39 = int1;
    var int40 = script6431();
    [int7, int8, int16] = script11797(int6, int1);
    switch (int0) {
        case 1430:
        case 1436: {
            [int11, int12] = script8825(5, int1);
            int38 = 1;
            break;
        }
        case 1670: {
            [int11, int12] = script8825(5, (14 + int1));
            int38 = 2;
            break;
        }
        case 1671: {
            [int11, int12] = script8825(5, ((2 * 14) + int1));
            int38 = 3;
            break;
        }
        case 1672: {
            [int11, int12] = script8825(5, ((3 * 14) + int1));
            int38 = 4;
            break;
        }
        case 1673: {
            [int11, int12] = script8825(5, ((4 * 14) + int1));
            int38 = 5;
            break;
        }
        case 1924:
        case 1925: {
            int24 = 0;
            break;
        }
        case 1945:
        case 1946: {
            int24 = 0;
            int25 = 0;
            break;
        }
    };
    if ((int7 == 14)) {
        int16 = INV_GETOBJ(94 as inv, int8);
    };
    IF_SETTRANS(255, int34);
    IF_SETONVARTRANSMIT(callback(), int34);
    if ((int2 == 0)) {
        if ((int7 != 0)) {
            int23 = 0;
        };
        if ((int16 != -1 as obj)) {
            int23 = 0;
        };
    };
    if ((int0 == 1924)) {
        int26 = 1;
    } else if (((int0 == 1945) || (int0 == 1946))) {
        int27 = 1;
    };
    var int41 = 0;
    if ((IF_FIND(int29) == 1)) {
        if ((int40 == false)) {
            CC_SETDRAGDEADTIME(15);
            CC_SETDRAGDEADZONE(15);
        } else {
            CC_SETDRAGDEADZONE(20);
            CC_SETDRAGDEADTIME(5);
        };
        if ((int23 == 1)) {
            CC_SETGRAPHIC(-1 as graphic);
            CC_SETOBJECT(-1 as obj, -1);
            CC_CLEARSCRIPTHOOKS();
            CC_CLEAROPS();
            CC_SETOPBASE("");
            if ((int26 == 1)) {
                CC_SETSIZE(52, 52, 0, 0);
            } else if ((int40 == true)) {
                CC_SETSIZE(26, 26, 0, 0);
            } else {
                CC_SETSIZE(30, 30, 0, 0);
            };
            if ((int27 == 1)) {
                CC_SETSIZE(36, 36, 0, 0);
            };
            CC_SETPOSITION(0, 0, 1, 1);
            CC_SETTARGETVERB("");
            CC_SETONDRAG(callback(script7969, -2147483645, -2147483643));
            CC_SETONDRAGCOMPLETE(callback(script7001, -2147483645, -2147483643, -2147483642));
            if ((int40 == 0)) {
                CC_SETDRAGDEADZONE(10);
                CC_SETDRAGDEADTIME(10);
            } else {
                CC_SETDRAGDEADZONE(20);
                CC_SETDRAGDEADTIME(5);
            };
            CC_SETCOLOUR(16777215);
            if ((int24 == 1)) {
                CC_SETOP(10, "Customise keybind");
                CC_SETONOP(callback(script7023, int0, int1, -2147483645, -2147483644));
            };
            CC_SETONVARTRANSMIT(callback());
            CC_SETONINVTRANSMIT(callback());
            CC_SETONSTATTRANSMIT(callback());
            script7033();
            IF_SETONVARTRANSMIT(callback(), int31);
            IF_SETTRANS(255, int31);
            IF_SETONTIMER(callback(), int31);
            cc_setparam(3438, -1);
            cc_setparam(5313, 0);
            cc_setparam(5314, 0);
            script7968(int32, 0);
        } else if ((int16 != -1 as obj)) {
            CC_CLEARSCRIPTHOOKS();
            CC_CLEAROPS();
            CC_SETTARGETVERB("");
            [int35, int36, int37] = script196(int16);
            int19 = item_getparam(int35, 2281);
            string0 = struct_getparam(int19, 2524);
            if ((STRING_LENGTH(string0) < 1)) {
                string0 = OC_NAME(int35);
            };
            CC_SETONINVTRANSMIT(callback(script6996, int29, int1, int32, int24, int3, int11, int12, int7, int8, int0, 93, 94, 2));
            CC_SETOPBASE(`${script4033(int35)}${string0}`);
            cc_setparam(3438, -1);
            script6997(int29, int1, int35, int37, int32, int24, int3, int11, int12, int7, int8, int0, 0);
            if ((int26 == 1)) {
                CC_SETSIZE(56, 52, 0, 0);
            } else {
                CC_SETSIZE(36, 32, 0, 0);
            };
            if ((int27 == 1)) {
                CC_SETSIZE(36, 36, 0, 0);
            };
            CC_SETPOSITION(3, 0, 1, 1);
            CC_SETHIDE(false);
            CC_SETONDRAG(callback(script7969, -2147483645, -2147483643));
            CC_SETONDRAGCOMPLETE(callback(script7001, -2147483645, -2147483643, -2147483642));
            IF_SETONVARTRANSMIT(callback(), int31);
            IF_SETTRANS(255, int31);
            IF_SETONTIMER(callback(), int31);
        } else if (((int7 > 0) && ((((int8 > 0) || (int7 == 9)) || (int7 == 14)) || (int7 == 18)))) {
            if (((int4 == 0) && (int7 != 14))) {
                CC_CLEARSCRIPTHOOKS();
            };
            CC_CLEAROPS();
            CC_SETOPBASE("");
            CC_SETTARGETVERB("");
            CC_SETCOLOUR(16777215);
            switch (int7) {
                case 1: {
                    int17 = 10147 as cs2enum;
                    int41 = 1;
                    break;
                }
                case 5: {
                    int17 = 6738 as cs2enum;
                    int41 = 1;
                    break;
                }
                case 17: {
                    int17 = 16973 as cs2enum;
                    int41 = 1;
                    break;
                }
                case 3: {
                    int17 = 6736 as cs2enum;
                    int41 = 1;
                    break;
                }
                case 4: {
                    int17 = 6737 as cs2enum;
                    int41 = 1;
                    break;
                }
                case 7: {
                    int20 = enum_getvalue(0, 73, 6739 as cs2enum, int8);
                    int20 = script8247(int20);
                    int18 = script11778(int20, 1);
                    string0 = struct_getparam(int20, 2794);
                    int9 = 30;
                    int10 = 30;
                    IF_SETONVARTRANSMIT(callback(script7028, int29, int34, int20, 0, 1028, 3272, 3273, 3275, 5859, 12219, 6), int34);
                    script7029(int29, int34, int20, 1);
                    break;
                }
                case 6: {
                    int20 = enum_getvalue(0, 73, 6740 as cs2enum, int8);
                    int20 = script8247(int20);
                    int18 = script11778(int20, 1);
                    string0 = struct_getparam(int20, 2794);
                    int9 = 30;
                    int10 = 30;
                    if ((((int20 == 32942 as struct) || (int20 == 32943 as struct)) || (int20 == 43909 as struct))) {
                        string1 = "Activate";
                    } else {
                        string1 = "Cast";
                    };
                    int41 = 1;
                    break;
                }
                case 11: {
                    int20 = enum_getvalue(0, 73, 13200 as cs2enum, int8);
                    int20 = script8247(int20);
                    int18 = script11778(int20, 1);
                    string0 = struct_getparam(int20, 2794);
                    if ((int20 == 14875 as struct)) {
                        int9 = 30;
                        int10 = 30;
                    } else {
                        int9 = 34;
                        int10 = 34;
                    };
                    string1 = "Cast";
                    break;
                }
                case 8: {
                    int20 = 14722 as struct;
                    int20 = script8247(int20);
                    if ((varplayer_463 == 0)) {
                        int18 = 18819 as graphic;
                    } else {
                        int18 = 18818 as graphic;
                    };
                    string0 = struct_getparam(int20, 2794);
                    int9 = 22;
                    int10 = 28;
                    break;
                }
                case 9: {
                    int20 = enum_getvalue(0, 73, 3874 as cs2enum, int8);
                    int20 = script8247(int20);
                    int18 = struct_getparam(int20, 1420);
                    string0 = struct_getparam(int20, 1419);
                    int9 = 30;
                    int10 = 30;
                    string1 = "Perform";
                    break;
                }
                case 18: {
                    int20 = 33966 as struct;
                    int18 = script18781(int8);
                    string0 = script18782(int8);
                    int9 = 30;
                    int10 = 30;
                    string1 = "Perform";
                    break;
                }
                case 12: {
                    int20 = 14723 as struct;
                    int20 = script8247(int20);
                    int18 = struct_getparam(int20, 2802);
                    string0 = struct_getparam(int20, 2794);
                    int9 = 30;
                    int10 = 30;
                    break;
                }
                case 13: {
                    int20 = enum_getvalue(0, 73, 5178 as cs2enum, int8);
                    int20 = script8247(int20);
                    int18 = struct_getparam(int20, 2802);
                    string0 = struct_getparam(int20, 2794);
                    int9 = 30;
                    int10 = 30;
                    break;
                }
                case 14: {
                    int20 = 4106 as struct;
                    int18 = script8478(94 as inv, int8, 0);
                    string0 = enum_getvalue(0, 36, 974 as cs2enum, int8);
                    int9 = 36;
                    int10 = 32;
                    break;
                }
                case 16: {
                    int20 = 24325 as struct;
                    if ((varplayer_462 == 1)) {
                        int18 = 18854 as graphic;
                    } else {
                        int18 = 20254 as graphic;
                    };
                    string0 = struct_getparam(int20, 2794);
                    int9 = 30;
                    int10 = 30;
                    break;
                }
                default: {
                    return;
                }
            };
            if ((int17 != -1 as cs2enum)) {
                int20 = enum_getvalue(0, 73, int17, int8);
                int20 = script8247(int20);
                if ((int20 == -1 as struct)) {
                    return;
                };
                int21 = script17453(int20);
                if ((int21 == 1)) {
                    int18 = script17689(int20, 1);
                    string1 = "Deactivate";
                } else {
                    int18 = script11778(int20, 1);
                };
                string0 = struct_getparam(int20, 2794);
                int9 = 30;
                int10 = 30;
            };
            CC_SETOBJECT(-1 as obj, -1);
            CC_SETGRAPHIC(int18);
            cc_setparam(7540, 1);
            cc_setparam(7544, int20);
            cc_setparam(3438, int20);
            if ((int26 == 1)) {
                CC_SETSIZE(52, 52, 0, 0);
                CC_SETPOSITION(0, 0, 1, 1);
                if ((int7 == 12)) {
                    CC_SETPOSITION(2, 1, 1, 1);
                };
            } else if ((int40 == true)) {
                CC_SETSIZE(26, 26, 0, 0);
                CC_SETPOSITION(0, 0, 1, 1);
            } else {
                CC_SETSIZE(int9, int10, 0, 0);
                CC_SETPOSITION(0, 0, 1, 1);
            };
            if ((int27 == 1)) {
                CC_SETSIZE(36, 36, 0, 0);
                CC_SETPOSITION(0, 0, 1, 1);
            };
            if ((struct_getparam(int20, 2875) == 1)) {
                CC_CLEAROPS();
                CC_SETTARGETVERB(string1);
                if ((int24 == 1)) {
                    CC_SETOP(10, "Customise keybind");
                    CC_SETONOP(callback(script7023, int0, int1, -2147483645, -2147483644));
                    script7033();
                    if (((int3 == 0) && (script792() == 0))) {
                        script3898(int11, int12, int29, -1);
                    };
                };
                CC_SETONTARGETENTER(callback(script7006, -2147483645));
                stack(7007);
                stack(-2147483645);
                stack("i");
                CC_SETONTARGETLEAVE();
                stack(int20);
                stack(2803);
                struct_getparam();
                CC_SETTARGETCURSORS(stack(), 158);
            } else {
                if ((int20 == 14724 as struct)) {
                    CC_CLEAROPS();
                    CC_CLEARSCRIPTHOOKS();
                    script7033();
                    CC_SETOPTKEY(-1, 0);
                    if ((int5 != -1)) {
                        varbitplayer_6068 = int5;
                        int14 = int5;
                    } else {
                        int14 = varbitplayer_6068;
                    };
                    if ((varclient_6250 == true)) {
                        if ((int14 == 2)) {
                            CC_SETOP(1, enum_getvalue(0, 36, 10304 as cs2enum, 2));
                        } else if ((int14 >= 3)) {
                            CC_SETOP(3, enum_getvalue(0, 36, 10304 as cs2enum, 2));
                        } else {
                            CC_SETOP(2, enum_getvalue(0, 36, 10304 as cs2enum, 2));
                        };
                    };
                    if ((varclient_6252 == true)) {
                        if ((int14 == 3)) {
                            CC_SETOP(1, enum_getvalue(0, 36, 10304 as cs2enum, 3));
                        } else if ((int14 >= 4)) {
                            CC_SETOP(4, enum_getvalue(0, 36, 10304 as cs2enum, 3));
                        } else {
                            CC_SETOP(3, enum_getvalue(0, 36, 10304 as cs2enum, 3));
                        };
                    };
                    if ((varclient_6251 == true)) {
                        if ((int14 == 4)) {
                            CC_SETOP(1, enum_getvalue(0, 36, 10304 as cs2enum, 4));
                        } else if ((int14 >= 5)) {
                            CC_SETOP(5, enum_getvalue(0, 36, 10304 as cs2enum, 4));
                        } else {
                            CC_SETOP(4, enum_getvalue(0, 36, 10304 as cs2enum, 4));
                        };
                    };
                    if ((varclient_6248 == true)) {
                        if ((int14 == 5)) {
                            CC_SETOP(1, enum_getvalue(0, 36, 10304 as cs2enum, 5));
                        } else if ((int14 >= 6)) {
                            CC_SETOP(6, enum_getvalue(0, 36, 10304 as cs2enum, 5));
                        } else {
                            CC_SETOP(5, enum_getvalue(0, 36, 10304 as cs2enum, 5));
                        };
                    };
                    if ((varclient_6255 == true)) {
                        if ((int14 == 6)) {
                            CC_SETOP(1, enum_getvalue(0, 36, 10304 as cs2enum, 6));
                        } else if ((int14 >= 7)) {
                            CC_SETOP(7, enum_getvalue(0, 36, 10304 as cs2enum, 6));
                        } else {
                            CC_SETOP(6, enum_getvalue(0, 36, 10304 as cs2enum, 6));
                        };
                    };
                    if ((varclient_6254 == true)) {
                        if ((int14 == 7)) {
                            CC_SETOP(1, enum_getvalue(0, 36, 10304 as cs2enum, 7));
                        } else if ((int14 >= 8)) {
                            CC_SETOP(8, enum_getvalue(0, 36, 10304 as cs2enum, 7));
                        } else {
                            CC_SETOP(7, enum_getvalue(0, 36, 10304 as cs2enum, 7));
                        };
                    };
                    if ((varclient_6253 == true)) {
                        if ((int14 == 8)) {
                            CC_SETOP(1, enum_getvalue(0, 36, 10304 as cs2enum, 8));
                        } else if ((int14 >= 9)) {
                            CC_SETOP(9, enum_getvalue(0, 36, 10304 as cs2enum, 8));
                        } else {
                            CC_SETOP(8, enum_getvalue(0, 36, 10304 as cs2enum, 8));
                        };
                        if ((int14 == 9)) {
                            CC_SETOP(1, enum_getvalue(0, 36, 10304 as cs2enum, 9));
                        } else if ((int14 >= 10)) {
                            CC_SETOP(10, enum_getvalue(0, 36, 10304 as cs2enum, 9));
                        } else {
                            CC_SETOP(9, enum_getvalue(0, 36, 10304 as cs2enum, 9));
                        };
                    };
                    if ((varclient_6249 == true)) {
                        if ((script340() == 0)) {
                            if ((strcmp(varclient_2516, "") != 0)) {
                                if ((int14 == 1)) {
                                    CC_SETOP(1, `Cast <col=00ff00>${varclient_2516}`);
                                } else if ((int14 >= 2)) {
                                    CC_SETOP(2, `Cast <col=00ff00>${varclient_2516}`);
                                };
                            };
                        } else {
                            int22 = 1;
                            CC_SETOP(10, "Customise keybind");
                            CC_SETONOP(callback(script7023, int0, int1, -2147483645, -2147483644));
                            if ((int14 == 1)) {
                                IF_SETHIDE(false, int30);
                                if ((((int24 == 1) && (int3 == 0)) && (varbitplayer_38842 == 0))) {
                                    script3898(int11, int12, int30, -1);
                                };
                                stack(7006);
                                stack(-2147483645);
                                stack("i");
                                stack(int30);
                                IF_SETONTARGETENTER();
                                IF_SETONTARGETLEAVE(callback(script7007, -2147483645), int30);
                                IF_SETTARGETVERB(`Cast <col=00ff00>${varclient_2516}`, int30);
                            } else {
                                if ((((int24 == 1) && (int3 == 0)) && (script792() == 0))) {
                                    script3875(1, int11, int12, int29, -1);
                                };
                                CC_SETONTARGETENTER(callback(script7006, -2147483645));
                                stack(7007);
                                stack(-2147483645);
                                stack("i");
                                CC_SETONTARGETLEAVE();
                                CC_SETTARGETVERB(`Cast <col=00ff00>${varclient_2516}`);
                            };
                        };
                    };
                    if (((((((((varclient_6250 == false) && (varclient_6252 == false)) && (varclient_6251 == false)) && (varclient_6248 == false)) && (varclient_6255 == false)) && (varclient_6254 == false)) && (varclient_6253 == false)) && (varclient_6249 == false))) {
                        CC_SETOP(1, "Summon Pet");
                        CC_SETOP(2, "Open Pet Interface");
                        CC_SETOP(3, "Settings");
                    };
                } else if ((int20 == 27699 as struct)) {
                    if ((script8085() != 1)) {
                        CC_SETOP(1, "Cast Familiar Special Ability");
                    } else if ((script7034() == 5)) {
                        CC_SETOP(1, `Cast <col=00ff00>${varclient_2516}</col>`);
                    };
                    CC_SETOP(10, "Customise keybind");
                    CC_SETONOP(callback(script7023, int0, int1, -2147483645, -2147483644));
                    if ((script340() == 1)) {
                        int22 = 1;
                        IF_SETHIDE(false, int30);
                        if ((((int24 == 1) && (int3 == 0)) && (varbitplayer_38842 == 0))) {
                            script3898(int11, int12, int30, -1);
                        };
                        stack(7006);
                        stack(-2147483645);
                        stack("i");
                        stack(int30);
                        IF_SETONTARGETENTER();
                        IF_SETONTARGETLEAVE(callback(script7007, -2147483645), int30);
                        IF_SETTARGETVERB(`Cast <col=00ff00>${varclient_2516}</col>`, int30);
                    };
                } else if ((int20 == 27702 as struct)) {
                    int22 = 1;
                    CC_SETOP(10, "Customise keybind <col=00ff00>Familiar attack</col>");
                    CC_SETONOP(callback(script7023, int0, int1, -2147483645, -2147483644));
                    IF_SETHIDE(0, int30);
                    if ((((int24 == 1) && (int3 == 0)) && (script792() == 0))) {
                        script3898(int11, int12, int30, -1);
                    };
                    stack(7006);
                    stack(-2147483645);
                    stack("i");
                    stack(int30);
                    IF_SETONTARGETENTER();
                    IF_SETONTARGETLEAVE(callback(script7007, -2147483645), int30);
                    IF_SETTARGETVERB("Attack Target", int30);
                } else {
                    CC_SETOP(1, string1);
                    switch (int20) {
                        case 14875: {
                            CC_SETOP(2, "Previous destination");
                            break;
                        }
                        case 14873: {
                            CC_SETOP(2, "Cast Normal");
                            CC_SETOP(3, "Cast Ancient");
                            break;
                        }
                        case 32261: {
                            CC_SETOP(2, "Cast Normal");
                            CC_SETOP(3, "Cast Lunar");
                            break;
                        }
                        case 33965: {
                            CC_SETOP(2, "Customise");
                            break;
                        }
                        case 53006: {
                            CC_SETOP(2, "Marigold Farm");
                            break;
                        }
                    };
                    script12513(int20);
                };
                if (((((int24 == 1) && (int20 != 27699 as struct)) && (int20 != 27702 as struct)) && (int20 != 14724 as struct))) {
                    CC_SETOP(10, "Customise keybind");
                    CC_SETONOP(callback(script7023, int0, int1, -2147483645, -2147483644));
                };
                if ((int22 == 0)) {
                    script7033();
                    if (((int3 == 0) && (script792() == 0))) {
                        script3875(1, int11, int12, int29, -1);
                    };
                    CC_SETONTARGETENTER(callback());
                    stack(-1);
                    stack("");
                    CC_SETONTARGETLEAVE();
                };
            };
            if ((struct_getparam(int20, 2874) == 1)) {
                CC_SETOP(9, "Auto-cast");
                IF_SETTRANS(255, int31);
                IF_SETONTIMER(callback(), int31);
                switch (int0) {
                    case 1430:
                    case 1670:
                    case 1671:
                    case 1672:
                    case 1673: {
                        IF_SETONVARTRANSMIT(callback(script7052, int0, int1, int20, 0, 1), int31);
                        break;
                    }
                };
            } else {
                IF_SETONVARTRANSMIT(callback(), int31);
                IF_SETTRANS(255, int31);
                IF_SETONTIMER(callback(), int31);
            };
            if ((((int20 != 14724 as struct) && (int20 != 27699 as struct)) && (int20 != 27702 as struct))) {
                CC_SETOPBASE(`<col=00ff00>${string0}</col>`);
            };
            CC_SETHIDE(false);
            switch (int7) {
                case 8: {
                    CC_SETONVARTRANSMIT(callback(script7017, -2147483645, 463, 1));
                    CC_SETONINVTRANSMIT(callback());
                    script7968(int32, 1);
                    break;
                }
                case 9:
                case 18:
                case 12:
                case 13:
                case 11: {
                    script7968(int32, 1);
                    break;
                }
                case 14: {
                    CC_SETONINVTRANSMIT(callback(script6994, int0, int1, 94, 1));
                    break;
                }
                default: {
                    CC_SETONVARTRANSMIT(callback(script7003, int29, -1, struct_getparam(int20, 2799), int20, int32, 1, 679, 1180, 1185, 4, 12219, 3274, 11315, 7));
                    script7004(int29, -1, struct_getparam(int20, 2799), int20, int32, 1);
                    CC_SETONINVTRANSMIT(callback(script7003, int29, -1, struct_getparam(int20, 2799), int20, int32, 1, 94, 93, 2));
                    CC_SETONSTATTRANSMIT(callback(script7003, int29, -1, struct_getparam(int20, 2799), int20, int32, 1, 0, 2, 1, 4, 6, 28, 3, 16, 8));
                    break;
                }
            };
            if (((varbitplayer_1892 == 0) && (varbitplayer_38842 == 0))) {
                switch (int7) {
                    case 9:
                    case 18:
                    case 8: {
                        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
                        break;
                    }
                    case 14: {
                        string2 = `${string0}<br><br>Equip an item in this worn slot and it will automatically take this place.<br>Unequip the item and this slot will revert to this state.`;
                        CC_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643));
                        break;
                    }
                    default: {
                        CC_SETONMOUSEREPEAT(callback(script8448, int20, -2147483645, -2147483643));
                        cc_setparam(7540, 1);
                        cc_setparam(7544, int20);
                        break;
                    }
                };
                CC_SETONMOUSELEAVE(callback(script8805));
            } else {
                CC_SETONMOUSEREPEAT(callback());
                CC_SETONMOUSELEAVE(callback());
            };
            CC_SETONDRAG(callback(script7969, -2147483645, -2147483643));
            CC_SETONDRAGCOMPLETE(callback(script7001, -2147483645, -2147483643, -2147483642));
        };
        if (((int2 == 0) && (int24 == 1))) {
            IF_SETTEXT(script8213(int11, int12, 1, 1), int32);
        };
        if ((int25 == 0)) {
            CC_CLEAROPS();
        };
        if (((int41 == 1) && (struct_getparam(int20, 4652) == 0))) {
            script11816(int20);
        };
    };
    if (((int28 != comp(-1, 65535)) && (IF_FIND(int28) == 1))) {
        if ((varbitplayer_38842 == 1)) {
            CC_SETNOCLICKTHROUGH(false);
        } else {
            CC_SETNOCLICKTHROUGH(true);
        };
        switch (int6) {
            case 0: {
                break;
            }
            case 1: {
                switch (int39) {
                    case 1: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 739, 823, 2));
                        break;
                    }
                    case 2: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 740, 824, 2));
                        break;
                    }
                    case 3: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 741, 825, 2));
                        break;
                    }
                    case 4: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 742, 826, 2));
                        break;
                    }
                    case 5: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 743, 827, 2));
                        break;
                    }
                    case 6: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 744, 828, 2));
                        break;
                    }
                    case 7: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 745, 829, 2));
                        break;
                    }
                    case 8: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 746, 830, 2));
                        break;
                    }
                    case 9: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 747, 831, 2));
                        break;
                    }
                    case 10: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 748, 832, 2));
                        break;
                    }
                    case 11: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 749, 833, 2));
                        break;
                    }
                    case 12: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 750, 834, 2));
                        break;
                    }
                    case 13: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 4415, 4429, 2));
                        break;
                    }
                    case 14: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 4416, 4430, 2));
                        break;
                    }
                };
                break;
            }
            case 2: {
                switch (int39) {
                    case 1: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 751, 835, 2));
                        break;
                    }
                    case 2: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 752, 836, 2));
                        break;
                    }
                    case 3: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 753, 837, 2));
                        break;
                    }
                    case 4: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 754, 838, 2));
                        break;
                    }
                    case 5: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 755, 839, 2));
                        break;
                    }
                    case 6: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 756, 840, 2));
                        break;
                    }
                    case 7: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 757, 841, 2));
                        break;
                    }
                    case 8: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 758, 842, 2));
                        break;
                    }
                    case 9: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 759, 843, 2));
                        break;
                    }
                    case 10: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 760, 844, 2));
                        break;
                    }
                    case 11: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 761, 845, 2));
                        break;
                    }
                    case 12: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 762, 846, 2));
                        break;
                    }
                    case 13: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 4417, 4431, 2));
                        break;
                    }
                    case 14: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 4418, 4432, 2));
                        break;
                    }
                };
                break;
            }
            case 3: {
                switch (int39) {
                    case 1: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 763, 847, 2));
                        break;
                    }
                    case 2: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 764, 848, 2));
                        break;
                    }
                    case 3: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 765, 849, 2));
                        break;
                    }
                    case 4: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 766, 850, 2));
                        break;
                    }
                    case 5: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 767, 851, 2));
                        break;
                    }
                    case 6: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 768, 852, 2));
                        break;
                    }
                    case 7: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 769, 853, 2));
                        break;
                    }
                    case 8: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 770, 854, 2));
                        break;
                    }
                    case 9: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 771, 855, 2));
                        break;
                    }
                    case 10: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 772, 856, 2));
                        break;
                    }
                    case 11: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 773, 857, 2));
                        break;
                    }
                    case 12: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 774, 858, 2));
                        break;
                    }
                    case 13: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 4419, 4433, 2));
                        break;
                    }
                    case 14: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 4420, 4434, 2));
                        break;
                    }
                };
                break;
            }
            case 4: {
                switch (int39) {
                    case 1: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 775, 859, 2));
                        break;
                    }
                    case 2: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 776, 860, 2));
                        break;
                    }
                    case 3: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 777, 861, 2));
                        break;
                    }
                    case 4: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 778, 862, 2));
                        break;
                    }
                    case 5: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 779, 863, 2));
                        break;
                    }
                    case 6: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 780, 864, 2));
                        break;
                    }
                    case 7: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 781, 865, 2));
                        break;
                    }
                    case 8: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 782, 866, 2));
                        break;
                    }
                    case 9: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 783, 867, 2));
                        break;
                    }
                    case 10: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 784, 868, 2));
                        break;
                    }
                    case 11: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 785, 869, 2));
                        break;
                    }
                    case 12: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 786, 870, 2));
                        break;
                    }
                    case 13: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 4421, 4435, 2));
                        break;
                    }
                    case 14: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 4422, 4436, 2));
                        break;
                    }
                };
                break;
            }
            case 5: {
                switch (int39) {
                    case 1: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 787, 871, 2));
                        break;
                    }
                    case 2: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 788, 872, 2));
                        break;
                    }
                    case 3: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 789, 873, 2));
                        break;
                    }
                    case 4: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 790, 874, 2));
                        break;
                    }
                    case 5: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 791, 875, 2));
                        break;
                    }
                    case 6: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 792, 876, 2));
                        break;
                    }
                    case 7: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 793, 877, 2));
                        break;
                    }
                    case 8: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 794, 878, 2));
                        break;
                    }
                    case 9: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 795, 879, 2));
                        break;
                    }
                    case 10: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 796, 880, 2));
                        break;
                    }
                    case 11: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 797, 881, 2));
                        break;
                    }
                    case 12: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 798, 882, 2));
                        break;
                    }
                    case 13: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 4423, 4437, 2));
                        break;
                    }
                    case 14: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 4424, 4438, 2));
                        break;
                    }
                };
                break;
            }
            case 6: {
                switch (int39) {
                    case 1: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5265, 5335, 2));
                        break;
                    }
                    case 2: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5266, 5336, 2));
                        break;
                    }
                    case 3: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5267, 5337, 2));
                        break;
                    }
                    case 4: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5268, 5338, 2));
                        break;
                    }
                    case 5: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5269, 5339, 2));
                        break;
                    }
                    case 6: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5270, 5340, 2));
                        break;
                    }
                    case 7: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5271, 5341, 2));
                        break;
                    }
                    case 8: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5272, 5342, 2));
                        break;
                    }
                    case 9: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5273, 5343, 2));
                        break;
                    }
                    case 10: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5274, 5344, 2));
                        break;
                    }
                    case 11: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5275, 5345, 2));
                        break;
                    }
                    case 12: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5276, 5346, 2));
                        break;
                    }
                    case 13: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5277, 5347, 2));
                        break;
                    }
                    case 14: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5278, 5348, 2));
                        break;
                    }
                };
                break;
            }
            case 7: {
                switch (int39) {
                    case 1: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5279, 5349, 2));
                        break;
                    }
                    case 2: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5280, 5350, 2));
                        break;
                    }
                    case 3: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5281, 5351, 2));
                        break;
                    }
                    case 4: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5282, 5352, 2));
                        break;
                    }
                    case 5: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5283, 5353, 2));
                        break;
                    }
                    case 6: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5284, 5354, 2));
                        break;
                    }
                    case 7: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5285, 5355, 2));
                        break;
                    }
                    case 8: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5286, 5356, 2));
                        break;
                    }
                    case 9: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5287, 5357, 2));
                        break;
                    }
                    case 10: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5288, 5358, 2));
                        break;
                    }
                    case 11: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5289, 5359, 2));
                        break;
                    }
                    case 12: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5290, 5360, 2));
                        break;
                    }
                    case 13: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5291, 5361, 2));
                        break;
                    }
                    case 14: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5292, 5362, 2));
                        break;
                    }
                };
                break;
            }
            case 8: {
                switch (int39) {
                    case 1: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5293, 5363, 2));
                        break;
                    }
                    case 2: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5294, 5364, 2));
                        break;
                    }
                    case 3: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5295, 5365, 2));
                        break;
                    }
                    case 4: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5296, 5366, 2));
                        break;
                    }
                    case 5: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5297, 5367, 2));
                        break;
                    }
                    case 6: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5298, 5368, 2));
                        break;
                    }
                    case 7: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5299, 5369, 2));
                        break;
                    }
                    case 8: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5300, 5370, 2));
                        break;
                    }
                    case 9: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5301, 5371, 2));
                        break;
                    }
                    case 10: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5302, 5372, 2));
                        break;
                    }
                    case 11: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5303, 5373, 2));
                        break;
                    }
                    case 12: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5304, 5374, 2));
                        break;
                    }
                    case 13: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5305, 5375, 2));
                        break;
                    }
                    case 14: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5306, 5376, 2));
                        break;
                    }
                };
                break;
            }
            case 9: {
                switch (int39) {
                    case 1: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5307, 5377, 2));
                        break;
                    }
                    case 2: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5308, 5378, 2));
                        break;
                    }
                    case 3: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5309, 5379, 2));
                        break;
                    }
                    case 4: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5310, 5380, 2));
                        break;
                    }
                    case 5: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5311, 5381, 2));
                        break;
                    }
                    case 6: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5312, 5382, 2));
                        break;
                    }
                    case 7: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5313, 5383, 2));
                        break;
                    }
                    case 8: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5314, 5384, 2));
                        break;
                    }
                    case 9: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5315, 5385, 2));
                        break;
                    }
                    case 10: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5316, 5386, 2));
                        break;
                    }
                    case 11: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5317, 5387, 2));
                        break;
                    }
                    case 12: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5318, 5388, 2));
                        break;
                    }
                    case 13: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5319, 5389, 2));
                        break;
                    }
                    case 14: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5320, 5390, 2));
                        break;
                    }
                };
                break;
            }
            case 10: {
                switch (int39) {
                    case 1: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5321, 5391, 2));
                        break;
                    }
                    case 2: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5322, 5392, 2));
                        break;
                    }
                    case 3: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5323, 5393, 2));
                        break;
                    }
                    case 4: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5324, 5394, 2));
                        break;
                    }
                    case 5: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5325, 5395, 2));
                        break;
                    }
                    case 6: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5326, 5396, 2));
                        break;
                    }
                    case 7: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5327, 5397, 2));
                        break;
                    }
                    case 8: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5328, 5398, 2));
                        break;
                    }
                    case 9: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5329, 5399, 2));
                        break;
                    }
                    case 10: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5330, 5400, 2));
                        break;
                    }
                    case 11: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5331, 5401, 2));
                        break;
                    }
                    case 12: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5332, 5402, 2));
                        break;
                    }
                    case 13: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5333, 5403, 2));
                        break;
                    }
                    case 14: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 5334, 5404, 2));
                        break;
                    }
                };
                break;
            }
            case 11: {
                switch (int39) {
                    case 1: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8759, 8801, 2));
                        break;
                    }
                    case 2: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8760, 8802, 2));
                        break;
                    }
                    case 3: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8761, 8803, 2));
                        break;
                    }
                    case 4: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8762, 8804, 2));
                        break;
                    }
                    case 5: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8763, 8805, 2));
                        break;
                    }
                    case 6: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8764, 8806, 2));
                        break;
                    }
                    case 7: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8765, 8807, 2));
                        break;
                    }
                    case 8: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8766, 8808, 2));
                        break;
                    }
                    case 9: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8767, 8809, 2));
                        break;
                    }
                    case 10: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8768, 8810, 2));
                        break;
                    }
                    case 11: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8769, 8811, 2));
                        break;
                    }
                    case 12: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8770, 8812, 2));
                        break;
                    }
                    case 13: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8771, 8813, 2));
                        break;
                    }
                    case 14: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8772, 8814, 2));
                        break;
                    }
                };
                break;
            }
            case 12: {
                switch (int39) {
                    case 1: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8773, 8815, 2));
                        break;
                    }
                    case 2: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8774, 8816, 2));
                        break;
                    }
                    case 3: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8775, 8817, 2));
                        break;
                    }
                    case 4: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8776, 8818, 2));
                        break;
                    }
                    case 5: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8777, 8819, 2));
                        break;
                    }
                    case 6: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8778, 8820, 2));
                        break;
                    }
                    case 7: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8779, 8821, 2));
                        break;
                    }
                    case 8: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8780, 8822, 2));
                        break;
                    }
                    case 9: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8781, 8823, 2));
                        break;
                    }
                    case 10: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8782, 8824, 2));
                        break;
                    }
                    case 11: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8783, 8825, 2));
                        break;
                    }
                    case 12: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8784, 8826, 2));
                        break;
                    }
                    case 13: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8785, 8827, 2));
                        break;
                    }
                    case 14: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8786, 8828, 2));
                        break;
                    }
                };
                break;
            }
            case 13: {
                switch (int39) {
                    case 1: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8787, 8829, 2));
                        break;
                    }
                    case 2: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8788, 8830, 2));
                        break;
                    }
                    case 3: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8789, 8831, 2));
                        break;
                    }
                    case 4: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8790, 8832, 2));
                        break;
                    }
                    case 5: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8791, 8833, 2));
                        break;
                    }
                    case 6: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8792, 8834, 2));
                        break;
                    }
                    case 7: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8793, 8835, 2));
                        break;
                    }
                    case 8: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8794, 8836, 2));
                        break;
                    }
                    case 9: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8795, 8837, 2));
                        break;
                    }
                    case 10: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8796, 8838, 2));
                        break;
                    }
                    case 11: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8797, 8839, 2));
                        break;
                    }
                    case 12: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8798, 8840, 2));
                        break;
                    }
                    case 13: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8799, 8841, 2));
                        break;
                    }
                    case 14: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 8800, 8842, 2));
                        break;
                    }
                };
                break;
            }
            case 14: {
                switch (int39) {
                    case 1: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10100, 10128, 2));
                        break;
                    }
                    case 2: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10101, 10129, 2));
                        break;
                    }
                    case 3: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10102, 10130, 2));
                        break;
                    }
                    case 4: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10103, 10131, 2));
                        break;
                    }
                    case 5: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10104, 10132, 2));
                        break;
                    }
                    case 6: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10105, 10133, 2));
                        break;
                    }
                    case 7: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10106, 10134, 2));
                        break;
                    }
                    case 8: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10107, 10135, 2));
                        break;
                    }
                    case 9: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10108, 10136, 2));
                        break;
                    }
                    case 10: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10109, 10137, 2));
                        break;
                    }
                    case 11: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10110, 10138, 2));
                        break;
                    }
                    case 12: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10111, 10139, 2));
                        break;
                    }
                    case 13: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10112, 10140, 2));
                        break;
                    }
                    case 14: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10113, 10141, 2));
                        break;
                    }
                };
                break;
            }
            case 15: {
                switch (int39) {
                    case 1: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10114, 10142, 2));
                        break;
                    }
                    case 2: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10115, 10143, 2));
                        break;
                    }
                    case 3: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10116, 10144, 2));
                        break;
                    }
                    case 4: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10117, 10145, 2));
                        break;
                    }
                    case 5: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10118, 10146, 2));
                        break;
                    }
                    case 6: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10119, 10147, 2));
                        break;
                    }
                    case 7: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10120, 10148, 2));
                        break;
                    }
                    case 8: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10121, 10149, 2));
                        break;
                    }
                    case 9: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10122, 10150, 2));
                        break;
                    }
                    case 10: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10123, 10151, 2));
                        break;
                    }
                    case 11: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10124, 10152, 2));
                        break;
                    }
                    case 12: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10125, 10153, 2));
                        break;
                    }
                    case 13: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10126, 10154, 2));
                        break;
                    }
                    case 14: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 10127, 10155, 2));
                        break;
                    }
                };
                break;
            }
            case 16: {
                switch (int39) {
                    case 1: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11219, 11261, 2));
                        break;
                    }
                    case 2: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11220, 11262, 2));
                        break;
                    }
                    case 3: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11221, 11263, 2));
                        break;
                    }
                    case 4: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11222, 11264, 2));
                        break;
                    }
                    case 5: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11223, 11265, 2));
                        break;
                    }
                    case 6: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11224, 11266, 2));
                        break;
                    }
                    case 7: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11225, 11267, 2));
                        break;
                    }
                    case 8: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11226, 11268, 2));
                        break;
                    }
                    case 9: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11227, 11269, 2));
                        break;
                    }
                    case 10: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11228, 11270, 2));
                        break;
                    }
                    case 11: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11229, 11271, 2));
                        break;
                    }
                    case 12: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11230, 11272, 2));
                        break;
                    }
                    case 13: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11231, 11273, 2));
                        break;
                    }
                    case 14: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11232, 11274, 2));
                        break;
                    }
                };
                break;
            }
            case 17: {
                switch (int39) {
                    case 1: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11233, 11275, 2));
                        break;
                    }
                    case 2: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11234, 11276, 2));
                        break;
                    }
                    case 3: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11235, 11277, 2));
                        break;
                    }
                    case 4: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11236, 11278, 2));
                        break;
                    }
                    case 5: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11237, 11279, 2));
                        break;
                    }
                    case 6: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11238, 11280, 2));
                        break;
                    }
                    case 7: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11239, 11281, 2));
                        break;
                    }
                    case 8: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11240, 11282, 2));
                        break;
                    }
                    case 9: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11241, 11283, 2));
                        break;
                    }
                    case 10: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11242, 11284, 2));
                        break;
                    }
                    case 11: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11243, 11285, 2));
                        break;
                    }
                    case 12: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11244, 11286, 2));
                        break;
                    }
                    case 13: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11245, 11287, 2));
                        break;
                    }
                    case 14: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11246, 11288, 2));
                        break;
                    }
                };
                break;
            }
            case 18: {
                switch (int39) {
                    case 1: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11247, 11289, 2));
                        break;
                    }
                    case 2: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11248, 11290, 2));
                        break;
                    }
                    case 3: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11249, 11291, 2));
                        break;
                    }
                    case 4: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11250, 11292, 2));
                        break;
                    }
                    case 5: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11251, 11293, 2));
                        break;
                    }
                    case 6: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11252, 11294, 2));
                        break;
                    }
                    case 7: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11253, 11295, 2));
                        break;
                    }
                    case 8: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11254, 11296, 2));
                        break;
                    }
                    case 9: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11255, 11297, 2));
                        break;
                    }
                    case 10: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11256, 11298, 2));
                        break;
                    }
                    case 11: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11257, 11299, 2));
                        break;
                    }
                    case 12: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11258, 11300, 2));
                        break;
                    }
                    case 13: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11259, 11301, 2));
                        break;
                    }
                    case 14: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 11260, 11302, 2));
                        break;
                    }
                };
                break;
            }
            case 31: {
                switch (int39) {
                    case 1: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 799, 883, 2));
                        break;
                    }
                    case 2: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 800, 884, 2));
                        break;
                    }
                    case 3: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 801, 885, 2));
                        break;
                    }
                    case 4: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 802, 886, 2));
                        break;
                    }
                    case 5: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 803, 887, 2));
                        break;
                    }
                    case 6: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 804, 888, 2));
                        break;
                    }
                    case 7: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 805, 889, 2));
                        break;
                    }
                    case 8: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 806, 890, 2));
                        break;
                    }
                    case 9: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 807, 891, 2));
                        break;
                    }
                    case 10: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 808, 892, 2));
                        break;
                    }
                    case 11: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 809, 893, 2));
                        break;
                    }
                    case 12: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 810, 894, 2));
                        break;
                    }
                    case 13: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 4425, 4439, 2));
                        break;
                    }
                    case 14: {
                        CC_SETONVARTRANSMIT(callback(script6994, int0, int1, 4426, 4440, 2));
                        break;
                    }
                };
                break;
            }
        };
    };
    return;
}