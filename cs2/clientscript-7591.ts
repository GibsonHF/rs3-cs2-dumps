//
function script7591(): void {
    var int0 = comp(1486, 14);  // text_tooltip:tooltip_dynamic_text
    var int1 = cc_getparam(8225);
    if ((int1 == -1 as quest)) {
        return;
    };
    var int2 = quest_getparam(int1, 1345);
    var string0 = script2103(int1);
    var int3 = script2107(int1);
    var int4 = -1;
    switch (quest_getparam(int1, 7831)) {
        case 1: {
            int4 = 32052;
            break;
        }
        case 3:
        case 4: {
            int4 = 32053;
            break;
        }
    };
    if ((int3 == 2270 as graphic)) {
        int3 = -1;
    };
    var string1 = quest_getparam(int1, 5968);
    var int5 = script2193(int1);
    var int6 = script2105(int1);
    var int7 = quest_getparam(int1, 7855);
    define_array(4);
    define_array[65536](4);
    var int8 = 0;
    var int9 = 0;
    var int10 = -1;
    var int11 = -1;
    var string2 = "null";
    while ((int9 < 12)) {
        [int10, int11] = script2112(int1, (int9 + 1));
        if ((((int10 != -1 as stat) && (int11 != 0)) && (STAT_BASE(int10) < int11))) {
            int8 = (int8 + 1);
            if ((int8 < 5)) {
                if (((int8 == 1) && (int5 == 0))) {
                    int5 = -1;
                };
                pop_array((int8 - 1), enum_getvalue(17, 0, 1482, int10));
                pop_array[1]((int8 - 1), int11);
            } else {
                pop_array[1](3, (int8 - 3));
            };
        };
        int9 = (int9 + 1);
    };
    var string3 = "null";
    var string4 = "null";
    var string5 = "null";
    var string6 = "null";
    var int12 = 0;
    int9 = 0;
    var int13 = -1;
    var int14 = -1;
    while ((int9 < 12)) {
        int13 = script2111(int1, (int9 + 1));
        if ((int13 != -1)) {
            int14 = enum_getvalue(0, 3, 2252 as cs2enum, int13);
            if (((int14 != -1 as quest) && (script2193(int14) != 2))) {
                if ((int5 == 0)) {
                    int5 = -1;
                };
                int12 = (int12 + 1);
                switch (int12) {
                    case 1: {
                        string3 = script2103(int14);
                        break;
                    }
                    case 2: {
                        string4 = script2103(int14);
                        break;
                    }
                    case 3: {
                        string5 = script2103(int14);
                        break;
                    }
                    case 4: {
                        string6 = script2103(int14);
                        break;
                    }
                    default: {
                        string6 = `${inttostring((int12 - 3), 10)} More`;
                        break;
                    }
                };
            };
        };
        int9 = (int9 + 1);
    };
    var int15 = -1;
    if (((quest_getparam(int1, 7862) == true) && (script2194(int1) == 0))) {
        int15 = 1;
    };
    if (((QUEST_POINTSREQ(int1) > 0) && (varplayer_1297 < QUEST_POINTSREQ(int1)))) {
        int15 = 1;
    };
    if (((quest_getparam(int1, 7859) > 0) && (script1432() < quest_getparam(int1, 7859)))) {
        int15 = 1;
    };
    if (((quest_getparam(int1, 7861) == true) && (varbitplayer_9663 < 1))) {
        int15 = 1;
    };
    if (((quest_getparam(int1, 7860) > 0) && (script4035() < quest_getparam(int1, 7860)))) {
        int15 = 1;
    };
    var int16 = 0;
    var int17 = 220;
    var int18 = 50;
    var int19 = 50;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 1;
    var int24 = 26 as fontmetrics;
    if ((script6431() == 1)) {
        int24 = 28;
        int17 = 300;
    };
    if (((strcmp(string0, "null") != 0) && (strcmp(string0, "") != 0))) {
        CC_CREATE(int0, 4, int16);
        CC_SETPOSITION(4, int20, 0, 0);
        CC_SETSIZE((2 * 4), script7593(string0, (int17 - (2 * 4)), 58, enum_getvalue(25, 0, 8549, 58)), 1, 0);
        CC_SETTEXT(string0);
        CC_SETTEXTFONT(58 as fontmetrics);
        CC_SETCOLOUR(script10495(0));
        CC_SETTEXTALIGN(0, 1, enum_getvalue(25, 0, 8549, 58));
        int16 = (int16 + 1);
        int20 = ((int20 + CC_GETHEIGHT()) + (2 * 2));
        CC_CREATE(int0, 9, int16);
        CC_SETPOSITION(0, int20, 0, 0);
        CC_SETSIZE(0, 0, 1, 0);
        CC_SETCOLOUR(script10495(8));
        int16 = (int16 + 1);
        int20 = (int20 + 1);
        CC_CREATE(int0, 9, int16);
        CC_SETPOSITION(0, int20, 0, 0);
        CC_SETSIZE(0, 0, 1, 0);
        CC_SETCOLOUR(script10495(7));
        int16 = (int16 + 1);
        int20 = ((int20 + 1) + (2 * 2));
    };
    if ((((strcmp(string1, "null") != 0) && (strcmp(string1, "") != 0)) && (int3 != -1 as graphic))) {
        CC_CREATE(int0, 5, int16);
        CC_SETSIZE(int18, int19, 0, 0);
        CC_SETPOSITION(4, int20, 0, 0);
        CC_SETGRAPHIC(int3);
        int21 = ((CC_GETX() + CC_GETWIDTH()) + 4);
        int16 = (int16 + 1);
        if ((int4 != -1)) {
            CC_CREATE(int0, 5, int16);
            CC_SETSIZE(int18, int19, 0, 0);
            CC_SETPOSITION(4, int20, 0, 0);
            CC_SETGRAPHIC(int4);
            int16 = (int16 + 1);
        };
        CC_CREATE[1](int0, 4, int16);
        CC_SETPOSITION[1](int21, int20, 0, 0);
        CC_SETTEXT[1](string1);
        int22 = script7593(CC_GETTEXT[1](), ((int17 - int21) - 4), int24, 0);
        int22 = MAX(int22, int19);
        CC_SETSIZE[1]((int21 + 4), int22, 1, 0);
        CC_SETTEXTFONT[1](int24);
        CC_SETCOLOUR[1](script10495(3));
        CC_SETTEXTALIGN[1](0, 0, 0);
        int16 = (int16 + 1);
        int20 = ((int20 + CC_GETHEIGHT[1]()) + (2 * 2));
    };
    CC_CREATE(int0, 4, int16);
    CC_SETPOSITION(4, (int20 + 8), 0, 0);
    CC_SETTEXT("Status:");
    CC_SETTEXTFONT(int24);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTALIGN(0, 1, 0);
    int16 = (int16 + 1);
    CC_CREATE[1](int0, 4, int16);
    CC_SETPOSITION[1](4, (int20 + 8), 2, 0);
    if ((QUEST_GETMEMBERS(int1) == true)) {
        if ((MAP_MEMBERS() == 0)) {
            CC_SETTEXT[1]("Members-only");
        } else if ((int15 == 1)) {
            if ((int5 < 1)) {
                CC_SETTEXT[1]("See Quest Log");
            } else {
                switch (int5) {
                    case 2: {
                        CC_SETTEXT[1]("Completed");
                        break;
                    }
                    case 1: {
                        CC_SETTEXT[1]("In Progress");
                        break;
                    }
                    case 0: {
                        CC_SETTEXT[1]("Ready to Start");
                        break;
                    }
                    default: {
                        CC_SETTEXT[1]("Locked");
                        break;
                    }
                };
            };
        } else {
            switch (int5) {
                case 2: {
                    CC_SETTEXT[1]("Completed");
                    break;
                }
                case 1: {
                    CC_SETTEXT[1]("In Progress");
                    break;
                }
                case 0: {
                    CC_SETTEXT[1]("Ready to Start");
                    break;
                }
                default: {
                    CC_SETTEXT[1]("Locked");
                    break;
                }
            };
        };
    } else if ((int15 == 1)) {
        if ((int5 < 1)) {
            CC_SETTEXT[1]("See Quest Log");
        } else {
            switch (int5) {
                case 2: {
                    CC_SETTEXT[1]("Completed");
                    break;
                }
                case 1: {
                    CC_SETTEXT[1]("In Progress");
                    break;
                }
                case 0: {
                    CC_SETTEXT[1]("Ready to Start");
                    break;
                }
                default: {
                    CC_SETTEXT[1]("Locked");
                    break;
                }
            };
        };
    } else {
        switch (int5) {
            case 2: {
                CC_SETTEXT[1]("Completed");
                break;
            }
            case 1: {
                CC_SETTEXT[1]("In Progress");
                break;
            }
            case 0: {
                CC_SETTEXT[1]("Ready to Start");
                break;
            }
            default: {
                CC_SETTEXT[1]("Locked");
                break;
            }
        };
    };
    CC_SETTEXTFONT[1](int24);
    CC_SETCOLOUR[1](script10495(3));
    CC_SETTEXTALIGN[1](2, 1, 0);
    int16 = (int16 + 1);
    int22 = MAX(script7593(CC_GETTEXT(), (int17 - (2 * 4)), int24, 0), script7593(CC_GETTEXT[1](), (int17 - (2 * 4)), int24, 0));
    CC_SETSIZE((2 * 4), int22, 1, 0);
    CC_SETSIZE[1]((2 * 4), int22, 1, 0);
    if (((QUEST_GETMEMBERS(int1) == true) && (MAP_MEMBERS() == 0))) {
        CC_CREATE(int0, 5, int16);
        CC_SETSIZE(40, 37, 0, 0);
        CC_SETPOSITION(((PARAWIDTH(CC_GETTEXT[1](), (int17 - (2 * 4)), int24) + 4) + 4), (((int20 + 8) + (int22 / 2)) - (CC_GETHEIGHT() / 2)), 2, 0);
        CC_SETGRAPHIC(21354 as graphic);
        int16 = (int16 + 1);
    };
    CC_CREATE(int0, 3, int16);
    CC_SETPOSITION(0, int20, 0, 0);
    CC_SETSIZE(0, (int22 + (2 * 8)), 1, 0);
    CC_SENDTOBACK();
    CC_SETFILL(1);
    if ((int23 == 1)) {
        CC_SETCOLOUR(script10495(9));
    } else {
        CC_SETCOLOUR(script10495(12));
    };
    int23 = MODULO((int23 + 1), 2);
    int16 = (int16 + 1);
    int20 = ((int20 + CC_GETHEIGHT()) + 2);
    CC_CREATE(int0, 4, int16);
    CC_SETPOSITION(4, (int20 + 8), 0, 0);
    CC_SETTEXT("Difficulty:");
    CC_SETTEXTFONT(int24);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTALIGN(0, 1, 0);
    int16 = (int16 + 1);
    CC_CREATE[1](int0, 4, int16);
    CC_SETPOSITION[1](4, (int20 + 8), 2, 0);
    switch (int6) {
        case 0: {
            CC_SETTEXT[1]("Novice");
            break;
        }
        case 1: {
            CC_SETTEXT[1]("Intermediate");
            break;
        }
        case 2: {
            CC_SETTEXT[1]("Experienced");
            break;
        }
        case 3: {
            CC_SETTEXT[1]("Master");
            break;
        }
        case 4: {
            CC_SETTEXT[1]("Grandmaster");
            break;
        }
        case 5: {
            CC_SETTEXT[1]("Multi-difficulty");
            break;
        }
    };
    CC_SETTEXTFONT[1](int24);
    CC_SETCOLOUR[1](script10495(3));
    CC_SETTEXTALIGN[1](2, 1, 0);
    int16 = (int16 + 1);
    int22 = MAX(script7593(CC_GETTEXT(), (int17 - (2 * 4)), int24, 0), script7593(CC_GETTEXT[1](), (int17 - (2 * 4)), int24, 0));
    CC_SETSIZE((2 * 4), int22, 1, 0);
    CC_SETSIZE[1]((2 * 4), int22, 1, 0);
    CC_CREATE(int0, 3, int16);
    CC_SETPOSITION(0, int20, 0, 0);
    CC_SETSIZE(0, (int22 + (2 * 8)), 1, 0);
    CC_SENDTOBACK();
    CC_SETFILL(1);
    if ((int23 == 1)) {
        CC_SETCOLOUR(script10495(9));
    } else {
        CC_SETCOLOUR(script10495(12));
    };
    int23 = MODULO((int23 + 1), 2);
    int16 = (int16 + 1);
    int20 = ((int20 + CC_GETHEIGHT()) + 2);
    CC_CREATE(int0, 4, int16);
    CC_SETPOSITION(4, (int20 + 8), 0, 0);
    CC_SETTEXT("Length:");
    CC_SETTEXTFONT(int24);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTALIGN(0, 1, 0);
    int16 = (int16 + 1);
    CC_CREATE[1](int0, 4, int16);
    CC_SETPOSITION[1](4, (int20 + 8), 2, 0);
    CC_SETTEXT[1](enum_getvalue(0, 36, 13354 as cs2enum, quest_getparam(int1, 7855)));
    CC_SETTEXTFONT[1](int24);
    CC_SETCOLOUR[1](script10495(3));
    CC_SETTEXTALIGN[1](2, 1, 0);
    int16 = (int16 + 1);
    int22 = MAX(script7593(CC_GETTEXT(), (int17 - (2 * 4)), int24, 0), script7593(CC_GETTEXT[1](), (int17 - (2 * 4)), int24, 0));
    CC_SETSIZE((2 * 4), int22, 1, 0);
    CC_SETSIZE[1]((2 * 4), int22, 1, 0);
    CC_CREATE(int0, 3, int16);
    CC_SETPOSITION(0, int20, 0, 0);
    CC_SETSIZE(0, (int22 + (2 * 8)), 1, 0);
    CC_SENDTOBACK();
    CC_SETFILL(1);
    if ((int23 == 1)) {
        CC_SETCOLOUR(script10495(9));
    } else {
        CC_SETCOLOUR(script10495(12));
    };
    int23 = MODULO((int23 + 1), 2);
    int16 = (int16 + 1);
    int20 = ((int20 + CC_GETHEIGHT()) + 2);
    var int25 = 0;
    if ((int8 > 0)) {
        int9 = 0;
        CC_CREATE[1](int0, 3, int16);
        CC_SETPOSITION[1](0, int20, 0, 0);
        CC_SETFILL[1](1);
        if ((int23 == 1)) {
            CC_SETCOLOUR[1](script10495(9));
        } else {
            CC_SETCOLOUR[1](script10495(12));
        };
        int23 = MODULO((int23 + 1), 2);
        int16 = (int16 + 1);
        int20 = (int20 + 8);
        CC_CREATE(int0, 4, int16);
        CC_SETPOSITION(4, int20, 0, 0);
        CC_SETTEXT("Level Requirements:");
        CC_SETSIZE((2 * 4), script7593(CC_GETTEXT(), (int17 - (2 * 4)), int24, 0), 1, 0);
        CC_SETTEXTFONT(int24);
        CC_SETCOLOUR(script10495(3));
        CC_SETTEXTALIGN(0, 1, 0);
        int16 = (int16 + 1);
        int20 = ((int20 + CC_GETHEIGHT()) + 8);
        int20 = (int20 + 1);
        int18 = 35;
        int19 = 35;
        int25 = (((int17 - (2 * 4)) - (4 * (int18 + 1))) / 3);
        int21 = 4;
        while ((int9 < int8)) {
            if ((int9 < 4)) {
                if (((int9 < 3) || (int8 == 4))) {
                    CC_CREATE(int0, 5, int16);
                    CC_SETPOSITION(int21, (int20 - 1), 0, 0);
                    CC_SETSIZE((int18 + 1), (int19 + 1), 0, 0);
                    CC_SETGRAPHIC(18269 as graphic);
                    int16 = (int16 + 1);
                };
                CC_CREATE(int0, 5, int16);
                CC_SETPOSITION(int21, int20, 0, 0);
                CC_SETSIZE(int18, int19, 0, 0);
                if ((int9 == 3)) {
                    if ((int8 > 4)) {
                        CC_SETGRAPHIC(18945 as graphic);
                    } else {
                        CC_SETGRAPHIC(enum_getvalue(0, 23, 8548, push_array(int9)));
                    };
                } else {
                    CC_SETGRAPHIC(enum_getvalue(0, 23, 8548, push_array(int9)));
                };
                int16 = (int16 + 1);
                CC_CREATE(int0, 4, int16);
                CC_SETPOSITION(int21, ((int20 + int19) + 2), 0, 0);
                if ((int9 == 3)) {
                    if ((int8 > 4)) {
                        CC_SETTEXT(`${inttostring(push_array[1](int9), 10)} More`);
                    } else {
                        CC_SETTEXT(`Lvl ${inttostring(push_array[1](int9), 10)}`);
                    };
                } else {
                    CC_SETTEXT(`Lvl ${inttostring(push_array[1](int9), 10)}`);
                };
                CC_SETTEXTALIGN(1, 1, 0);
                CC_SETSIZE((int18 + 1), enum_getvalue(25, 0, 8549, int24), 0, 0);
                CC_SETTEXTFONT(int24);
                CC_SETCOLOUR(script10495(3));
                int16 = (int16 + 1);
                int21 = (((int21 + int18) + 1) + int25);
                int9 = (int9 + 1);
            };
            int20 = (((((int20 + int19) + 2) + CC_GETHEIGHT()) + 8) + 2);
            CC_SETSIZE[1](0, ((int20 - 2) - CC_GETY[1]()), 1, 0);
            if ((int12 > 0)) {
                int9 = 0;
                CC_CREATE[1](int0, 3, int16);
                CC_SETPOSITION[1](0, int20, 0, 0);
                CC_SETFILL[1](1);
                if ((int23 == 1)) {
                    CC_SETCOLOUR[1](script10495(9));
                } else {
                    CC_SETCOLOUR[1](script10495(12));
                };
                int23 = MODULO((int23 + 1), 2);
                int16 = (int16 + 1);
                int20 = (int20 + 8);
                CC_CREATE(int0, 4, int16);
                CC_SETPOSITION(4, int20, 0, 0);
                CC_SETTEXT("Prerequisites:");
                CC_SETSIZE((2 * 4), script7593(CC_GETTEXT(), (int17 - (2 * 4)), int24, 0), 1, 0);
                CC_SETTEXTFONT(int24);
                CC_SETCOLOUR(16777215);
                CC_SETTEXTALIGN(0, 1, 0);
                int16 = (int16 + 1);
                int20 = ((int20 + CC_GETHEIGHT()) + 8);
                int18 = 16;
                int19 = 16;
                int21 = ((4 + int18) + 4);
                while ((int9 < int12)) {
                    if ((int9 < 4)) {
                        CC_CREATE(int0, 5, int16);
                        CC_SETPOSITION(4, int20, 0, 0);
                        CC_SETSIZE(int18, int19, 0, 0);
                        if ((int9 == 3)) {
                            if ((int12 > 4)) {
                                CC_SETGRAPHIC(18944 as graphic);
                            } else {
                                CC_SETGRAPHIC(21342 as graphic);
                            };
                        } else {
                            CC_SETGRAPHIC(21342 as graphic);
                        };
                        int16 = (int16 + 1);
                        CC_CREATE(int0, 4, int16);
                        CC_SETPOSITION(int21, int20, 0, 0);
                        switch (int9) {
                            case 0: {
                                CC_SETTEXT(string3);
                                break;
                            }
                            case 1: {
                                CC_SETTEXT(string4);
                                break;
                            }
                            case 2: {
                                CC_SETTEXT(string5);
                                break;
                            }
                            case 3: {
                                CC_SETTEXT(string6);
                                break;
                            }
                        };
                        int22 = script7593(CC_GETTEXT(), ((int17 - int21) - 4), int24, 0);
                        if ((int22 < int19)) {
                            int22 = int19;
                            CC_SETTEXTALIGN(0, 1, 0);
                        } else {
                            CC_SETTEXTALIGN(0, 0, 0);
                        };
                        CC_SETSIZE((int21 + 4), int22, 1, 0);
                        CC_SETTEXTFONT(int24);
                        CC_SETCOLOUR(script10495(3));
                        int16 = (int16 + 1);
                        int20 = ((int20 + CC_GETHEIGHT()) + 2);
                        int9 = (int9 + 1);
                    };
                    int20 = (int20 + 8);
                    CC_SETSIZE[1](0, ((int20 - 2) - CC_GETY[1]()), 1, 0);
                    IF_SETSIZE(int17, (int20 - 2), 0, 0, int0);
                    return;
                };
                int20 = (int20 + 8);
                CC_SETSIZE[1](0, ((int20 - 2) - CC_GETY[1]()), 1, 0);
            };
            IF_SETSIZE(int17, (int20 - 2), 0, 0, int0);
            return;
        };
        int20 = (((((int20 + int19) + 2) + CC_GETHEIGHT()) + 8) + 2);
        CC_SETSIZE[1](0, ((int20 - 2) - CC_GETY[1]()), 1, 0);
    };
    if ((int12 > 0)) {
        int9 = 0;
        CC_CREATE[1](int0, 3, int16);
        CC_SETPOSITION[1](0, int20, 0, 0);
        CC_SETFILL[1](1);
        if ((int23 == 1)) {
            CC_SETCOLOUR[1](script10495(9));
        } else {
            CC_SETCOLOUR[1](script10495(12));
        };
        int23 = MODULO((int23 + 1), 2);
        int16 = (int16 + 1);
        int20 = (int20 + 8);
        CC_CREATE(int0, 4, int16);
        CC_SETPOSITION(4, int20, 0, 0);
        CC_SETTEXT("Prerequisites:");
        CC_SETSIZE((2 * 4), script7593(CC_GETTEXT(), (int17 - (2 * 4)), int24, 0), 1, 0);
        CC_SETTEXTFONT(int24);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTALIGN(0, 1, 0);
        int16 = (int16 + 1);
        int20 = ((int20 + CC_GETHEIGHT()) + 8);
        int18 = 16;
        int19 = 16;
        int21 = ((4 + int18) + 4);
        while ((int9 < int12)) {
            if ((int9 < 4)) {
                CC_CREATE(int0, 5, int16);
                CC_SETPOSITION(4, int20, 0, 0);
                CC_SETSIZE(int18, int19, 0, 0);
                if ((int9 == 3)) {
                    if ((int12 > 4)) {
                        CC_SETGRAPHIC(18944 as graphic);
                    } else {
                        CC_SETGRAPHIC(21342 as graphic);
                    };
                } else {
                    CC_SETGRAPHIC(21342 as graphic);
                };
                int16 = (int16 + 1);
                CC_CREATE(int0, 4, int16);
                CC_SETPOSITION(int21, int20, 0, 0);
                switch (int9) {
                    case 0: {
                        CC_SETTEXT(string3);
                        break;
                    }
                    case 1: {
                        CC_SETTEXT(string4);
                        break;
                    }
                    case 2: {
                        CC_SETTEXT(string5);
                        break;
                    }
                    case 3: {
                        CC_SETTEXT(string6);
                        break;
                    }
                };
                int22 = script7593(CC_GETTEXT(), ((int17 - int21) - 4), int24, 0);
                if ((int22 < int19)) {
                    int22 = int19;
                    CC_SETTEXTALIGN(0, 1, 0);
                } else {
                    CC_SETTEXTALIGN(0, 0, 0);
                };
                CC_SETSIZE((int21 + 4), int22, 1, 0);
                CC_SETTEXTFONT(int24);
                CC_SETCOLOUR(script10495(3));
                int16 = (int16 + 1);
                int20 = ((int20 + CC_GETHEIGHT()) + 2);
                int9 = (int9 + 1);
            };
            int20 = (int20 + 8);
            CC_SETSIZE[1](0, ((int20 - 2) - CC_GETY[1]()), 1, 0);
            IF_SETSIZE(int17, (int20 - 2), 0, 0, int0);
            return;
        };
        int20 = (int20 + 8);
        CC_SETSIZE[1](0, ((int20 - 2) - CC_GETY[1]()), 1, 0);
    };
    IF_SETSIZE(int17, (int20 - 2), 0, 0, int0);
    return;
}