//
function script7591(): void {
    var int0 = comp(1486, 14);
    var int1 = cc_getparam(8225);
    if ((int1 == -1 as quest)) {
        return;
    };
    var int2 = quest_getparam(int1, 1345);
    var string0 = script2103(int1);
    var int3 = script2107(int1);
    var int4 = -1 as graphic;
    switch (quest_getparam(int1, 7831)) {
        case 1: {
            int4 = 32052 as graphic;
            break;
        }
        case 3:
        case 4: {
            int4 = 32053 as graphic;
            break;
        }
    };
    if ((int3 == 2270 as graphic)) {
        int3 = -1 as graphic;
    };
    var string1 = quest_getparam(int1, 5968);
    var int5 = script2193(int1);
    var int6 = quest_getparam(int1, 7855);
    define_array(4);
    define_array[65536](4);
    var int7 = 0;
    var int8 = 0;
    var int9 = -1 as stat;
    var int10 = -1;
    var string2 = "null";
    while ((int8 < 12)) {
        [int9, int10] = script2112(int1, (int8 + 1));
        if ((((int9 != -1 as stat) && (int10 != 0)) && (STAT_BASE(int9) < int10))) {
            if ((++int7 < 5)) {
                if (((int7 == 1) && (int5 == 0))) {
                    int5 = -1;
                };
                pop_array((int7 - 1), enum_getvalue(17, 0, 1482 as cs2enum, int9));
                pop_array[1]((int7 - 1), int10);
            } else {
                pop_array[1](3, (int7 - 3));
            };
        };
        int8 = (int8 + 1);
    };
    var string3 = "null";
    var string4 = "null";
    var string5 = "null";
    var string6 = "null";
    var int11 = 0;
    int8 = 0;
    var int12 = -1;
    var int13 = -1 as quest;
    while ((int8 < 12)) {
        int12 = script2111(int1, (int8 + 1));
        if ((int12 != -1)) {
            int13 = enum_getvalue(0, 3, 2252 as cs2enum, int12);
            if (((int13 != -1 as quest) && (script2193(int13) != 2))) {
                if ((int5 == 0)) {
                    int5 = -1;
                };
                switch (++int11) {
                    case 1: {
                        string3 = script2103(int13);
                        break;
                    }
                    case 2: {
                        string4 = script2103(int13);
                        break;
                    }
                    case 3: {
                        string5 = script2103(int13);
                        break;
                    }
                    case 4: {
                        string6 = script2103(int13);
                        break;
                    }
                    default: {
                        string6 = `${inttostring((int11 - 3), 10)} More`;
                        break;
                    }
                };
            };
        };
        int8 = (int8 + 1);
    };
    var int14 = -1;
    if (((quest_getparam(int1, 7862) == true) && (script2194(int1) == 0))) {
        int14 = 1;
    };
    if (((QUEST_POINTSREQ(int1) > 0) && (varplayer_1297 < QUEST_POINTSREQ(int1)))) {
        int14 = 1;
    };
    if (((quest_getparam(int1, 7859) > 0) && (script1432() < quest_getparam(int1, 7859)))) {
        int14 = 1;
    };
    if (((quest_getparam(int1, 7861) == true) && (varbitplayer_9663 < 1))) {
        int14 = 1;
    };
    if (((quest_getparam(int1, 7860) > 0) && (script4035() < quest_getparam(int1, 7860)))) {
        int14 = 1;
    };
    var int15 = 0;
    var int16 = 220;
    var int17 = 50;
    var int18 = 50;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 1;
    var int23 = 26 as fontmetrics;
    if ((script6431() == true)) {
        int23 = 28 as fontmetrics;
        int16 = 300;
    };
    if (((strcmp(string0, "null") != 0) && (strcmp(string0, "") != 0))) {
        CC_CREATE(int0, 4, int15);
        CC_SETPOSITION(4, int19, 0, 0);
        CC_SETSIZE((2 * 4), script7593(string0, (int16 - (2 * 4)), 58 as fontmetrics, enum_getvalue(25, 0, 8549 as cs2enum, 58 as fontmetrics)), 1, 0);
        CC_SETTEXT(string0);
        CC_SETTEXTFONT(58 as fontmetrics);
        CC_SETCOLOUR(script10495(0));
        CC_SETTEXTALIGN(0, 1, enum_getvalue(25, 0, 8549 as cs2enum, 58 as fontmetrics));
        int15 = (int15 + 1);
        int19 = ((int19 + CC_GETHEIGHT()) + (2 * 2));
        CC_CREATE(int0, 9, int15);
        CC_SETPOSITION(0, int19, 0, 0);
        CC_SETSIZE(0, 0, 1, 0);
        CC_SETCOLOUR(script10495(8));
        int15 = (int15 + 1);
        int19 = (int19 + 1);
        CC_CREATE(int0, 9, int15);
        CC_SETPOSITION(0, int19, 0, 0);
        CC_SETSIZE(0, 0, 1, 0);
        CC_SETCOLOUR(script10495(7));
        int15 = (int15 + 1);
        int19 = ((int19 + 1) + (2 * 2));
    };
    if ((((strcmp(string1, "null") != 0) && (strcmp(string1, "") != 0)) && (int3 != -1 as graphic))) {
        CC_CREATE(int0, 5, int15);
        CC_SETSIZE(int17, int18, 0, 0);
        CC_SETPOSITION(4, int19, 0, 0);
        CC_SETGRAPHIC(int3);
        int20 = ((CC_GETX() + CC_GETWIDTH()) + 4);
        int15 = (int15 + 1);
        if ((int4 != -1 as graphic)) {
            CC_CREATE(int0, 5, int15);
            CC_SETSIZE(int17, int18, 0, 0);
            CC_SETPOSITION(4, int19, 0, 0);
            CC_SETGRAPHIC(int4);
            int15 = (int15 + 1);
        };
        CC_CREATE[1](int0, 4, int15);
        CC_SETPOSITION[1](int20, int19, 0, 0);
        CC_SETTEXT[1](string1);
        int21 = script7593(CC_GETTEXT[1](), ((int16 - int20) - 4), int23, 0);
        int21 = MAX(int21, int18);
        CC_SETSIZE[1]((int20 + 4), int21, 1, 0);
        CC_SETTEXTFONT[1](int23);
        CC_SETCOLOUR[1](script10495(3));
        CC_SETTEXTALIGN[1](0, 0, 0);
        int15 = (int15 + 1);
        int19 = ((int19 + CC_GETHEIGHT[1]()) + (2 * 2));
    };
    CC_CREATE(int0, 4, int15);
    CC_SETPOSITION(4, (int19 + 8), 0, 0);
    CC_SETTEXT("Status:");
    CC_SETTEXTFONT(int23);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTALIGN(0, 1, 0);
    int15 = (int15 + 1);
    CC_CREATE[1](int0, 4, int15);
    CC_SETPOSITION[1](4, (int19 + 8), 2, 0);
    if (((QUEST_GETMEMBERS(int1) == true) && (MAP_MEMBERS() == 0))) {
        CC_SETTEXT[1]("Members-only");
    } else if (((int14 == 1) && (int5 < 1))) {
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
    CC_SETTEXTFONT[1](int23);
    CC_SETCOLOUR[1](script10495(3));
    CC_SETTEXTALIGN[1](2, 1, 0);
    int15 = (int15 + 1);
    int21 = MAX(script7593(CC_GETTEXT(), (int16 - (2 * 4)), int23, 0), script7593(CC_GETTEXT[1](), (int16 - (2 * 4)), int23, 0));
    CC_SETSIZE((2 * 4), int21, 1, 0);
    CC_SETSIZE[1]((2 * 4), int21, 1, 0);
    if (((QUEST_GETMEMBERS(int1) == true) && (MAP_MEMBERS() == 0))) {
        CC_CREATE(int0, 5, int15);
        CC_SETSIZE(40, 37, 0, 0);
        CC_SETPOSITION(((PARAWIDTH(CC_GETTEXT[1](), (int16 - (2 * 4)), int23) + 4) + 4), (((int19 + 8) + (int21 / 2)) - (CC_GETHEIGHT() / 2)), 2, 0);
        CC_SETGRAPHIC(21354 as graphic);
        int15 = (int15 + 1);
    };
    CC_CREATE(int0, 3, int15);
    CC_SETPOSITION(0, int19, 0, 0);
    CC_SETSIZE(0, (int21 + (2 * 8)), 1, 0);
    CC_SENDTOBACK();
    CC_SETFILL(1);
    if ((int22 == 1)) {
        CC_SETCOLOUR(script10495(9));
    } else {
        CC_SETCOLOUR(script10495(12));
    };
    int22 = MODULO((int22 + 1), 2);
    int15 = (int15 + 1);
    int19 = ((int19 + CC_GETHEIGHT()) + 2);
    CC_CREATE(int0, 4, int15);
    CC_SETPOSITION(4, (int19 + 8), 0, 0);
    CC_SETTEXT("Length:");
    CC_SETTEXTFONT(int23);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTALIGN(0, 1, 0);
    int15 = (int15 + 1);
    CC_CREATE[1](int0, 4, int15);
    CC_SETPOSITION[1](4, (int19 + 8), 2, 0);
    CC_SETTEXT[1](enum_getvalue(0, 36, 13354 as cs2enum, quest_getparam(int1, 7855)));
    CC_SETTEXTFONT[1](int23);
    CC_SETCOLOUR[1](script10495(3));
    CC_SETTEXTALIGN[1](2, 1, 0);
    int15 = (int15 + 1);
    int21 = MAX(script7593(CC_GETTEXT(), (int16 - (2 * 4)), int23, 0), script7593(CC_GETTEXT[1](), (int16 - (2 * 4)), int23, 0));
    CC_SETSIZE((2 * 4), int21, 1, 0);
    CC_SETSIZE[1]((2 * 4), int21, 1, 0);
    CC_CREATE(int0, 3, int15);
    CC_SETPOSITION(0, int19, 0, 0);
    CC_SETSIZE(0, (int21 + (2 * 8)), 1, 0);
    CC_SENDTOBACK();
    CC_SETFILL(1);
    if ((int22 == 1)) {
        CC_SETCOLOUR(script10495(9));
    } else {
        CC_SETCOLOUR(script10495(12));
    };
    int22 = MODULO((int22 + 1), 2);
    int15 = (int15 + 1);
    int19 = ((int19 + CC_GETHEIGHT()) + 2);
    var int24 = 0;
    if ((int7 > 0)) {
        int8 = 0;
        CC_CREATE[1](int0, 3, int15);
        CC_SETPOSITION[1](0, int19, 0, 0);
        CC_SETFILL[1](1);
        if ((int22 == 1)) {
            CC_SETCOLOUR[1](script10495(9));
        } else {
            CC_SETCOLOUR[1](script10495(12));
        };
        int22 = MODULO((int22 + 1), 2);
        int15 = (int15 + 1);
        int19 = (int19 + 8);
        CC_CREATE(int0, 4, int15);
        CC_SETPOSITION(4, int19, 0, 0);
        CC_SETTEXT("Level Requirements:");
        CC_SETSIZE((2 * 4), script7593(CC_GETTEXT(), (int16 - (2 * 4)), int23, 0), 1, 0);
        CC_SETTEXTFONT(int23);
        CC_SETCOLOUR(script10495(3));
        CC_SETTEXTALIGN(0, 1, 0);
        int15 = (int15 + 1);
        int19 = ((int19 + CC_GETHEIGHT()) + 8);
        int19 = (int19 + 1);
        int17 = 35;
        int18 = 35;
        int24 = (((int16 - (2 * 4)) - (4 * (int17 + 1))) / 3);
        int20 = 4;
        while (((int8 < int7) && (int8 < 4))) {
            if (((int8 < 3) || (int7 == 4))) {
                CC_CREATE(int0, 5, int15);
                CC_SETPOSITION(int20, (int19 - 1), 0, 0);
                CC_SETSIZE((int17 + 1), (int18 + 1), 0, 0);
                CC_SETGRAPHIC(18269 as graphic);
                int15 = (int15 + 1);
            };
            CC_CREATE(int0, 5, int15);
            CC_SETPOSITION(int20, int19, 0, 0);
            CC_SETSIZE(int17, int18, 0, 0);
            if (((int8 == 3) && (int7 > 4))) {
                CC_SETGRAPHIC(18945 as graphic);
            } else {
                CC_SETGRAPHIC(enum_getvalue(0, 23, 8548 as cs2enum, push_array(int8)));
            };
            int15 = (int15 + 1);
            CC_CREATE(int0, 4, int15);
            CC_SETPOSITION(int20, ((int19 + int18) + 2), 0, 0);
            if (((int8 == 3) && (int7 > 4))) {
                CC_SETTEXT(`${inttostring(push_array[1](int8), 10)} More`);
            } else {
                CC_SETTEXT(`Lvl ${inttostring(push_array[1](int8), 10)}`);
            };
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETSIZE((int17 + 1), enum_getvalue(25, 0, 8549 as cs2enum, int23), 0, 0);
            CC_SETTEXTFONT(int23);
            CC_SETCOLOUR(script10495(3));
            int15 = (int15 + 1);
            int20 = (((int20 + int17) + 1) + int24);
            int8 = (int8 + 1);
        };
        int19 = (((((int19 + int18) + 2) + CC_GETHEIGHT()) + 8) + 2);
        CC_SETSIZE[1](0, ((int19 - 2) - CC_GETY[1]()), 1, 0);
    };
    if ((int11 > 0)) {
        int8 = 0;
        CC_CREATE[1](int0, 3, int15);
        CC_SETPOSITION[1](0, int19, 0, 0);
        CC_SETFILL[1](1);
        if ((int22 == 1)) {
            CC_SETCOLOUR[1](script10495(9));
        } else {
            CC_SETCOLOUR[1](script10495(12));
        };
        int22 = MODULO((int22 + 1), 2);
        int15 = (int15 + 1);
        int19 = (int19 + 8);
        CC_CREATE(int0, 4, int15);
        CC_SETPOSITION(4, int19, 0, 0);
        CC_SETTEXT("Prerequisites:");
        CC_SETSIZE((2 * 4), script7593(CC_GETTEXT(), (int16 - (2 * 4)), int23, 0), 1, 0);
        CC_SETTEXTFONT(int23);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTALIGN(0, 1, 0);
        int15 = (int15 + 1);
        int19 = ((int19 + CC_GETHEIGHT()) + 8);
        int17 = 16;
        int18 = 16;
        int20 = ((4 + int17) + 4);
        while (((int8 < int11) && (int8 < 4))) {
            CC_CREATE(int0, 5, int15);
            CC_SETPOSITION(4, int19, 0, 0);
            CC_SETSIZE(int17, int18, 0, 0);
            if (((int8 == 3) && (int11 > 4))) {
                CC_SETGRAPHIC(18944 as graphic);
            } else {
                CC_SETGRAPHIC(21342 as graphic);
            };
            int15 = (int15 + 1);
            CC_CREATE(int0, 4, int15);
            CC_SETPOSITION(int20, int19, 0, 0);
            switch (int8) {
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
            int21 = script7593(CC_GETTEXT(), ((int16 - int20) - 4), int23, 0);
            if ((int21 < int18)) {
                int21 = int18;
                CC_SETTEXTALIGN(0, 1, 0);
            } else {
                CC_SETTEXTALIGN(0, 0, 0);
            };
            CC_SETSIZE((int20 + 4), int21, 1, 0);
            CC_SETTEXTFONT(int23);
            CC_SETCOLOUR(script10495(3));
            int15 = (int15 + 1);
            int19 = ((int19 + CC_GETHEIGHT()) + 2);
            int8 = (int8 + 1);
        };
        int19 = (int19 + 8);
        CC_SETSIZE[1](0, ((int19 - 2) - CC_GETY[1]()), 1, 0);
    };
    IF_SETSIZE(int16, (int19 - 2), 0, 0, int0);
    return;
}