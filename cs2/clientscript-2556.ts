//
function script2556(): void {
    var int0 = 97386510;
    var string0 = cc_getparam(4262);
    var int1 = cc_getparam(7773);
    var int2 = 8;
    define_array(int2);
    pop_array(0, cc_getparam(4261));
    pop_array(1, cc_getparam(6169));
    pop_array(2, cc_getparam(7766));
    pop_array(3, cc_getparam(7767));
    pop_array(4, cc_getparam(7768));
    pop_array(5, cc_getparam(7769));
    pop_array(6, cc_getparam(7770));
    pop_array(7, cc_getparam(7771));
    var int3 = cc_getparam(7772);
    var string1 = "";
    var int4 = 1;
    if ((int3 != -1)) {
        string1 = script13327(int3);
        int4 = script13290(int3);
    };
    if (((STRING_LENGTH(string1) == 0) && (int1 == 1))) {
        if ((PLAYERMEMBER() == 0)) {
            string1 = "Membership<br>";
        } else if ((MAP_MEMBERS() == 0)) {
            string1 = "Log in to a Members' World<br>";
        };
    };
    var int5 = 0;
    var int6 = 200;
    var int7 = 50;
    var int8 = 50;
    var int9 = 145;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 1;
    var int14 = 0;
    var int15 = 26;
    var int16 = 26;
    if ((script6431() == 1)) {
        int15 = 28;
        int16 = 28;
        int6 = 300;
    };
    if (((strcmp(string0, "null") != 0) && (strcmp(string0, "") != 0))) {
        CC_CREATE(int0, 4, int5);
        CC_SETPOSITION(4, int10, 0, 0);
        CC_SETSIZE((2 * 4), script7593(string0, (int6 - (2 * 4)), 58, enum_getvalue(25, 0, 8549, 58)), 1, 0);
        CC_SETTEXT(string0);
        CC_SETTEXTFONT(58 as fontmetrics);
        if ((MAP_MEMBERS() == 0)) {
            if (((int1 == 1) || (int4 == 0))) {
                CC_SETCOLOUR(script10495(6));
            } else {
                CC_SETCOLOUR(script10495(0));
            };
        } else if ((int4 == 0)) {
            CC_SETCOLOUR(script10495(6));
        } else {
            CC_SETCOLOUR(script10495(0));
        };
        CC_SETTEXTALIGN(0, 1, enum_getvalue(25, 0, 8549, 58));
        int5 = (int5 + 1);
        int10 = ((int10 + CC_GETHEIGHT()) + (2 * 2));
        CC_CREATE(int0, 9, int5);
        CC_SETPOSITION(0, int10, 0, 0);
        CC_SETSIZE(0, 0, 1, 0);
        CC_SETCOLOUR(script10495(8));
        int5 = (int5 + 1);
        int10 = (int10 + 1);
        CC_CREATE(int0, 9, int5);
        CC_SETPOSITION(0, int10, 0, 0);
        CC_SETSIZE(0, 0, 1, 0);
        CC_SETCOLOUR(script10495(7));
        int5 = (int5 + 1);
        int10 = ((int10 + 1) + (2 * 2));
    };
    var int17 = 0;
    var int18 = 10;
    define_array[65536](int18);
    define_array[131072](int18);
    var int19 = 0;
    while ((int17 < int18)) {
        if ((int19 == 0)) {
            if ((int17 == 0)) {
                pop_array[1](int17, 0);
            } else {
                pop_array[1](int17, (push_array[2]((int17 - 1)) + 4));
            };
            pop_array[2](int17, STRING_INDEXOF_STRING(string1, "<br>", push_array[1](int17)));
            if ((push_array[2](int17) == -1)) {
                int19 = 1;
                pop_array[2](int17, STRING_LENGTH(string1));
            } else {
                int17 = (int17 + 1);
            };
        };
        int18 = int17;
        if ((STRING_LENGTH(string1) > 0)) {
            int17 = 0;
            CC_CREATE[1](int0, 3, int5);
            CC_SETPOSITION[1](0, int10, 0, 0);
            CC_SETFILL[1](1);
            if ((int13 == 1)) {
                CC_SETCOLOUR[1](script10495(9));
            } else {
                CC_SETCOLOUR[1](script10495(12));
            };
            int13 = MODULO((int13 + 1), 2);
            int5 = (int5 + 1);
            int10 = (int10 + 8);
            CC_CREATE(int0, 4, int5);
            CC_SETPOSITION(4, int10, 0, 0);
            CC_SETTEXT("Requirements:");
            CC_SETSIZE((2 * 4), script7593(CC_GETTEXT(), (int6 - (2 * 4)), int15, 0), 1, 0);
            CC_SETTEXTFONT(int15);
            if ((MAP_MEMBERS() == 0)) {
                if (((int1 == 1) || (int4 == 0))) {
                    CC_SETCOLOUR(script10495(6));
                } else {
                    CC_SETCOLOUR(script10495(3));
                };
            } else if ((int4 == 0)) {
                CC_SETCOLOUR(script10495(6));
            } else {
                CC_SETCOLOUR(script10495(3));
            };
            CC_SETTEXTALIGN(0, 1, 0);
            int5 = (int5 + 1);
            int10 = ((int10 + CC_GETHEIGHT()) + 8);
            int7 = 16;
            int8 = 16;
            int11 = ((4 + int7) + 4);
            while ((int17 < int18)) {
                if ((int17 < 4)) {
                    CC_CREATE(int0, 5, int5);
                    CC_SETPOSITION(4, int10, 0, 0);
                    CC_SETSIZE(int7, int8, 0, 0);
                    if ((int17 == 3)) {
                        if ((int18 > 4)) {
                            CC_SETGRAPHIC(18944 as graphic);
                        } else {
                            CC_SETGRAPHIC(21342 as graphic);
                        };
                    } else {
                        CC_SETGRAPHIC(21342 as graphic);
                    };
                    int5 = (int5 + 1);
                    CC_CREATE(int0, 4, int5);
                    CC_SETPOSITION(int11, int10, 0, 0);
                    CC_SETTEXT(SUBSTRING(string1, push_array[1](int17), push_array[2](int17)));
                    int12 = script7593(CC_GETTEXT(), ((int6 - int11) - 4), int16, 0);
                    if ((int12 < int8)) {
                        int12 = int8;
                        CC_SETTEXTALIGN(0, 1, 0);
                    } else {
                        CC_SETTEXTALIGN(0, 0, 0);
                    };
                    CC_SETSIZE((int11 + 4), int12, 1, 0);
                    CC_SETTEXTFONT(int16);
                    if ((MAP_MEMBERS() == 0)) {
                        if (((int1 == 1) || (int4 == 0))) {
                            CC_SETCOLOUR(script10495(6));
                        } else {
                            CC_SETCOLOUR(16777215);
                        };
                    } else if ((int4 == 0)) {
                        CC_SETCOLOUR(script10495(6));
                    } else {
                        CC_SETCOLOUR(16777215);
                    };
                    int5 = (int5 + 1);
                    int10 = ((int10 + CC_GETHEIGHT()) + 2);
                    int17 = (int17 + 1);
                };
                int10 = (int10 + 8);
                CC_SETSIZE[1](0, ((int10 - 2) - CC_GETY[1]()), 1, 0);
                int7 = 50;
                int8 = 50;
                var int20 = -1;
                int17 = 0;
                var int21 = -1;
                var int22 = 0;
                var int23 = 0;
                var int24 = 0;
                var int25 = 0;
                var int26 = 0;
                var int27 = 0;
                while ((int17 < int2)) {
                    int20 = -1;
                    if ((push_array(int17) != -1)) {
                        stack(139264);
                        stack(push_array(int17));
                        DB_FIND(0);
                        int20 = dbrow_findnext();
                        if ((int20 != -1)) {
                            int24 = DB_GETFIELDCOUNT(int20, 139312);
                            [int21, int22, int23] = dbrow_getfield(int20, 139312, 0);
                            CC_CREATE[1](int0, 3, int5);
                            CC_SETPOSITION[1](0, int10, 0, 0);
                            CC_SETFILL[1](1);
                            if ((int13 == 1)) {
                                CC_SETCOLOUR[1](script10495(9));
                            } else {
                                CC_SETCOLOUR[1](script10495(12));
                            };
                            int13 = MODULO((int13 + 1), 2);
                            int5 = (int5 + 1);
                            int7 = 35;
                            int8 = 35;
                            int14 = (((int6 - (2 * 4)) - (4 * (int7 + 1))) / 3);
                            CC_CREATE(int0, 4, int5);
                            CC_SETTEXTFONT(29 as fontmetrics);
                            CC_SETTEXT(dbrow_getfield(int20, 139280, 0));
                            CC_SETSIZE(int9, script7593(CC_GETTEXT(), int9, 29, enum_getvalue(25, 0, 8549, 29)), 0, 0);
                            CC_SETTEXTALIGN(0, 0, enum_getvalue(25, 0, 8549, 29));
                            int11 = ((int7 + 1) + int14);
                            int26 = (int10 + 8);
                            if ((CC_GETHEIGHT() <= 15)) {
                                int10 = int26;
                            };
                            CC_SETPOSITION(int11, int10, 0, 0);
                            if ((STAT_BASE(14 as stat) < int22)) {
                                CC_SETCOLOUR(script10495(6));
                            } else if ((MAP_MEMBERS() == 0)) {
                                if ((((int22 > 50) || (OC_MEMBERS(int21) == 1)) || (int4 == 0))) {
                                    CC_SETCOLOUR(script10495(6));
                                } else {
                                    CC_SETCOLOUR(16777215);
                                };
                            } else if ((int4 == 0)) {
                                CC_SETCOLOUR(script10495(6));
                            } else {
                                CC_SETCOLOUR(16777215);
                            };
                            int5 = (int5 + 1);
                            int25 = 0;
                            int10 = ((int26 + enum_getvalue(25, 0, 8549, 29)) + 5);
                            int7 = 30;
                            int8 = 30;
                            int14 = 5;
                            while ((int25 < int24)) {
                                if ((int25 < 4)) {
                                    if (((int25 < 3) || (int24 == 4))) {
                                        CC_CREATE(int0, 5, int5);
                                        CC_SETPOSITION(int11, (int10 - 1), 0, 0);
                                        CC_SETSIZE((int7 + 1), (int8 + 1), 0, 0);
                                        CC_SETGRAPHIC(18269 as graphic);
                                        int5 = (int5 + 1);
                                    };
                                    [int21, int27, int27] = dbrow_getfield(int20, 139312, int25);
                                    CC_CREATE(int0, 5, int5);
                                    CC_SETSIZE(int7, int8, 0, 0);
                                    if ((int25 == 3)) {
                                        if ((int24 > 4)) {
                                            CC_SETPOSITION(int11, int10, 0, 0);
                                            CC_SETGRAPHIC(18945 as graphic);
                                        } else {
                                            CC_SETPOSITION((int11 + 2), (int10 + 1), 0, 0);
                                            CC_SETOBJECT(int21, -1);
                                        };
                                    } else {
                                        CC_SETPOSITION((int11 + 2), (int10 + 1), 0, 0);
                                        CC_SETOBJECT(int21, -1);
                                    };
                                    int5 = (int5 + 1);
                                    int11 = (((int11 + int7) + 1) + int14);
                                    if ((int24 == 1)) {
                                        CC_CREATE(int0, 4, int5);
                                        CC_SETPOSITION(int11, int10, 0, 0);
                                        CC_SETTEXT(OC_NAME(int21));
                                        CC_SETTEXTALIGN(0, 1, enum_getvalue(25, 0, 8549, int16));
                                        CC_SETSIZE(105, int8, 1, 0);
                                        CC_SETTEXTFONT(int16);
                                        if ((STAT_BASE(14 as stat) < int22)) {
                                            CC_SETCOLOUR(script10495(6));
                                        } else if ((MAP_MEMBERS() == 0)) {
                                            if ((((int22 > 50) || (OC_MEMBERS(int21) == 1)) || (int4 == 0))) {
                                                CC_SETCOLOUR(script10495(6));
                                            } else {
                                                CC_SETCOLOUR(16777215);
                                            };
                                        } else if ((int4 == 0)) {
                                            CC_SETCOLOUR(script10495(6));
                                        } else {
                                            CC_SETCOLOUR(16777215);
                                        };
                                        int5 = (int5 + 1);
                                    };
                                    int25 = (int25 + 1);
                                };
                                int7 = 35;
                                int8 = 35;
                                int14 = (((int6 - (2 * 4)) - (4 * (int7 + 1))) / 3);
                                int11 = 4;
                                int10 = int26;
                                CC_CREATE(int0, 5, int5);
                                CC_SETPOSITION(int11, (int10 - 1), 0, 0);
                                CC_SETSIZE((int7 + 1), (int8 + 1), 0, 0);
                                CC_SETGRAPHIC(18269 as graphic);
                                int5 = (int5 + 1);
                                CC_CREATE(int0, 5, int5);
                                CC_SETPOSITION(int11, int10, 0, 0);
                                CC_SETSIZE(int7, int8, 0, 0);
                                CC_SETGRAPHIC(enum_getvalue(0, 23, 8548, 13));
                                int5 = (int5 + 1);
                                CC_CREATE(int0, 4, int5);
                                CC_SETPOSITION(int11, ((int10 + int8) + 2), 0, 0);
                                CC_SETTEXT(`Lvl ${inttostring(int22, 10)}`);
                                CC_SETTEXTALIGN(1, 1, 0);
                                CC_SETSIZE((int7 + 1), enum_getvalue(25, 0, 8549, int16), 0, 0);
                                CC_SETTEXTFONT(int16);
                                if ((STAT_BASE(14 as stat) < int22)) {
                                    CC_SETCOLOUR(script10495(6));
                                } else if ((MAP_MEMBERS() == 0)) {
                                    if ((((int22 > 50) || (OC_MEMBERS(int21) == 1)) || (int4 == 0))) {
                                        CC_SETCOLOUR(script10495(6));
                                    } else {
                                        CC_SETCOLOUR(16777215);
                                    };
                                } else if ((int4 == 0)) {
                                    CC_SETCOLOUR(script10495(6));
                                } else {
                                    CC_SETCOLOUR(16777215);
                                };
                                int5 = (int5 + 1);
                                int10 = ((((int26 + int8) + enum_getvalue(25, 0, 8549, int16)) + 8) + 2);
                                CC_SETSIZE[1](0, ((int10 - 2) - CC_GETY[1]()), 1, 0);
                                int17 = (int17 + 1);
                            };
                            int7 = 35;
                            int8 = 35;
                            int14 = (((int6 - (2 * 4)) - (4 * (int7 + 1))) / 3);
                            int11 = 4;
                            int10 = int26;
                            CC_CREATE(int0, 5, int5);
                            CC_SETPOSITION(int11, (int10 - 1), 0, 0);
                            CC_SETSIZE((int7 + 1), (int8 + 1), 0, 0);
                            CC_SETGRAPHIC(18269 as graphic);
                            int5 = (int5 + 1);
                            CC_CREATE(int0, 5, int5);
                            CC_SETPOSITION(int11, int10, 0, 0);
                            CC_SETSIZE(int7, int8, 0, 0);
                            CC_SETGRAPHIC(enum_getvalue(0, 23, 8548, 13));
                            int5 = (int5 + 1);
                            CC_CREATE(int0, 4, int5);
                            CC_SETPOSITION(int11, ((int10 + int8) + 2), 0, 0);
                            CC_SETTEXT(`Lvl ${inttostring(int22, 10)}`);
                            CC_SETTEXTALIGN(1, 1, 0);
                            CC_SETSIZE((int7 + 1), enum_getvalue(25, 0, 8549, int16), 0, 0);
                            CC_SETTEXTFONT(int16);
                            if ((STAT_BASE(14 as stat) < int22)) {
                                CC_SETCOLOUR(script10495(6));
                            } else if ((MAP_MEMBERS() == 0)) {
                                if ((((int22 > 50) || (OC_MEMBERS(int21) == 1)) || (int4 == 0))) {
                                    CC_SETCOLOUR(script10495(6));
                                } else {
                                    CC_SETCOLOUR(16777215);
                                };
                            } else if ((int4 == 0)) {
                                CC_SETCOLOUR(script10495(6));
                            } else {
                                CC_SETCOLOUR(16777215);
                            };
                            int5 = (int5 + 1);
                            int10 = ((((int26 + int8) + enum_getvalue(25, 0, 8549, int16)) + 8) + 2);
                            CC_SETSIZE[1](0, ((int10 - 2) - CC_GETY[1]()), 1, 0);
                        };
                    };
                    int17 = (int17 + 1);
                };
                IF_SETSIZE(int6, (int10 - 2), 0, 0, int0);
                return;
            };
            int10 = (int10 + 8);
            CC_SETSIZE[1](0, ((int10 - 2) - CC_GETY[1]()), 1, 0);
        };
        int7 = 50;
        int8 = 50;
        int20 = -1;
        int17 = 0;
        int21 = -1;
        int22 = 0;
        int23 = 0;
        int24 = 0;
        int25 = 0;
        int26 = 0;
        int27 = 0;
        while ((int17 < int2)) {
            int20 = -1;
            if ((push_array(int17) != -1)) {
                stack(139264);
                stack(push_array(int17));
                DB_FIND(0);
                int20 = dbrow_findnext();
                if ((int20 != -1)) {
                    int24 = DB_GETFIELDCOUNT(int20, 139312);
                    [int21, int22, int23] = dbrow_getfield(int20, 139312, 0);
                    CC_CREATE[1](int0, 3, int5);
                    CC_SETPOSITION[1](0, int10, 0, 0);
                    CC_SETFILL[1](1);
                    if ((int13 == 1)) {
                        CC_SETCOLOUR[1](script10495(9));
                    } else {
                        CC_SETCOLOUR[1](script10495(12));
                    };
                    int13 = MODULO((int13 + 1), 2);
                    int5 = (int5 + 1);
                    int7 = 35;
                    int8 = 35;
                    int14 = (((int6 - (2 * 4)) - (4 * (int7 + 1))) / 3);
                    CC_CREATE(int0, 4, int5);
                    CC_SETTEXTFONT(29 as fontmetrics);
                    CC_SETTEXT(dbrow_getfield(int20, 139280, 0));
                    CC_SETSIZE(int9, script7593(CC_GETTEXT(), int9, 29, enum_getvalue(25, 0, 8549, 29)), 0, 0);
                    CC_SETTEXTALIGN(0, 0, enum_getvalue(25, 0, 8549, 29));
                    int11 = ((int7 + 1) + int14);
                    int26 = (int10 + 8);
                    if ((CC_GETHEIGHT() <= 15)) {
                        int10 = int26;
                    };
                    CC_SETPOSITION(int11, int10, 0, 0);
                    if ((STAT_BASE(14 as stat) < int22)) {
                        CC_SETCOLOUR(script10495(6));
                    } else if ((MAP_MEMBERS() == 0)) {
                        if ((((int22 > 50) || (OC_MEMBERS(int21) == 1)) || (int4 == 0))) {
                            CC_SETCOLOUR(script10495(6));
                        } else {
                            CC_SETCOLOUR(16777215);
                        };
                    } else if ((int4 == 0)) {
                        CC_SETCOLOUR(script10495(6));
                    } else {
                        CC_SETCOLOUR(16777215);
                    };
                    int5 = (int5 + 1);
                    int25 = 0;
                    int10 = ((int26 + enum_getvalue(25, 0, 8549, 29)) + 5);
                    int7 = 30;
                    int8 = 30;
                    int14 = 5;
                    while ((int25 < int24)) {
                        if ((int25 < 4)) {
                            if (((int25 < 3) || (int24 == 4))) {
                                CC_CREATE(int0, 5, int5);
                                CC_SETPOSITION(int11, (int10 - 1), 0, 0);
                                CC_SETSIZE((int7 + 1), (int8 + 1), 0, 0);
                                CC_SETGRAPHIC(18269 as graphic);
                                int5 = (int5 + 1);
                            };
                            [int21, int27, int27] = dbrow_getfield(int20, 139312, int25);
                            CC_CREATE(int0, 5, int5);
                            CC_SETSIZE(int7, int8, 0, 0);
                            if ((int25 == 3)) {
                                if ((int24 > 4)) {
                                    CC_SETPOSITION(int11, int10, 0, 0);
                                    CC_SETGRAPHIC(18945 as graphic);
                                } else {
                                    CC_SETPOSITION((int11 + 2), (int10 + 1), 0, 0);
                                    CC_SETOBJECT(int21, -1);
                                };
                            } else {
                                CC_SETPOSITION((int11 + 2), (int10 + 1), 0, 0);
                                CC_SETOBJECT(int21, -1);
                            };
                            int5 = (int5 + 1);
                            int11 = (((int11 + int7) + 1) + int14);
                            if ((int24 == 1)) {
                                CC_CREATE(int0, 4, int5);
                                CC_SETPOSITION(int11, int10, 0, 0);
                                CC_SETTEXT(OC_NAME(int21));
                                CC_SETTEXTALIGN(0, 1, enum_getvalue(25, 0, 8549, int16));
                                CC_SETSIZE(105, int8, 1, 0);
                                CC_SETTEXTFONT(int16);
                                if ((STAT_BASE(14 as stat) < int22)) {
                                    CC_SETCOLOUR(script10495(6));
                                } else if ((MAP_MEMBERS() == 0)) {
                                    if ((((int22 > 50) || (OC_MEMBERS(int21) == 1)) || (int4 == 0))) {
                                        CC_SETCOLOUR(script10495(6));
                                    } else {
                                        CC_SETCOLOUR(16777215);
                                    };
                                } else if ((int4 == 0)) {
                                    CC_SETCOLOUR(script10495(6));
                                } else {
                                    CC_SETCOLOUR(16777215);
                                };
                                int5 = (int5 + 1);
                            };
                            int25 = (int25 + 1);
                        };
                        int7 = 35;
                        int8 = 35;
                        int14 = (((int6 - (2 * 4)) - (4 * (int7 + 1))) / 3);
                        int11 = 4;
                        int10 = int26;
                        CC_CREATE(int0, 5, int5);
                        CC_SETPOSITION(int11, (int10 - 1), 0, 0);
                        CC_SETSIZE((int7 + 1), (int8 + 1), 0, 0);
                        CC_SETGRAPHIC(18269 as graphic);
                        int5 = (int5 + 1);
                        CC_CREATE(int0, 5, int5);
                        CC_SETPOSITION(int11, int10, 0, 0);
                        CC_SETSIZE(int7, int8, 0, 0);
                        CC_SETGRAPHIC(enum_getvalue(0, 23, 8548, 13));
                        int5 = (int5 + 1);
                        CC_CREATE(int0, 4, int5);
                        CC_SETPOSITION(int11, ((int10 + int8) + 2), 0, 0);
                        CC_SETTEXT(`Lvl ${inttostring(int22, 10)}`);
                        CC_SETTEXTALIGN(1, 1, 0);
                        CC_SETSIZE((int7 + 1), enum_getvalue(25, 0, 8549, int16), 0, 0);
                        CC_SETTEXTFONT(int16);
                        if ((STAT_BASE(14 as stat) < int22)) {
                            CC_SETCOLOUR(script10495(6));
                        } else if ((MAP_MEMBERS() == 0)) {
                            if ((((int22 > 50) || (OC_MEMBERS(int21) == 1)) || (int4 == 0))) {
                                CC_SETCOLOUR(script10495(6));
                            } else {
                                CC_SETCOLOUR(16777215);
                            };
                        } else if ((int4 == 0)) {
                            CC_SETCOLOUR(script10495(6));
                        } else {
                            CC_SETCOLOUR(16777215);
                        };
                        int5 = (int5 + 1);
                        int10 = ((((int26 + int8) + enum_getvalue(25, 0, 8549, int16)) + 8) + 2);
                        CC_SETSIZE[1](0, ((int10 - 2) - CC_GETY[1]()), 1, 0);
                        int17 = (int17 + 1);
                    };
                    int7 = 35;
                    int8 = 35;
                    int14 = (((int6 - (2 * 4)) - (4 * (int7 + 1))) / 3);
                    int11 = 4;
                    int10 = int26;
                    CC_CREATE(int0, 5, int5);
                    CC_SETPOSITION(int11, (int10 - 1), 0, 0);
                    CC_SETSIZE((int7 + 1), (int8 + 1), 0, 0);
                    CC_SETGRAPHIC(18269 as graphic);
                    int5 = (int5 + 1);
                    CC_CREATE(int0, 5, int5);
                    CC_SETPOSITION(int11, int10, 0, 0);
                    CC_SETSIZE(int7, int8, 0, 0);
                    CC_SETGRAPHIC(enum_getvalue(0, 23, 8548, 13));
                    int5 = (int5 + 1);
                    CC_CREATE(int0, 4, int5);
                    CC_SETPOSITION(int11, ((int10 + int8) + 2), 0, 0);
                    CC_SETTEXT(`Lvl ${inttostring(int22, 10)}`);
                    CC_SETTEXTALIGN(1, 1, 0);
                    CC_SETSIZE((int7 + 1), enum_getvalue(25, 0, 8549, int16), 0, 0);
                    CC_SETTEXTFONT(int16);
                    if ((STAT_BASE(14 as stat) < int22)) {
                        CC_SETCOLOUR(script10495(6));
                    } else if ((MAP_MEMBERS() == 0)) {
                        if ((((int22 > 50) || (OC_MEMBERS(int21) == 1)) || (int4 == 0))) {
                            CC_SETCOLOUR(script10495(6));
                        } else {
                            CC_SETCOLOUR(16777215);
                        };
                    } else if ((int4 == 0)) {
                        CC_SETCOLOUR(script10495(6));
                    } else {
                        CC_SETCOLOUR(16777215);
                    };
                    int5 = (int5 + 1);
                    int10 = ((((int26 + int8) + enum_getvalue(25, 0, 8549, int16)) + 8) + 2);
                    CC_SETSIZE[1](0, ((int10 - 2) - CC_GETY[1]()), 1, 0);
                };
            };
            int17 = (int17 + 1);
        };
        IF_SETSIZE(int6, (int10 - 2), 0, 0, int0);
        return;
    };
    int18 = int17;
    if ((STRING_LENGTH(string1) > 0)) {
        int17 = 0;
        CC_CREATE[1](int0, 3, int5);
        CC_SETPOSITION[1](0, int10, 0, 0);
        CC_SETFILL[1](1);
        if ((int13 == 1)) {
            CC_SETCOLOUR[1](script10495(9));
        } else {
            CC_SETCOLOUR[1](script10495(12));
        };
        int13 = MODULO((int13 + 1), 2);
        int5 = (int5 + 1);
        int10 = (int10 + 8);
        CC_CREATE(int0, 4, int5);
        CC_SETPOSITION(4, int10, 0, 0);
        CC_SETTEXT("Requirements:");
        CC_SETSIZE((2 * 4), script7593(CC_GETTEXT(), (int6 - (2 * 4)), int15, 0), 1, 0);
        CC_SETTEXTFONT(int15);
        if ((MAP_MEMBERS() == 0)) {
            if (((int1 == 1) || (int4 == 0))) {
                CC_SETCOLOUR(script10495(6));
            } else {
                CC_SETCOLOUR(script10495(3));
            };
        } else if ((int4 == 0)) {
            CC_SETCOLOUR(script10495(6));
        } else {
            CC_SETCOLOUR(script10495(3));
        };
        CC_SETTEXTALIGN(0, 1, 0);
        int5 = (int5 + 1);
        int10 = ((int10 + CC_GETHEIGHT()) + 8);
        int7 = 16;
        int8 = 16;
        int11 = ((4 + int7) + 4);
        while ((int17 < int18)) {
            if ((int17 < 4)) {
                CC_CREATE(int0, 5, int5);
                CC_SETPOSITION(4, int10, 0, 0);
                CC_SETSIZE(int7, int8, 0, 0);
                if ((int17 == 3)) {
                    if ((int18 > 4)) {
                        CC_SETGRAPHIC(18944 as graphic);
                    } else {
                        CC_SETGRAPHIC(21342 as graphic);
                    };
                } else {
                    CC_SETGRAPHIC(21342 as graphic);
                };
                int5 = (int5 + 1);
                CC_CREATE(int0, 4, int5);
                CC_SETPOSITION(int11, int10, 0, 0);
                CC_SETTEXT(SUBSTRING(string1, push_array[1](int17), push_array[2](int17)));
                int12 = script7593(CC_GETTEXT(), ((int6 - int11) - 4), int16, 0);
                if ((int12 < int8)) {
                    int12 = int8;
                    CC_SETTEXTALIGN(0, 1, 0);
                } else {
                    CC_SETTEXTALIGN(0, 0, 0);
                };
                CC_SETSIZE((int11 + 4), int12, 1, 0);
                CC_SETTEXTFONT(int16);
                if ((MAP_MEMBERS() == 0)) {
                    if (((int1 == 1) || (int4 == 0))) {
                        CC_SETCOLOUR(script10495(6));
                    } else {
                        CC_SETCOLOUR(16777215);
                    };
                } else if ((int4 == 0)) {
                    CC_SETCOLOUR(script10495(6));
                } else {
                    CC_SETCOLOUR(16777215);
                };
                int5 = (int5 + 1);
                int10 = ((int10 + CC_GETHEIGHT()) + 2);
                int17 = (int17 + 1);
            };
            int10 = (int10 + 8);
            CC_SETSIZE[1](0, ((int10 - 2) - CC_GETY[1]()), 1, 0);
            int7 = 50;
            int8 = 50;
            int20 = -1;
            int17 = 0;
            int21 = -1;
            int22 = 0;
            int23 = 0;
            int24 = 0;
            int25 = 0;
            int26 = 0;
            int27 = 0;
            while ((int17 < int2)) {
                int20 = -1;
                if ((push_array(int17) != -1)) {
                    stack(139264);
                    stack(push_array(int17));
                    DB_FIND(0);
                    int20 = dbrow_findnext();
                    if ((int20 != -1)) {
                        int24 = DB_GETFIELDCOUNT(int20, 139312);
                        [int21, int22, int23] = dbrow_getfield(int20, 139312, 0);
                        CC_CREATE[1](int0, 3, int5);
                        CC_SETPOSITION[1](0, int10, 0, 0);
                        CC_SETFILL[1](1);
                        if ((int13 == 1)) {
                            CC_SETCOLOUR[1](script10495(9));
                        } else {
                            CC_SETCOLOUR[1](script10495(12));
                        };
                        int13 = MODULO((int13 + 1), 2);
                        int5 = (int5 + 1);
                        int7 = 35;
                        int8 = 35;
                        int14 = (((int6 - (2 * 4)) - (4 * (int7 + 1))) / 3);
                        CC_CREATE(int0, 4, int5);
                        CC_SETTEXTFONT(29 as fontmetrics);
                        CC_SETTEXT(dbrow_getfield(int20, 139280, 0));
                        CC_SETSIZE(int9, script7593(CC_GETTEXT(), int9, 29, enum_getvalue(25, 0, 8549, 29)), 0, 0);
                        CC_SETTEXTALIGN(0, 0, enum_getvalue(25, 0, 8549, 29));
                        int11 = ((int7 + 1) + int14);
                        int26 = (int10 + 8);
                        if ((CC_GETHEIGHT() <= 15)) {
                            int10 = int26;
                        };
                        CC_SETPOSITION(int11, int10, 0, 0);
                        if ((STAT_BASE(14 as stat) < int22)) {
                            CC_SETCOLOUR(script10495(6));
                        } else if ((MAP_MEMBERS() == 0)) {
                            if ((((int22 > 50) || (OC_MEMBERS(int21) == 1)) || (int4 == 0))) {
                                CC_SETCOLOUR(script10495(6));
                            } else {
                                CC_SETCOLOUR(16777215);
                            };
                        } else if ((int4 == 0)) {
                            CC_SETCOLOUR(script10495(6));
                        } else {
                            CC_SETCOLOUR(16777215);
                        };
                        int5 = (int5 + 1);
                        int25 = 0;
                        int10 = ((int26 + enum_getvalue(25, 0, 8549, 29)) + 5);
                        int7 = 30;
                        int8 = 30;
                        int14 = 5;
                        while ((int25 < int24)) {
                            if ((int25 < 4)) {
                                if (((int25 < 3) || (int24 == 4))) {
                                    CC_CREATE(int0, 5, int5);
                                    CC_SETPOSITION(int11, (int10 - 1), 0, 0);
                                    CC_SETSIZE((int7 + 1), (int8 + 1), 0, 0);
                                    CC_SETGRAPHIC(18269 as graphic);
                                    int5 = (int5 + 1);
                                };
                                [int21, int27, int27] = dbrow_getfield(int20, 139312, int25);
                                CC_CREATE(int0, 5, int5);
                                CC_SETSIZE(int7, int8, 0, 0);
                                if ((int25 == 3)) {
                                    if ((int24 > 4)) {
                                        CC_SETPOSITION(int11, int10, 0, 0);
                                        CC_SETGRAPHIC(18945 as graphic);
                                    } else {
                                        CC_SETPOSITION((int11 + 2), (int10 + 1), 0, 0);
                                        CC_SETOBJECT(int21, -1);
                                    };
                                } else {
                                    CC_SETPOSITION((int11 + 2), (int10 + 1), 0, 0);
                                    CC_SETOBJECT(int21, -1);
                                };
                                int5 = (int5 + 1);
                                int11 = (((int11 + int7) + 1) + int14);
                                if ((int24 == 1)) {
                                    CC_CREATE(int0, 4, int5);
                                    CC_SETPOSITION(int11, int10, 0, 0);
                                    CC_SETTEXT(OC_NAME(int21));
                                    CC_SETTEXTALIGN(0, 1, enum_getvalue(25, 0, 8549, int16));
                                    CC_SETSIZE(105, int8, 1, 0);
                                    CC_SETTEXTFONT(int16);
                                    if ((STAT_BASE(14 as stat) < int22)) {
                                        CC_SETCOLOUR(script10495(6));
                                    } else if ((MAP_MEMBERS() == 0)) {
                                        if ((((int22 > 50) || (OC_MEMBERS(int21) == 1)) || (int4 == 0))) {
                                            CC_SETCOLOUR(script10495(6));
                                        } else {
                                            CC_SETCOLOUR(16777215);
                                        };
                                    } else if ((int4 == 0)) {
                                        CC_SETCOLOUR(script10495(6));
                                    } else {
                                        CC_SETCOLOUR(16777215);
                                    };
                                    int5 = (int5 + 1);
                                };
                                int25 = (int25 + 1);
                            };
                            int7 = 35;
                            int8 = 35;
                            int14 = (((int6 - (2 * 4)) - (4 * (int7 + 1))) / 3);
                            int11 = 4;
                            int10 = int26;
                            CC_CREATE(int0, 5, int5);
                            CC_SETPOSITION(int11, (int10 - 1), 0, 0);
                            CC_SETSIZE((int7 + 1), (int8 + 1), 0, 0);
                            CC_SETGRAPHIC(18269 as graphic);
                            int5 = (int5 + 1);
                            CC_CREATE(int0, 5, int5);
                            CC_SETPOSITION(int11, int10, 0, 0);
                            CC_SETSIZE(int7, int8, 0, 0);
                            CC_SETGRAPHIC(enum_getvalue(0, 23, 8548, 13));
                            int5 = (int5 + 1);
                            CC_CREATE(int0, 4, int5);
                            CC_SETPOSITION(int11, ((int10 + int8) + 2), 0, 0);
                            CC_SETTEXT(`Lvl ${inttostring(int22, 10)}`);
                            CC_SETTEXTALIGN(1, 1, 0);
                            CC_SETSIZE((int7 + 1), enum_getvalue(25, 0, 8549, int16), 0, 0);
                            CC_SETTEXTFONT(int16);
                            if ((STAT_BASE(14 as stat) < int22)) {
                                CC_SETCOLOUR(script10495(6));
                            } else if ((MAP_MEMBERS() == 0)) {
                                if ((((int22 > 50) || (OC_MEMBERS(int21) == 1)) || (int4 == 0))) {
                                    CC_SETCOLOUR(script10495(6));
                                } else {
                                    CC_SETCOLOUR(16777215);
                                };
                            } else if ((int4 == 0)) {
                                CC_SETCOLOUR(script10495(6));
                            } else {
                                CC_SETCOLOUR(16777215);
                            };
                            int5 = (int5 + 1);
                            int10 = ((((int26 + int8) + enum_getvalue(25, 0, 8549, int16)) + 8) + 2);
                            CC_SETSIZE[1](0, ((int10 - 2) - CC_GETY[1]()), 1, 0);
                            int17 = (int17 + 1);
                        };
                        int7 = 35;
                        int8 = 35;
                        int14 = (((int6 - (2 * 4)) - (4 * (int7 + 1))) / 3);
                        int11 = 4;
                        int10 = int26;
                        CC_CREATE(int0, 5, int5);
                        CC_SETPOSITION(int11, (int10 - 1), 0, 0);
                        CC_SETSIZE((int7 + 1), (int8 + 1), 0, 0);
                        CC_SETGRAPHIC(18269 as graphic);
                        int5 = (int5 + 1);
                        CC_CREATE(int0, 5, int5);
                        CC_SETPOSITION(int11, int10, 0, 0);
                        CC_SETSIZE(int7, int8, 0, 0);
                        CC_SETGRAPHIC(enum_getvalue(0, 23, 8548, 13));
                        int5 = (int5 + 1);
                        CC_CREATE(int0, 4, int5);
                        CC_SETPOSITION(int11, ((int10 + int8) + 2), 0, 0);
                        CC_SETTEXT(`Lvl ${inttostring(int22, 10)}`);
                        CC_SETTEXTALIGN(1, 1, 0);
                        CC_SETSIZE((int7 + 1), enum_getvalue(25, 0, 8549, int16), 0, 0);
                        CC_SETTEXTFONT(int16);
                        if ((STAT_BASE(14 as stat) < int22)) {
                            CC_SETCOLOUR(script10495(6));
                        } else if ((MAP_MEMBERS() == 0)) {
                            if ((((int22 > 50) || (OC_MEMBERS(int21) == 1)) || (int4 == 0))) {
                                CC_SETCOLOUR(script10495(6));
                            } else {
                                CC_SETCOLOUR(16777215);
                            };
                        } else if ((int4 == 0)) {
                            CC_SETCOLOUR(script10495(6));
                        } else {
                            CC_SETCOLOUR(16777215);
                        };
                        int5 = (int5 + 1);
                        int10 = ((((int26 + int8) + enum_getvalue(25, 0, 8549, int16)) + 8) + 2);
                        CC_SETSIZE[1](0, ((int10 - 2) - CC_GETY[1]()), 1, 0);
                    };
                };
                int17 = (int17 + 1);
            };
            IF_SETSIZE(int6, (int10 - 2), 0, 0, int0);
            return;
        };
        int10 = (int10 + 8);
        CC_SETSIZE[1](0, ((int10 - 2) - CC_GETY[1]()), 1, 0);
    };
    int7 = 50;
    int8 = 50;
    int20 = -1;
    int17 = 0;
    int21 = -1;
    int22 = 0;
    int23 = 0;
    int24 = 0;
    int25 = 0;
    int26 = 0;
    int27 = 0;
    while ((int17 < int2)) {
        int20 = -1;
        if ((push_array(int17) != -1)) {
            stack(139264);
            stack(push_array(int17));
            DB_FIND(0);
            int20 = dbrow_findnext();
            if ((int20 != -1)) {
                int24 = DB_GETFIELDCOUNT(int20, 139312);
                [int21, int22, int23] = dbrow_getfield(int20, 139312, 0);
                CC_CREATE[1](int0, 3, int5);
                CC_SETPOSITION[1](0, int10, 0, 0);
                CC_SETFILL[1](1);
                if ((int13 == 1)) {
                    CC_SETCOLOUR[1](script10495(9));
                } else {
                    CC_SETCOLOUR[1](script10495(12));
                };
                int13 = MODULO((int13 + 1), 2);
                int5 = (int5 + 1);
                int7 = 35;
                int8 = 35;
                int14 = (((int6 - (2 * 4)) - (4 * (int7 + 1))) / 3);
                CC_CREATE(int0, 4, int5);
                CC_SETTEXTFONT(29 as fontmetrics);
                CC_SETTEXT(dbrow_getfield(int20, 139280, 0));
                CC_SETSIZE(int9, script7593(CC_GETTEXT(), int9, 29, enum_getvalue(25, 0, 8549, 29)), 0, 0);
                CC_SETTEXTALIGN(0, 0, enum_getvalue(25, 0, 8549, 29));
                int11 = ((int7 + 1) + int14);
                int26 = (int10 + 8);
                if ((CC_GETHEIGHT() <= 15)) {
                    int10 = int26;
                };
                CC_SETPOSITION(int11, int10, 0, 0);
                if ((STAT_BASE(14 as stat) < int22)) {
                    CC_SETCOLOUR(script10495(6));
                } else if ((MAP_MEMBERS() == 0)) {
                    if ((((int22 > 50) || (OC_MEMBERS(int21) == 1)) || (int4 == 0))) {
                        CC_SETCOLOUR(script10495(6));
                    } else {
                        CC_SETCOLOUR(16777215);
                    };
                } else if ((int4 == 0)) {
                    CC_SETCOLOUR(script10495(6));
                } else {
                    CC_SETCOLOUR(16777215);
                };
                int5 = (int5 + 1);
                int25 = 0;
                int10 = ((int26 + enum_getvalue(25, 0, 8549, 29)) + 5);
                int7 = 30;
                int8 = 30;
                int14 = 5;
                while ((int25 < int24)) {
                    if ((int25 < 4)) {
                        if (((int25 < 3) || (int24 == 4))) {
                            CC_CREATE(int0, 5, int5);
                            CC_SETPOSITION(int11, (int10 - 1), 0, 0);
                            CC_SETSIZE((int7 + 1), (int8 + 1), 0, 0);
                            CC_SETGRAPHIC(18269 as graphic);
                            int5 = (int5 + 1);
                        };
                        [int21, int27, int27] = dbrow_getfield(int20, 139312, int25);
                        CC_CREATE(int0, 5, int5);
                        CC_SETSIZE(int7, int8, 0, 0);
                        if ((int25 == 3)) {
                            if ((int24 > 4)) {
                                CC_SETPOSITION(int11, int10, 0, 0);
                                CC_SETGRAPHIC(18945 as graphic);
                            } else {
                                CC_SETPOSITION((int11 + 2), (int10 + 1), 0, 0);
                                CC_SETOBJECT(int21, -1);
                            };
                        } else {
                            CC_SETPOSITION((int11 + 2), (int10 + 1), 0, 0);
                            CC_SETOBJECT(int21, -1);
                        };
                        int5 = (int5 + 1);
                        int11 = (((int11 + int7) + 1) + int14);
                        if ((int24 == 1)) {
                            CC_CREATE(int0, 4, int5);
                            CC_SETPOSITION(int11, int10, 0, 0);
                            CC_SETTEXT(OC_NAME(int21));
                            CC_SETTEXTALIGN(0, 1, enum_getvalue(25, 0, 8549, int16));
                            CC_SETSIZE(105, int8, 1, 0);
                            CC_SETTEXTFONT(int16);
                            if ((STAT_BASE(14 as stat) < int22)) {
                                CC_SETCOLOUR(script10495(6));
                            } else if ((MAP_MEMBERS() == 0)) {
                                if ((((int22 > 50) || (OC_MEMBERS(int21) == 1)) || (int4 == 0))) {
                                    CC_SETCOLOUR(script10495(6));
                                } else {
                                    CC_SETCOLOUR(16777215);
                                };
                            } else if ((int4 == 0)) {
                                CC_SETCOLOUR(script10495(6));
                            } else {
                                CC_SETCOLOUR(16777215);
                            };
                            int5 = (int5 + 1);
                        };
                        int25 = (int25 + 1);
                    };
                    int7 = 35;
                    int8 = 35;
                    int14 = (((int6 - (2 * 4)) - (4 * (int7 + 1))) / 3);
                    int11 = 4;
                    int10 = int26;
                    CC_CREATE(int0, 5, int5);
                    CC_SETPOSITION(int11, (int10 - 1), 0, 0);
                    CC_SETSIZE((int7 + 1), (int8 + 1), 0, 0);
                    CC_SETGRAPHIC(18269 as graphic);
                    int5 = (int5 + 1);
                    CC_CREATE(int0, 5, int5);
                    CC_SETPOSITION(int11, int10, 0, 0);
                    CC_SETSIZE(int7, int8, 0, 0);
                    CC_SETGRAPHIC(enum_getvalue(0, 23, 8548, 13));
                    int5 = (int5 + 1);
                    CC_CREATE(int0, 4, int5);
                    CC_SETPOSITION(int11, ((int10 + int8) + 2), 0, 0);
                    CC_SETTEXT(`Lvl ${inttostring(int22, 10)}`);
                    CC_SETTEXTALIGN(1, 1, 0);
                    CC_SETSIZE((int7 + 1), enum_getvalue(25, 0, 8549, int16), 0, 0);
                    CC_SETTEXTFONT(int16);
                    if ((STAT_BASE(14 as stat) < int22)) {
                        CC_SETCOLOUR(script10495(6));
                    } else if ((MAP_MEMBERS() == 0)) {
                        if ((((int22 > 50) || (OC_MEMBERS(int21) == 1)) || (int4 == 0))) {
                            CC_SETCOLOUR(script10495(6));
                        } else {
                            CC_SETCOLOUR(16777215);
                        };
                    } else if ((int4 == 0)) {
                        CC_SETCOLOUR(script10495(6));
                    } else {
                        CC_SETCOLOUR(16777215);
                    };
                    int5 = (int5 + 1);
                    int10 = ((((int26 + int8) + enum_getvalue(25, 0, 8549, int16)) + 8) + 2);
                    CC_SETSIZE[1](0, ((int10 - 2) - CC_GETY[1]()), 1, 0);
                    int17 = (int17 + 1);
                };
                int7 = 35;
                int8 = 35;
                int14 = (((int6 - (2 * 4)) - (4 * (int7 + 1))) / 3);
                int11 = 4;
                int10 = int26;
                CC_CREATE(int0, 5, int5);
                CC_SETPOSITION(int11, (int10 - 1), 0, 0);
                CC_SETSIZE((int7 + 1), (int8 + 1), 0, 0);
                CC_SETGRAPHIC(18269 as graphic);
                int5 = (int5 + 1);
                CC_CREATE(int0, 5, int5);
                CC_SETPOSITION(int11, int10, 0, 0);
                CC_SETSIZE(int7, int8, 0, 0);
                CC_SETGRAPHIC(enum_getvalue(0, 23, 8548, 13));
                int5 = (int5 + 1);
                CC_CREATE(int0, 4, int5);
                CC_SETPOSITION(int11, ((int10 + int8) + 2), 0, 0);
                CC_SETTEXT(`Lvl ${inttostring(int22, 10)}`);
                CC_SETTEXTALIGN(1, 1, 0);
                CC_SETSIZE((int7 + 1), enum_getvalue(25, 0, 8549, int16), 0, 0);
                CC_SETTEXTFONT(int16);
                if ((STAT_BASE(14 as stat) < int22)) {
                    CC_SETCOLOUR(script10495(6));
                } else if ((MAP_MEMBERS() == 0)) {
                    if ((((int22 > 50) || (OC_MEMBERS(int21) == 1)) || (int4 == 0))) {
                        CC_SETCOLOUR(script10495(6));
                    } else {
                        CC_SETCOLOUR(16777215);
                    };
                } else if ((int4 == 0)) {
                    CC_SETCOLOUR(script10495(6));
                } else {
                    CC_SETCOLOUR(16777215);
                };
                int5 = (int5 + 1);
                int10 = ((((int26 + int8) + enum_getvalue(25, 0, 8549, int16)) + 8) + 2);
                CC_SETSIZE[1](0, ((int10 - 2) - CC_GETY[1]()), 1, 0);
            };
        };
        int17 = (int17 + 1);
    };
    IF_SETSIZE(int6, (int10 - 2), 0, 0, int0);
    return;
}