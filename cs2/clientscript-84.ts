//[proc,rebuildchatbox]
function script84(int0: int): void {
    var int1 = script8552(int0);
    CC_DELETEALL(int1);
    script8628(int0, -1 as chatphrase);
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    if ((varbitplayer_27169 == 0)) {
        if ((((varbitplayer_38842 == 1) || (varbitplayer_60441 == 0)) || (int0 == 1019))) {
            [int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, int13] = script8546(int0);
        } else {
            [int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, int13] = script9910();
        };
    } else {
    };
    define_array(147);
    var int14 = 0;
    while ((int14 < 147)) {
        switch (int14) {
            case 120:
            case 115: {
                pop_array(int14, 1);
                break;
            }
            case 146: {
                if ((STAFFMODLEVEL() >= 2)) {
                    pop_array(int14, 1);
                } else {
                    pop_array(int14, 0);
                };
                break;
            }
            case 125:
            case 127:
            case 137:
            case 138:
            case 139: {
                pop_array(int14, int10);
                break;
            }
            case 1: {
                if (((varbitplayer_27169 == 0) && ((varbitplayer_38842 == 1) || (varbitplayer_60441 == 0)))) {
                    if ((int0 == 18)) {
                        pop_array(int14, 1);
                    } else {
                        pop_array(int14, int2);
                    };
                } else if (((int0 != 1019) && ((varbitplayer_22846 == 2) || (varbitplayer_22846 == 0)))) {
                    pop_array(int14, 1);
                } else {
                    pop_array(int14, int5);
                };
                break;
            }
            case 0:
            case 4:
            case 27:
            case 28:
            case 29:
            case 109:
            case 110:
            case 26:
            case 117:
            case 122:
            case 123:
            case 124:
            case 126:
            case 129:
            case 130:
            case 133:
            case 134:
            case 135:
            case 136:
            case 140:
            case 141:
            case 142:
            case 143:
            case 145: {
                pop_array(int14, int2);
                break;
            }
            case 2:
            case 17:
            case 116: {
                pop_array(int14, int5);
                break;
            }
            case 7: {
                switch (int0) {
                    case 18: {
                        if (((varbitplayer_27169 == 0) && ((varbitplayer_38842 == 1) || (varbitplayer_60441 == 0)))) {
                            pop_array(int14, 1);
                        } else if ((((varbitplayer_22846 == 2) || (varbitplayer_22846 == 0)) || (varbitplayer_22846 == 3))) {
                            pop_array(int14, 1);
                        } else {
                            pop_array(int14, int6);
                        };
                        break;
                    }
                    case 19:
                    case 1019: {
                        pop_array(int14, 1);
                        break;
                    }
                    default: {
                        pop_array(int14, int6);
                        break;
                    }
                };
                break;
            }
            case 3:
            case 6:
            case 5:
            case 18:
            case 19:
            case 30:
            case 31: {
                if ((varbitplayer_27169 == 1)) {
                } else if ((((((varbitplayer_38842 == 0) && (varbitplayer_60441 == 1)) && (int0 == 18)) && (varbitplayer_22846 == 0)) && (varbitplayer_20187 == 1))) {
                    pop_array(int14, 0);
                } else {
                    pop_array(int14, int6);
                };
                break;
            }
            case 9:
            case 11:
            case 20: {
                pop_array(int14, int7);
                break;
            }
            case 100:
            case 101:
            case 103:
            case 105:
            case 106:
            case 108:
            case 111:
            case 112:
            case 113:
            case 114:
            case 118:
            case 119:
            case 132:
            case 102:
            case 104: {
                pop_array(int14, int3);
                break;
            }
            case 41:
            case 43:
            case 42:
            case 107: {
                pop_array(int14, int8);
                break;
            }
            case 144: {
                pop_array(int14, int13);
                break;
            }
            case 44:
            case 46:
            case 45: {
                pop_array(int14, int9);
                break;
            }
            case 32: {
                pop_array(int14, int11);
                break;
            }
            case 24:
            case 22:
            case 25:
            case 23:
            case 128: {
                pop_array(int14, int12);
                break;
            }
            default: {
                pop_array(int14, 0);
                break;
            }
        };
        int14 = (int14 + 1);
    };
    switch (int0) {
        case 18: {
            varclient_3937 = varclient_2835;
            break;
        }
        case 19: {
            varclient_3938 = varclient_2835;
            break;
        }
        case 20: {
            varclient_3939 = varclient_2835;
            break;
        }
        case 21: {
            varclient_3940 = varclient_2835;
            break;
        }
        case 22: {
            varclient_3941 = varclient_2835;
            break;
        }
        case 23: {
            varclient_3942 = varclient_2835;
            break;
        }
        case 25: {
            varclient_4503 = varclient_2835;
            break;
        }
        case 46: {
            varclient_8175 = varclient_2835;
            break;
        }
        case 1019: {
            varclient_3943 = varclient_2835;
            break;
        }
        case 24: {
            varclient_4298 = varclient_2835;
            break;
        }
    };
    varclient_2835 = MAX(0, script1960());
    var int15 = varclient_2835;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var int19 = -1 as chatphrase;
    var string5 = "";
    var int20 = -1;
    var int21 = IF_GETWIDTH(int1);
    var int22 = -1;
    stack(unk11059(int15));
    [int17, string0, int18, string1, string2, string3, string4, int19, string5, int20, int22] = stack();
    var int23 = script4467();
    var int24 = script1891();
    var int25 = 1;
    var int26 = script6431();
    var int27 = script3873();
    var int28 = enum_getvalue(0, 25, 1649 as cs2enum, int27);
    var int29 = script11432(int28);
    var int30 = enum_getvalue(0, 0, 1648 as cs2enum, int27);
    var int31 = 2;
    var int32 = IF_GETTRANS(comp(137, 2));
    if ((IF_GETHIDE(comp(276, 27)) == false)) {
        int32 = 0;
    };
    if (((int26 == true) && (varbitplayer_29940 == 0))) {
        int31 = 0;
    };
    var int33 = 0;
    var int34 = 0;
    while (((int33 < 200) && (int16 < 500))) {
        if ((int17 > -1)) {
            switch (int17) {
                case 41:
                case 43:
                case 42: {
                    if ((int22 == 1)) {
                        int34 = int13;
                    } else {
                        int34 = push_array(int17);
                    };
                    break;
                }
                default: {
                    int34 = push_array(int17);
                    break;
                }
            };
            if (((int34 == 1) && (script8508(int0, int17, int18, string2, int20, int22) == 1))) {
                CC_CREATE(int1, 4, int33);
                script8505(int17, string5, int18, string1, string4, int22, int19, string0);
                CC_SETTEXTFONT(int28);
                CC_SETTEXTALIGN(0, 0, int29);
                CC_SETTEXTSHADOW(true);
                CC_SETPOSITION(0, int30, 0, int31);
                script8506(int0, int17, string5, int18, string1, string2, int19, int23, int24, int22);
                script16610(int17, int18);
                cc_setparam(3443, int15);
                CC_SETSIZE(0, (PARAHEIGHT(CC_GETTEXT(), int21, CC_GETFONTMETRICS()) * int29), 1, 0);
                int30 = (int30 + CC_GETHEIGHT());
                if ((int26 == true)) {
                    CC_SETTRANS(int32);
                    int30 = (int30 + 4);
                };
                int33 = (int33 + 1);
                script10487(int17, string3, int22);
            };
            if ((int25 == 1)) {
                switch (int17) {
                    case 3:
                    case 6:
                    case 7:
                    case 18:
                    case 19: {
                        varclient_2505 = REMOVETAGS(string2);
                        int25 = 0;
                        break;
                    }
                };
            };
        };
        int15 = unk11136(int15);
        if ((int15 != -1)) {
            stack(unk11059(int15));
            [int17, string0, int18, string1, string2, string3, string4, int19, string5, int20, int22] = stack();
            int16 = (int16 + 1);
        } else {
            int16 = 500;
        };
    };
    script8504(int0, int30);
    return;
}