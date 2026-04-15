//
function script15340(int0: int, int1: category, int2: category): unknown_int {
    script15332();
    var int3 = comp(1851, 40);
    CC_DELETEALL(int3);
    define_array[131](int0);
    define_array[65536](int0);
    var int4 = 15000;
    var int5 = 20000;
    var int6 = 25000;
    if ((varbitplayer_48340 < varbitplayer_48341)) {
        int6 = 15000;
        int5 = 20000;
        int4 = 25000;
    };
    var int7 = -1 as cs2enum;
    var int8 = -1 as cs2enum;
    if ((int1 != -1 as category)) {
        if ((int2 != -1 as category)) {
            int7 = enum_getvalue(41, 26, 7255 as cs2enum, int1);
            if ((int7 != -1 as cs2enum)) {
                int8 = enum_getvalue(41, 26, int7, int2);
            };
        } else {
            int8 = enum_getvalue(41, 26, 7212 as cs2enum, int1);
        };
    };
    if (((int8 != -1 as cs2enum) && (ENUM_GETOUTPUTCOUNT(int8) != int0))) {
        script12478(`Display list enum output count does not match: got ${inttostring(ENUM_GETOUTPUTCOUNT(int8), 10)} expected ${inttostring(int0, 10)}`);
        return 0;
    };
    var int9 = 0;
    var int10 = -1 as achievement;
    if ((int8 != -1 as cs2enum)) {
        int10 = enum_getvalue(0, 131, int8, int9++);
    } else {
        int10 = ACHIEVEMENT_FINDNEXT();
    };
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    while ((int10 != -1 as achievement)) {
        pop_array(int11, int10);
        int12 = ACHIEVEMENT_REQSTATE(int10);
        switch (int12) {
            case -2: {
                pop_array[1](int11, (int11 + int6));
                int13 = (int13 + 1);
                break;
            }
            case -1: {
                if ((unk11111(int10) == 0)) {
                    pop_array[1](int11, (int11 + int4));
                    int14 = (int14 + 1);
                } else {
                    pop_array[1](int11, (int11 + int5));
                    int15 = (int15 + 1);
                };
                break;
            }
            case -3: {
                pop_array[1](int11, (int11 + 10000));
                break;
            }
            default: {
                if ((unk11111(int10) < 2)) {
                    pop_array[1](int11, (int11 + 10000));
                } else {
                    pop_array[1](int11, (int11 + int5));
                    int15 = (int15 + 1);
                };
                break;
            }
        };
        if ((int8 != -1 as cs2enum)) {
            int10 = enum_getvalue(0, 131, int8, int9++);
        } else {
            int10 = ACHIEVEMENT_FINDNEXT();
        };
        int11 = (int11 + 1);
    };
    ARRAY_SORT(int0, 1, 0);
    var int16 = int0;
    if ((varbitplayer_48340 == 1)) {
        var int0 = (int0 - int13);
    };
    if ((varbitplayer_48341 == 1)) {
        int0 = (int0 - int14);
        int0 = (int0 - int15);
    };
    if ((int0 == 0)) {
        return 0;
    };
    script15336(int3, int0);
    var int17 = 60;
    var int18 = 0;
    if ((varbitplayer_37059 == 1)) {
        int18 = 1;
        int17 = 35;
    };
    var int19 = 7829367;
    var int20 = 7829367;
    var int21 = 0;
    int11 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    var string0 = "";
    var string1 = "";
    var int27 = 0;
    var int28 = 0;
    var int29 = 0;
    var string2 = "";
    var int30 = 0;
    var int31 = 1;
    var int32 = 0;
    var int33 = false;
    var int34 = -1 as achievement;
    var int35 = -1;
    var int36 = 0;
    var int37 = -1;
    var int38 = script15721();
    while ((int11 < int0)) {
        int21 = (int11 * 11);
        int10 = push_array(int11);
        int12 = ACHIEVEMENT_REQSTATE(int10);
        switch (int12) {
            case -2: {
                int20 = 15777401;
                int19 = 14931919;
                if ((int38 == 1)) {
                    int19 = 13742733;
                };
                break;
            }
            case -1: {
                int20 = 9342606;
                int19 = 9342606;
                break;
            }
            case -3: {
                int20 = 16754503;
                int19 = 14931919;
                if ((int38 == 1)) {
                    int19 = 13742733;
                };
                break;
            }
            default: {
                int20 = 11837586;
                int19 = 14931919;
                if ((int38 == 1)) {
                    int19 = 13742733;
                };
                break;
            }
        };
        string0 = ACHIEVEMENT_GETNAME(int10);
        string1 = script15321(int10);
        int29 = unk11168(int10);
        string2 = script19862(int10);
        int30 = script15342(int10);
        int31 = 1;
        int32 = 0;
        if (((int12 != -2) && (unk11111(int10) == 2))) {
            int32 = 1;
        } else if (((int12 == -1) && (unk11111(int10) == 1))) {
            int32 = 1;
        };
        if ((int32 == 1)) {
            string0 = "This Achievement is hidden";
            string1 = "Play more of the game to unlock this achievement.";
            string2 = "";
            int31 = 0;
            int30 = 0;
            int29 = 0;
            if ((script2457(ACHIEVEMENT_CATEGORY(int10)) == 1)) {
                int33 = true;
            } else {
                int33 = false;
            };
        };
        if ((int33 == false)) {
            int27 = unk11156(int10);
            if (((int12 != -2) && (int27 > script12477()))) {
                string1 = strconcat(string1, ` <col=FFA747>Grace period ends: ${script3381(int27)}</col>`);
            };
            int26 = strcmp(string2, "");
            if ((CC_FIND(int3, int21) == 1)) {
                CC_SETPOSITION(0, int28, 0, 0);
                cc_setparam(8167, int28);
                CC_SETSIZE(0, int17, 1, 0);
                CC_SETFILL(1);
                CC_SETCOLOUR(script10495(12));
                CC_SETHIDE(int33);
                script15370(int10);
                if ((int30 == 1)) {
                    CC_SETONOP(callback(script15333, CC_GETID(), int10));
                    CC_SETOP(5, "Toggle");
                    CC_SETOPCURSOR(5, 46);
                };
                if ((enum_hasoutput(131, 5983 as cs2enum, int10) == 1)) {
                    CC_SETOP(5, "Go To");
                    CC_SETOPBASE(ACHIEVEMENT_GETNAME(enum_getreverseindex(131, 131, 5983 as cs2enum, int10, 0)));
                    CC_SETOPCURSOR(5, 210);
                };
            };
            if ((int18 == 1)) {
                if (((int31 == 1) && (CC_FIND(int3, (int21 + 4)) == 1))) {
                    CC_SETSIZE(14, 14, 0, 0);
                    if ((int29 > 0)) {
                        CC_SETPOSITION((int22 + 2), (int28 + 2), 0, 0);
                    } else {
                        CC_SETPOSITION((int22 + 2), (int28 + ((int17 / 2) - (CC_GETHEIGHT() / 2))), 0, 0);
                    };
                    CC_SETNOCLICKTHROUGH(true);
                    if ((int12 == -2)) {
                        script13618(int3, CC_GETID(), int10);
                    } else {
                        script13339(int3, CC_GETID(), int10);
                    };
                    int23 = (CC_GETX() + CC_GETWIDTH());
                } else {
                    int23 = 0;
                };
                if (((int29 > 0) && (CC_FIND(int3, (int21 + 10)) == 1))) {
                    CC_SETPOSITION(((int22 + 1) + 2), ((int28 + 14) + (2 * 2)), 0, 0);
                    CC_SETSIZE(14, 12, 0, 0);
                    CC_SETCOLOUR(script10495(3));
                    CC_SETTEXT(TOSTRING_LOCALISED(int29, 1));
                    CC_SETTEXTSHADOW(true);
                    CC_SETTEXTALIGN(1, 1, 0);
                    CC_SETTEXTFONT(26 as fontmetrics);
                };
                if ((CC_FIND(int3, (int21 + 6)) == 1)) {
                    CC_SETPOSITION((int23 + 2), int28, 0, 0);
                    CC_SETSIZE(((int23 + (2 * 2)) + 15), int17, 1, 0);
                    CC_SETCOLOUR(int19);
                    CC_SETTEXT(string1);
                    CC_SETTEXTSHADOW(true);
                    CC_SETTEXTALIGN(1, 1, 0);
                    CC_SETTEXTFONT(26 as fontmetrics);
                };
                if (((int26 != 0) && (CC_FIND(int3, (int21 + 8)) == 1))) {
                    CC_SETPOSITION(2, (int28 + 2), 2, 0);
                    CC_SETGRAPHIC(29975 as graphic);
                    CC_SETSIZE(14, 14, 0, 0);
                    script3537(string2);
                    CC_SETMOUSEOVERCURSOR(172);
                    CC_SETNOCLICKTHROUGH(true);
                };
                if (((int30 == 1) && (CC_FIND(int3, (int21 + 7)) == 1))) {
                    CC_SETSIZE(13, 13, 0, 0);
                    if ((int26 == 0)) {
                        CC_SETPOSITION(2, (int28 + ((int17 / 2) - (CC_GETHEIGHT() / 2))), 2, 0);
                    } else {
                        CC_SETPOSITION(2, (int28 + (int17 - CC_GETHEIGHT())), 2, 0);
                    };
                    CC_SETGRAPHIC(30205 as graphic);
                };
            } else {
                if ((CC_FIND(int3, (int21 + 1)) == 1)) {
                    CC_SETPOSITION(2, (int28 + 2), 0, 0);
                    CC_SETSIZE(28, 28, 0, 0);
                    CC_SETGRAPHIC(ACHIEVEMENT_SPRITE(int10));
                    int22 = (CC_GETX() + CC_GETWIDTH());
                };
                if ((((int12 == -1) || (int12 == -2)) && (CC_FIND(int3, (int21 + 3)) == 1))) {
                    CC_SETPOSITION(2, (int28 + 2), 0, 0);
                    CC_SETSIZE(28, 28, 0, 0);
                    if ((int12 == -2)) {
                        CC_SETGRAPHIC(26606 as graphic);
                    } else {
                        CC_SETGRAPHIC(26605 as graphic);
                        if ((CC_FIND[1](int3, (int21 + 2)) == 1)) {
                            CC_SETPOSITION[1](2, (int28 + 2), 0, 0);
                            CC_SETSIZE[1](28, 28, 0, 0);
                            CC_SETFILL[1](1);
                            CC_SETCOLOUR[1](8421504);
                            CC_SETTRANS[1](128);
                        };
                    };
                };
                if (((int31 == 1) && (CC_FIND(int3, (int21 + 4)) == 1))) {
                    CC_SETPOSITION((int22 + 2), int28, 0, 0);
                    CC_SETSIZE(14, 14, 0, 0);
                    CC_SETNOCLICKTHROUGH(true);
                    if ((int12 == -2)) {
                        script13618(int3, CC_GETID(), int10);
                    } else {
                        script13339(int3, CC_GETID(), int10);
                    };
                    int23 = (CC_GETX() + CC_GETWIDTH());
                } else {
                    int23 = (int22 + 2);
                };
                if ((CC_FIND(int3, (int21 + 5)) == 1)) {
                    CC_SETPOSITION((int23 + 2), int28, 0, 0);
                    CC_SETTEXTSHADOW(true);
                    CC_SETTEXT(string0);
                    CC_SETSIZE(int23, 15, 1, 0);
                    CC_SETTEXTALIGN(0, 1, 0);
                    CC_SETTEXTFONT(55 as fontmetrics);
                    CC_SETCOLOUR(int20);
                };
                if ((CC_FIND(int3, (int21 + 6)) == 1)) {
                    CC_SETPOSITION((int22 + 2), (int28 + 15), 0, 0);
                    CC_SETSIZE((int22 + 13), (int17 - 15), 1, 0);
                    CC_SETCOLOUR(int19);
                    CC_SETTEXT(string1);
                    CC_SETTEXTSHADOW(true);
                    CC_SETTEXTALIGN(0, 0, 0);
                    CC_SETTEXTFONT(26 as fontmetrics);
                    int24 = CC_GETY();
                    int25 = (CC_GETHEIGHT() / 2);
                };
                if (((int30 == 1) && (CC_FIND(int3, (int21 + 7)) == 1))) {
                    CC_SETSIZE(13, 13, 0, 0);
                    CC_SETPOSITION(2, (int24 + (int25 - (CC_GETHEIGHT() / 2))), 2, 0);
                    CC_SETGRAPHIC(30205 as graphic);
                };
                if (((int26 != 0) && (CC_FIND(int3, (int21 + 8)) == 1))) {
                    CC_SETPOSITION(2, (int28 + 2), 2, 0);
                    CC_SETGRAPHIC(29975 as graphic);
                    CC_SETSIZE(14, 14, 0, 0);
                    script3537(string2);
                    CC_SETMOUSEOVERCURSOR(172);
                    CC_SETNOCLICKTHROUGH(true);
                };
                if ((int29 > 0)) {
                    if ((CC_FIND(int3, (int21 + 9)) == 1)) {
                        CC_SETPOSITION((int22 - 15), (((int28 + 2) + 28) - 12), 0, 0);
                        CC_SETSIZE(15, 12, 0, 0);
                        CC_SETCOLOUR(0);
                        CC_SETTRANS(128);
                        CC_SETFILL(1);
                    };
                    if ((CC_FIND(int3, (int21 + 10)) == 1)) {
                        CC_SETPOSITION((int22 - 15), ((int28 + int22) - 12), 0, 0);
                        CC_SETSIZE(14, 12, 0, 0);
                        CC_SETCOLOUR(script10495(3));
                        CC_SETTEXT(TOSTRING_LOCALISED(int29, 1));
                        CC_SETTEXTSHADOW(true);
                        CC_SETTEXTALIGN(1, 1, 0);
                        CC_SETTEXTFONT(26 as fontmetrics);
                    };
                };
            };
            if (((script15954() == 1) && (varclient_6919 == int10))) {
                int34 = int10;
                int35 = int21;
            };
            if ((varplayer_9607 == int10)) {
                int36 = int28;
                int37 = int21;
            };
            int28 = (int28 + (int17 + 2));
        };
        int11 = (int11 + 1);
    };
    if ((varplayer_9607 == -1 as achievement)) {
        if ((varclient_6917 > 0)) {
            int36 = varclient_6917;
        };
        if ((script15954() == 1)) {
            if (((int34 != -1 as achievement) && (int35 != -1))) {
                script9291(int35, int34);
            } else {
                script9291(varclient_6918, varclient_6919);
            };
            return 1;
        };
    };
    script15341(int3, int28, int36);
    if ((((varplayer_9607 != -1 as achievement) && (int37 != -1)) && (CC_FIND(int3, int37) == 1))) {
        CC_TRIGGEROP(5);
    };
    return 1;
}