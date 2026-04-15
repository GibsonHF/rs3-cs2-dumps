//
function script11497(int0: unknown_int): void {
    script11496(int0);
    var int1 = comp(-1, 65535);
    var int2 = -1;
    var int3 = -1;
    if ((int0 == 1)) {
        int1 = comp(1588, 9);
    } else if ((int0 == 2)) {
        int1 = comp(1681, 12);
    };
    if (((int1 != comp(-1, 65535)) && (IF_GETNEXTSUBID(int1) == 0))) {
        int3 = ENUM_GETOUTPUTCOUNT(7674 as cs2enum);
        while ((++int2 < int3)) {
            CC_CREATE(int1, 5, int2);
        };
    };
    var int4 = TELEMETRY_GET_GROUP_COUNT();
    if ((int4 == -1)) {
        return;
    };
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 33;
    var int17 = 0;
    var string0 = "";
    var string1 = "";
    var int18 = 0;
    var int19 = 0;
    int1 = comp(-1, 65535);
    var int20 = comp(-1, 65535);
    var int21 = comp(-1, 65535);
    var int22 = comp(-1, 65535);
    var int23 = comp(-1, 65535);
    var int24 = comp(-1, 65535);
    var int25 = 0;
    var int26 = 0;
    if ((int0 == 1)) {
        int25 = IF_GETWIDTH(comp(1588, 31));
        int26 = PARAWIDTH("888:88:88", 1000, IF_GETFONTMETRICS(comp(1588, 38)));
        if (((IF_FIND(comp(1588, 33)) == 1) && (IF_FIND[1](comp(1588, 39)) == 1))) {
            if ((varplayer_5884 != 1 as telemetry_interval)) {
                CC_SETPOSITION(4, 4, 2, 2);
                CC_SETSIZE(0, CC_GETHEIGHT(), 0, 0);
                CC_SETHIDE[1](false);
            } else if ((((int26 + (4 * 24)) + (6 * 4)) > int25)) {
                CC_SETPOSITION((0 - 24), 4, 2, 2);
                if ((((int26 + (3 * 24)) + (5 * 4)) > int25)) {
                    CC_SETSIZE((2 * 4), CC_GETHEIGHT(), 1, 0);
                    CC_SETHIDE[1](true);
                } else {
                    CC_SETSIZE((24 + (3 * 4)), CC_GETHEIGHT(), 1, 0);
                    CC_SETHIDE[1](false);
                };
            } else {
                CC_SETPOSITION(4, 4, 2, 2);
                CC_SETSIZE(((2 * 24) + (4 * 4)), CC_GETHEIGHT(), 1, 0);
                CC_SETHIDE[1](false);
            };
        };
    };
    int25 = 0;
    if ((varbitplayer_28120 == 1)) {
        int26 = PARAWIDTH("-2,088,888,888", 1000, 26 as fontmetrics);
    } else {
        int26 = PARAWIDTH("-888W", 1000, 26 as fontmetrics);
    };
    int26 = (MAX(int26, PARAWIDTH("8W 88W", 1000, 26 as fontmetrics)) + 4);
    var int27 = 0;
    var int28 = 0;
    var int29 = -1 as cs2enum;
    var int30 = 0;
    var int31 = 0;
    var int32 = 0;
    var int33 = 1;
    var int34 = 1;
    var int35 = -1 as stat;
    var int36 = script10075();
    while ((int5 < int4)) {
        int6 = TELEMETRY_GET_GROUP_ID(int5);
        [int1, int20, int21, int22, int23, int24] = script11495(int6, int0);
        if (((((int1 != comp(-1, 65535)) && (int20 != comp(-1, 65535))) && (int21 != comp(-1, 65535))) && (int22 != comp(-1, 65535)))) {
            if ((script12282(int6, 0) == 1)) {
                int7 = TELEMETRY_GET_COLUMN_COUNT(int5);
                int10 = TELEMETRY_GET_ROW_COUNT(int5);
                int12 = 0;
                int11 = 0;
                while ((int12 < int10)) {
                    int13 = TELEMETRY_GET_ROW_ID(int5, int12);
                    if ((script12280(int6, int13, 0) == 1)) {
                        int11 = (int11 + 1);
                    };
                    int12 = (int12 + 1);
                };
                int12 = 0;
                int14 = (int14 + int11);
                int8 = 0;
                int17 = 0;
                int16 = 33;
                if (((int11 > 0) && (int7 > 0))) {
                    int15 = (int15 + 1);
                    CC_CREATE(int1, 3, 0);
                    CC_SETFILL(1);
                    CC_SETPOSITION(0, 0, 1, 0);
                    CC_SETSIZE(0, 18, 1, 0);
                    script10010(28680 as struct);
                    if ((int0 == 1)) {
                        script12591(6, 30507 as struct);
                    };
                    CC_SENDTOBACK();
                    int27 = ((int11 * 27) + 18);
                    IF_SETSIZE(0, int27, 1, 0, int1);
                    IF_SETPOSITION(0, int28, 0, 0, int1);
                    IF_SETSIZE(0, int27, 1, 0, int20);
                    IF_SETPOSITION(0, int28, 0, 0, int20);
                    IF_SETSIZE(0, int27, 1, 0, int21);
                    IF_SETPOSITION(0, int28, 0, 0, int21);
                    IF_SETSIZE(0, int27, 1, 0, int22);
                    IF_SETPOSITION(0, int28, 0, 0, int22);
                    IF_SETSIZE(0, int27, 1, 0, int24);
                    IF_SETPOSITION(0, int28, 0, 0, int24);
                    int28 = (int28 + (((int11 * 27) + 18) + 4));
                    CC_CREATE(int1, 3, 1);
                    CC_SETFILL(1);
                    CC_SETPOSITION(0, 18, 1, 0);
                    CC_SETSIZE(0, (int11 * 27), 1, 0);
                    script10010(28679 as struct);
                    if ((int0 == 1)) {
                        script12591(6, 30507 as struct);
                    };
                    int2 = (2 - 1);
                    int3 = (2 + ((int10 + 1) * (int7 + 3)));
                    while ((++int2 < int3)) {
                        if ((MODULO((int2 - 2), (int7 + 3)) < 3)) {
                            CC_CREATE(int1, 5, int2);
                        } else {
                            CC_CREATE(int1, 4, int2);
                        };
                    };
                    if (((int6 != 1) && (CC_FIND(int1, (2 + 0)) == 1))) {
                        CC_SETSIZE(25, 25, 0, 0);
                        CC_SETPOSITION(4, (18 + 1), 0, 0);
                        CC_SETGRAPHIC(script12288(int6, 1));
                        string0 = script12292(script12287(int6, 1));
                        CC_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643));
                        CC_SETNOCLICKTHROUGH(1);
                    };
                    while ((int8 < int7)) {
                        int9 = TELEMETRY_GET_COLUMN_ID(int5, int8);
                        int33 = script12281(int9, 0);
                        int17 = 18;
                        while ((int12 < int10)) {
                            int13 = TELEMETRY_GET_ROW_ID(int5, int12);
                            int34 = script12280(int6, int13, 0);
                            if ((int33 == 1)) {
                                if ((int12 == 0)) {
                                    string0 = enum_getvalue(0, 36, 10039 as cs2enum, int9);
                                    if (((PARAWIDTH(string0, 1000, 26 as fontmetrics) + 4) < int26)) {
                                        string1 = string0;
                                    } else {
                                        string1 = enum_getvalue(0, 36, 11344 as cs2enum, int9);
                                    };
                                    CC_CREATE(int21, 4, IF_GETNEXTSUBID(int21));
                                    CC_SETSIZE((int26 - 4), 18, 0, 0);
                                    CC_SETPOSITION(int16, 0, 0, 0);
                                    CC_SETOP(1, string0);
                                    CC_SETOP(2, `Remove ${string0} column`);
                                    CC_SETNOCLICKTHROUGH(true);
                                    if ((CC_FIND[1](int1, ((2 + 3) + int8)) == 1)) {
                                        CC_SETSIZE[1](int26, 18, 0, 0);
                                        CC_SETPOSITION[1](int16, 0, 0, 0);
                                        CC_SETTEXTFONT[1](26 as fontmetrics);
                                        CC_SETTEXT[1](script3930(string1, (CC_GETWIDTH[1]() - 4), 1, CC_GETFONTMETRICS[1]()));
                                        CC_SETTEXTALIGN[1](0, 1, 0);
                                        CC_SETCOLOUR[1](script10495(3));
                                        CC_SETTEXTSHADOW[1](true);
                                        CC_SETPARAM_INT[1](5326, int8);
                                        if ((strcmp(string0, string1) == 0)) {
                                            string0 = "";
                                        } else {
                                            string0 = `${string0}<br>`;
                                        };
                                        string0 = `${string0}Select to hide this column.`;
                                        CC_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643));
                                    };
                                };
                                if (((int34 == 1) && (CC_FIND(int1, (((2 + ((int12 + 1) * (3 + int7))) + 3) + int8)) == 1))) {
                                    CC_SETPOSITION(int16, int17, 0, 0);
                                    CC_SETSIZE(int26, 27, 0, 0);
                                    CC_SETTEXTFONT(26 as fontmetrics);
                                    CC_SETTEXTALIGN(0, 1, 0);
                                    int18 = TELEMETRY_GET_GRID_VALUE(int5, int12, int8);
                                    int2 = script12285(int6, int13);
                                    if (((((int0 == 1) && (int9 == 1)) && (varbitclient_2053 == 1)) && (CC_FIND[1](comp(1477, 688), int2) == 1))) {
                                        cc_setparam[1](5945, CLIENTCLOCK());
                                        CC_SETHIDE[1](false);
                                        cc_setparam[1](5848, int1);
                                        cc_setparam[1](4423, CC_GETID());
                                        if ((cc_getparam[1](5946) == enum_getvalue(126, 0, 11379 as cs2enum, varplayer_5884))) {
                                            int19 = script11853((int18 - cc_getparam[1](5947)), int9);
                                            if ((int19 > 0)) {
                                                string0 = `+${script11498(int19, int13, int9, -1)}`;
                                                CC_SETTRANS[1](0);
                                                cc_setparam[1](5839, 500);
                                            } else if ((int19 == 0)) {
                                                string0 = CC_GETTEXT[1]();
                                                if (((CC_GETX[1]() + CC_GETWIDTH[1]()) <= 0)) {
                                                    CC_SETTRANS[1](255);
                                                };
                                            } else {
                                                string0 = "";
                                                CC_SETTRANS[1](255);
                                            };
                                        } else {
                                            string0 = "";
                                            cc_setparam[1](5946, enum_getvalue(126, 0, 11379 as cs2enum, varplayer_5884));
                                            CC_SETTRANS[1](255);
                                        };
                                        CC_SETTEXT[1](string0);
                                        cc_setparam[1](5947, int18);
                                    };
                                    if (((int9 == 1) && (int18 == 2147483647))) {
                                        string0 = "Lots!";
                                        CC_SETTEXT(script3930(string0, (CC_GETWIDTH() - 4), 1, CC_GETFONTMETRICS()));
                                    } else {
                                        int18 = script11853(int18, int9);
                                        string0 = script11498(int18, int13, int9, -1);
                                        CC_SETTEXT(string0);
                                    };
                                    CC_SETCOLOUR(16777215);
                                    CC_SETTEXTSHADOW(true);
                                    CC_SETPARAM_INT(5325, int12);
                                    CC_SETPARAM_INT(5326, int8);
                                    cc_setparam(5946, int9);
                                    CC_SETONMOUSEREPEAT(callback(script12599, -2147483645, -2147483643, int2, int10, int7));
                                };
                            } else if ((int12 == 0)) {
                                CC_CREATE(int21, 4, IF_GETNEXTSUBID(int21));
                                CC_SETPOSITION(int16, 0, 0, 0);
                            };
                            if ((int8 == 0)) {
                                if ((int34 == 1)) {
                                    if ((((int6 == 1) && (int13 != -1)) && (CC_FIND(int1, ((2 + ((int12 + 1) * (3 + int7))) + 0)) == 1))) {
                                        CC_SETSIZE(25, 25, 0, 0);
                                        CC_SETPOSITION(4, (int17 + 1), 0, 0);
                                        CC_SETGRAPHIC(script12288(int6, int13));
                                        CC_SETPARAM_INT(5325, int12);
                                        int35 = enum_getvalue(0, 17, 681 as cs2enum, int13);
                                        int36 = script10075();
                                        int2 = CC_GETID();
                                        if ((int35 != -1 as stat)) {
                                            CC_SETONMOUSEREPEAT(callback(script545, int1, int2, int35, int36, 0));
                                            CC_SETONMOUSELEAVE(callback(script546, int36));
                                        } else {
                                            string0 = script12292(script12287(int6, int13));
                                            if ((int13 == 0)) {
                                                if ((varbitplayer_19007 == 1)) {
                                                    string0 = `${string0}<br>Total level: ${inttostring(script11866(), 10)}`;
                                                } else {
                                                    string0 = `${string0}<br>Total level: ${inttostring(script2761(), 10)}`;
                                                };
                                                if ((script9201() == 1)) {
                                                    string0 = `${string0}<br>Total XP: ${script8019(0)}<br>Bonus XP: <col=00FF00>${script9202()}`;
                                                } else {
                                                    string0 = `${string0}<br>Total XP: ${script8019(0)}`;
                                                };
                                            } else if ((int13 == 30)) {
                                                string0 = `${string0}<br>Combat level: ${inttostring(script1432(), 10)}`;
                                            };
                                            CC_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643));
                                        };
                                        CC_SETNOCLICKTHROUGH(true);
                                    };
                                    if ((CC_FIND[1](int1, ((2 + ((int12 + 1) * (3 + int7))) + 1)) == 1)) {
                                        CC_CREATE(int20, 4, IF_GETNEXTSUBID(int20));
                                        CC_SETSIZE(25, 25, 0, 0);
                                        CC_SETPOSITION(4, (int17 + 1), 0, 0);
                                        CC_SETSIZE[1](8, 8, 0, 0);
                                        CC_SETPOSITION[1](0, ((int17 + (27 / 2)) - (8 / 2)), 0, 0);
                                        CC_SETGRAPHIC[1](26778 as graphic);
                                        CC_SETPARAM_INT[1](5325, int12);
                                        CC_SETPARAM_INT[1](5638, 1);
                                        if ((TELEMETRY_IS_ROW_PINNED(int5, int12) == 1)) {
                                            CC_SETOP(1, "Unpin row");
                                        } else {
                                            CC_SETOP(1, "Pin row");
                                            CC_SETHIDE[1](true);
                                        };
                                        if ((int6 == 1)) {
                                            int35 = enum_getvalue(0, 17, 681 as cs2enum, int13);
                                            if ((int35 != -1 as stat)) {
                                                CC_SETOP(2, "Set level target");
                                                CC_SETOP(3, "Set XP target");
                                                CC_SETOP(4, "Clear target");
                                            };
                                        };
                                        CC_SETOP(5, "Send to Graph");
                                        CC_SETOP(6, "Hide row");
                                        CC_SETOP(7, "Remove row");
                                        if ((varplayer_5884 == 0 as telemetry_interval)) {
                                            CC_SETOP(8, "---");
                                            CC_SETOP(9, "Reset row");
                                            CC_SETOP(10, "Reset all rows");
                                        };
                                        CC_SETONOP(callback(script12598, -2147483644, int6, int13, int1, CC_GETID[1]()));
                                    };
                                    if ((CC_FIND(int1, ((2 + ((int12 + 1) * (3 + int7))) + 2)) == 1)) {
                                        CC_SETPOSITION(33, int17, 0, 0);
                                        CC_SETSIZE(33, 27, 1, 0);
                                    };
                                } else {
                                    CC_CREATE(int20, 4, IF_GETNEXTSUBID(int20));
                                };
                                if ((int11 > 1)) {
                                    if ((int34 == 1)) {
                                        CC_CREATE(int22, 4, IF_GETNEXTSUBID(int22));
                                        CC_SETSIZE(25, 25, 0, 0);
                                        CC_SETPOSITION(4, (int17 + 1), 0, 0);
                                        CC_SENDTOFRONT();
                                        CC_SETPARAM_INT(5325, int12);
                                        script11832(int22, int1, 2, int5, int12, int8, int0);
                                        CC_CREATE(int22, 4, IF_GETNEXTSUBID(int22));
                                        CC_SETSIZE(25, 25, 0, 0);
                                        CC_SETPOSITION(4, (int17 + 1), 0, 0);
                                        CC_SETPARAM_INT(5325, int12);
                                        CC_SETONMOUSEOVER(callback(script11830, CC_GETID(), int22, int1, int0, int26));
                                        CC_SETONMOUSELEAVE(callback(script11831, int0));
                                    } else {
                                        CC_CREATE(int22, 4, IF_GETNEXTSUBID(int22));
                                        CC_CREATE(int22, 4, IF_GETNEXTSUBID(int22));
                                    };
                                } else {
                                    CC_CREATE(int22, 4, IF_GETNEXTSUBID(int22));
                                    CC_CREATE(int22, 4, IF_GETNEXTSUBID(int22));
                                };
                            };
                            int12 = (int12 + 1);
                            if ((int34 == 1)) {
                                int17 = (int17 + 27);
                            };
                        };
                        if ((int33 == 1)) {
                            CC_CREATE(int22, 4, IF_GETNEXTSUBID(int22));
                            CC_SETSIZE((int26 - 4), 18, 0, 0);
                            CC_SETPOSITION(int16, 0, 0, 0);
                            CC_SETPARAM_INT(5326, int8);
                            script11832(int22, int1, 1, int5, int12, int8, int0);
                            CC_CREATE(int22, 4, IF_GETNEXTSUBID(int22));
                            CC_SETSIZE((int26 - 4), 18, 0, 0);
                            CC_SETPOSITION(int16, 0, 0, 0);
                            CC_SETPARAM_INT(5326, int8);
                            CC_SETONMOUSEOVER(callback(script11830, CC_GETID(), int22, int1, int0, int26));
                            CC_SETONMOUSELEAVE(callback(script11831, int0));
                            int16 = (int16 + int26);
                        } else {
                            CC_CREATE(int22, 4, IF_GETNEXTSUBID(int22));
                            CC_CREATE(int22, 4, IF_GETNEXTSUBID(int22));
                        };
                        int8 = (int8 + 1);
                        int12 = 0;
                    };
                    script11824(int23);
                    int31 = script11835(int6);
                    if (((TELEMETRY_GET_COLUMN_COUNT(int5) < int31) && (script12278() == 1))) {
                        IF_SETHIDE(false, int23);
                        IF_SETPOSITION(int16, 0, 0, 0, int23);
                        IF_SETOP(1, "Show all columns", int23);
                        if ((script6431() == true)) {
                            string0 = "Tap to show all columns, or press and hold to add individual columns.";
                        } else {
                            string0 = "Left-click to show all columns, or right-click to add individual columns.";
                        };
                        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int23);
                        int29 = enum_getvalue(0, 26, 10367, int6);
                        if ((int29 != -1)) {
                            int30 = 0;
                            while ((int30 < int31)) {
                                int32 = enum_getvalue(0, 0, int29, int30);
                                if ((TELEMETRY_GET_COLUMN_INDEX(int5, int32) == -1)) {
                                    IF_SETOP((int30 + 1), `Show ${enum_getvalue(0, 36, 10039 as cs2enum, int32)}`, int23);
                                };
                                int30 = (int30 + 1);
                            };
                        };
                        int16 = (int16 + 20);
                    };
                    if ((CC_FIND(int1, 1) == 1)) {
                        CC_SENDTOBACK();
                    };
                } else {
                    script11824(int23);
                };
            } else {
                if (((varbitplayer_30731 == 0) && (script12282(int6, 1) == 1))) {
                    int15 = (int15 + 1);
                    int14 = (int14 + 1);
                    int11 = 1;
                    int16 = -5;
                    int17 = 18;
                    CC_CREATE(int1, 3, 0);
                    CC_SETFILL(1);
                    CC_SETPOSITION(0, 0, 1, 0);
                    CC_SETSIZE(0, 18, 1, 0);
                    script10010(28680 as struct);
                    if ((int0 == 1)) {
                        script12591(6, 30507 as struct);
                    };
                    CC_SENDTOBACK();
                    int27 = ((int11 * 27) + 18);
                    IF_SETSIZE(0, int27, 1, 0, int1);
                    IF_SETPOSITION(0, int28, 0, 0, int1);
                    IF_SETSIZE(0, int27, 1, 0, int20);
                    IF_SETPOSITION(0, int28, 0, 0, int20);
                    IF_SETSIZE(0, int27, 1, 0, int21);
                    IF_SETPOSITION(0, int28, 0, 0, int21);
                    IF_SETSIZE(0, int27, 1, 0, int22);
                    IF_SETPOSITION(0, int28, 0, 0, int22);
                    IF_SETSIZE(0, int27, 1, 0, int24);
                    IF_SETPOSITION(0, int28, 0, 0, int24);
                    int28 = (int28 + (((int11 * 27) + 18) + 4));
                    CC_CREATE(int1, 3, 1);
                    CC_SETFILL(1);
                    CC_SETPOSITION(0, 18, 1, 0);
                    CC_SETSIZE(0, (int11 * 27), 1, 0);
                    script10010(28679 as struct);
                    if ((int0 == 1)) {
                        script12591(6, 30507 as struct);
                    };
                    CC_CREATE(int21, 4, IF_GETNEXTSUBID(int21));
                    CC_SETPOSITION(int16, 0, 0, 0);
                    CC_CREATE(int1, 5, (2 + 0));
                    CC_SETSIZE(25, 25, 0, 0);
                    CC_SETPOSITION(4, (int17 + 1), 0, 0);
                    CC_SETGRAPHIC(script12288(int6, 0));
                };
                script11824(int23);
            };
        };
        int25 = MAX(int25, int16);
        int5 = (int5 + 1);
    };
    if (((script12278() == 0) && (varbitplayer_30731 == 0))) {
        int4 = ENUM_GETOUTPUTCOUNT(10365 as cs2enum);
    } else {
        int4 = -1;
    };
    int5 = 0;
    while ((int5 < int4)) {
        int6 = enum_getvalue(0, 0, 10365 as cs2enum, int5);
        if ((script12282(int6, 1) == 1)) {
            [int1, int20, int21, int22, int23, int24] = script11495(int6, int0);
            if ((((((int1 != comp(-1, 65535)) && (int20 != comp(-1, 65535))) && (int21 != comp(-1, 65535))) && (int22 != comp(-1, 65535))) && (CC_FIND[1](int21, (IF_GETNEXTSUBID(int21) - 1)) == 1))) {
                int16 = MAX(33, (CC_GETX[1]() + CC_GETWIDTH[1]()));
                int29 = enum_getvalue(0, 26, 10367 as cs2enum, int6);
                if ((int29 != -1 as cs2enum)) {
                    int8 = 0;
                    int31 = script11835(int6);
                    while ((int8 < int31)) {
                        int9 = enum_getvalue(0, 0, int29, int8);
                        if (((script12281(int9, 1) == 1) && (script12281(int9, 0) == 0))) {
                            string0 = enum_getvalue(0, 36, 10039 as cs2enum, int9);
                            CC_CREATE(int1, 5, IF_GETNEXTSUBID(int1));
                            CC_SETGRAPHIC(26163 as graphic);
                            CC_SETCOLOUR(script10495(3));
                            CC_SETSIZE(12, 12, 0, 0);
                            CC_SETPOSITION((int16 + -1), (((18 / 2) - (CC_GETHEIGHT() / 2)) + -1), 0, 0);
                            CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
                            CC_SETPOSITION((((int16 + -1) + 12) + 2), 0, 0, 0);
                            CC_SETSIZE((int26 - ((-1 + 12) + 2)), 18, 0, 0);
                            CC_SETTEXTFONT(26 as fontmetrics);
                            if (((PARAWIDTH(string0, 1000, CC_GETFONTMETRICS()) + 2) < CC_GETWIDTH())) {
                                string1 = string0;
                            } else {
                                string1 = enum_getvalue(0, 36, 11344 as cs2enum, int9);
                            };
                            CC_SETTEXT(script3930(string1, (CC_GETWIDTH() - 2), 1, CC_GETFONTMETRICS()));
                            CC_SETTEXTALIGN(0, 1, 0);
                            CC_SETCOLOUR(script10495(3));
                            CC_SETTEXTSHADOW(true);
                            int17 = CC_GETHEIGHT();
                            int27 = IF_GETHEIGHT(int1);
                            while ((int17 < int27)) {
                                CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
                                string0 = "-";
                                CC_SETTEXT(string0);
                                CC_SETSIZE(int26, 27, 0, 0);
                                CC_SETPOSITION(int16, int17, 0, 0);
                                CC_SETTEXTFONT(26 as fontmetrics);
                                CC_SETTEXTALIGN(0, 1, 0);
                                CC_SETCOLOUR(script10495(5));
                                CC_SETTEXTSHADOW(true);
                                int17 = (int17 + CC_GETHEIGHT());
                            };
                            int16 = (int16 + int26);
                        };
                        int8 = (int8 + 1);
                    };
                    if ((int16 != (CC_GETX[1]() + CC_GETWIDTH[1]()))) {
                        CC_CREATE(int24, 3, IF_GETNEXTSUBID(int24));
                        CC_SETPOSITION(MAX(((CC_GETX[1]() + CC_GETWIDTH[1]()) - 2), 0), 0, 0, 0);
                        CC_SETSIZE(CC_GETX(), 0, 1, 1);
                        CC_SETFILL(1);
                        CC_SETTRANS(205);
                        if ((IF_FIND[1](int24) == 1)) {
                            if ((cc_getparam[1](5946) == 1)) {
                                CC_SETCOLOUR(script10495(4));
                            } else {
                                CC_SETCOLOUR(script10495(3));
                            };
                            cc_setparam[1](5946, 0);
                            cc_setparam[1](5947, (CLIENTCLOCK() + 5));
                        };
                        CC_SETONMOUSEOVER(callback(script12341, -2147483645, -2147483643, script10495(4)));
                        CC_SETONMOUSELEAVE(callback(script12346, -2147483645, -2147483643, script10495(3)));
                        CC_SETONTIMER(callback(script12347, -2147483645, -2147483643, script10495(3)));
                        CC_SETONCLICK(callback(script2140, -2147483645, -2147483643, 180));
                        CC_SETONRELEASE(callback(script2140, -2147483645, -2147483643, 205));
                        CC_SETNOCLICKTHROUGH(1);
                        string0 = "Click here to upgrade";
                        CC_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643));
                        CC_SETOP(1, "Upgrade");
                        CC_SETOP(2, "Hide Pro features");
                        CC_SETONOP(callback(script12319, -2147483644));
                        int25 = MAX(int25, int16);
                    };
                };
            };
        };
        int5 = (int5 + 1);
    };
    var int37 = comp(1588, 5);
    if ((int0 == 2)) {
        int37 = comp(1681, 8);
    };
    if ((int14 == 0)) {
        IF_SETHIDE(false, int37);
        int14 = (int14 + 1);
        varclient_5495 = 78;
        varclient_5496 = 58;
    } else {
        IF_SETHIDE(true, int37);
        varclient_5495 = (33 + int26);
        if ((((script12278() == 1) || (varbitplayer_30731 == 1)) || (((varbitplayer_30615 == 0) && (varbitplayer_30731 == 0)) && (varbitplayer_28120 == 1)))) {
            varclient_5495 = (varclient_5495 - 4);
        };
        if (((int25 > ((33 + int26) + 20)) && (varbitplayer_28120 == 0))) {
            varclient_5495 = (varclient_5495 + int26);
        };
        varclient_5496 = (((int14 * 27) + (int15 * 18)) + (MAX(0, (int15 - 1)) * 4));
    };
    if ((varbitclient_32703 == 0)) {
        varclient_5496 = (varclient_5496 + 33);
    };
    var int38 = 0;
    if (((int0 == 1) && (script12616(script10405(28)) == 1))) {
        int38 = 1;
    };
    var int39 = comp(-1, 65535);
    var int40 = comp(-1, 65535);
    var int41 = comp(-1, 65535);
    var int42 = comp(-1, 65535);
    if ((int0 == 2)) {
        int39 = comp(1681, 13);
        int40 = comp(1681, 14);
        int41 = comp(1681, 5);
        int42 = comp(1681, 6);
        script11825(int0, int25, int14, int15, int39, int40, int41, comp(1681, 4), comp(1681, 34), varclient_5074, varclient_5075);
        IF_SETONSCROLLWHEEL(callback(), int41);
        script12597(int42, int39, int40, int41);
    } else if (((int0 == 1) && (IF_HASSUBOVERLAY(comp(1477, 343), 1588 as overlayinterface) == 1))) {
        int39 = comp(1588, 10);
        int40 = comp(1588, 11);
        int41 = comp(1588, 2);
        int42 = comp(1588, 3);
        if ((varbitplayer_27169 == 1)) {
            script12603();
            IF_SETOP(2, "", comp(1588, 72));
        } else {
            IF_SETOP(2, "Toggle lightweight mode", comp(1588, 72));
        };
        script11825(int0, int25, int14, int15, int39, int40, int41, comp(1588, 1), comp(1588, 31), varclient_5072, varclient_5073);
        IF_SETNOCLICKTHROUGH(1, int39);
        IF_SETNOCLICKTHROUGH(1, int40);
        IF_SETONSCROLLWHEEL(callback(), int41);
        if ((int38 == 0)) {
            script12597(int42, int39, int40, int41);
        };
    };
    if ((varplayer_5884 == 1 as telemetry_interval)) {
        IF_SETHIDE(false, comp(1588, 33));
        IF_SETHIDE(false, comp(1681, 43));
        script11823();
    } else {
        IF_SETHIDE(true, comp(1588, 33));
        IF_SETHIDE(true, comp(1681, 43));
    };
    if ((int0 == 1)) {
        script12646(comp(1477, 688), 0);
    };
    return;
}