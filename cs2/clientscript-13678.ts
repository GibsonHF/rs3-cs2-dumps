//
function script13678(int0: component, int1: component, int2: int, int3: int, int4: int, int5: int, int6: int): void {
    var int7 = 10;
    var int8 = (20 + ((55 + 5) * int2));
    if (((int2 >= int6) && (int6 != 0))) {
        int8 = (int8 + 16);
    };
    if ((CC_FIND(int0, int4) == 1)) {
        CC_SETSIZE((2 * int7), 55, 1, 0);
        CC_SETPOSITION(int7, int8, 0, 0);
        cc_setparam(6814, int8);
        cc_setparam(6813, int3);
        CC_SETOP(1, "Select");
    } else {
        return;
    };
    if ((int2 == 0)) {
        CC_CREATE(int1, 3, 0);
        CC_SETSIZE((2 * int7), 55, 1, 0);
        CC_SETPOSITION(int7, int8, 0, 0);
        CC_SETCOLOUR(16777215);
        CC_SETHIDE(true);
        CC_SETFILL(0);
    };
    var int9 = enum_getvalue(0, 74, 13176 as cs2enum, varbitplayer_37615);
    var int10 = enum_getvalue(0, 74, 13175 as cs2enum, varbitplayer_37614);
    var int11 = enum_getvalue(0, 74, 13175 as cs2enum, int3);
    var int12 = -1 as dbrow;
    if ((int11 != -1 as dbrow)) {
        stack(20480);
        stack(dbrow_getfield(int11, 90176, 0));
        DB_FIND(0);
        dbrow_findnext();
        int12 = stack();
    };
    var int13 = dbrow_getfield(int10, 90448, 0);
    var int14 = IF_GETNEXTSUBID(int1);
    var int15 = 0;
    var int16 = 5;
    var int17 = 5;
    var int18 = 15;
    var int19 = 15;
    var int20 = -1 as dbrow;
    var int21 = 0;
    var int22 = -1;
    var int23 = 22;
    var int24 = -1;
    var string0 = "null";
    var int25 = -1;
    var int26 = -1 as obj;
    var int27 = -1;
    var int28 = 0;
    var int29 = 0;
    var int30 = (55 - 10);
    var int31 = 0;
    CC_CREATE(int1, 3, int14++);
    CC_SETSIZE((2 * int7), 55, 1, 0);
    CC_SETPOSITION(int7, int8, 0, 0);
    cc_setparam(6813, dbrow_getfield(int9, 94288, int2));
    CC_SETFILL(1);
    if ((MODULO(int2, 2) == 0)) {
        script13650(28679 as struct);
    } else {
        script13650(28680 as struct);
    };
    CC_SETMOUSEOVERCURSOR(46);
    CC_CREATE(int1, 5, int14++);
    CC_SETGRAPHIC(dbrow_getfield(int12, 20560, 0));
    CC_SETSIZE(int30, int30, 0, 0);
    CC_SETPOSITION(int19, (int8 + ((55 - int30) / 2)), 0, 0);
    int19 = (int19 + (int30 + int17));
    if ((int2 < int6)) {
        CC_CREATE(int1, 5, int14++);
        CC_SETPOSITION(((int19 - int17) - 12), ((int8 + 55) - int23), 0, 0);
        CC_SETSIZE(12, 12, 0, 0);
        if ((dbrow_getfield(int11, 90208, 0) < dbrow_getfield(int10, 90208, 0))) {
            CC_SETGRAPHIC(21770 as graphic);
            CC_SETCOLOUR(16711680);
        } else {
            CC_SETGRAPHIC(21722 as graphic);
            CC_SETCOLOUR(65280);
        };
    };
    CC_CREATE(int1, 9, int14++);
    CC_SETSIZE(0, (55 - 1), 0, 0);
    CC_SETPOSITION(int19, int8, 0, 0);
    CC_SETCOLOUR(0);
    int19 = (int19 + int17);
    CC_CREATE(int1, 4, int14++);
    CC_SETSIZE((4 * int7), (55 / 2), 1, 0);
    CC_SETPOSITION(int19, int8, 0, 0);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXT(dbrow_getfield(int11, 90128, 0));
    CC_SETTEXTSHADOW(true);
    CC_CREATE(int1, 5, int14++);
    CC_SETPOSITION(int19, ((int8 + (55 / 2)) + (((55 / 2) - int23) / 2)), 0, 0);
    CC_SETSIZE(int23, int23, 0, 0);
    CC_SETGRAPHIC(26537 as graphic);
    string0 = `<col=f5b241>Current Invention level:</col> ${inttostring(STAT(26 as stat), 10)}`;
    CC_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643));
    int19 = (int19 + (int23 + int17));
    int24 = dbrow_getfield(int11, 90160, 0);
    CC_CREATE(int1, 4, int14++);
    CC_SETSIZE(PARAWIDTH("999", IF_GETWIDTH(int1), 26), (55 / 2), 0, 0);
    CC_SETPOSITION(int19, (int8 + (55 / 2)), 0, 0);
    CC_SETTEXT(inttostring(int24, 10));
    if ((STAT(26) >= int24)) {
        CC_SETCOLOUR(65280);
    } else {
        CC_SETCOLOUR(16711680);
    };
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTSHADOW(true);
    CC_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643));
    int19 = (int19 + (PARAWIDTH("999", IF_GETWIDTH(int1), 26) + int17));
    CC_CREATE(int1, 5, int14++);
    CC_SETPOSITION(int19, ((int8 + (55 / 2)) + (((55 / 2) - int23) / 2)), 0, 0);
    CC_SETSIZE(int23, int23, 0, 0);
    CC_SETGRAPHIC(30989);
    if ((varbitplayer_37615 == 1)) {
        CC_SETONMOUSEREPEAT(callback(script13684, -2147483645, -2147483643, 1, dbrow_getfield(int11, 90448, 0), int13));
    } else {
        CC_SETONMOUSEREPEAT(callback(script13684, -2147483645, -2147483643, 0, 0, int13));
    };
    int19 = (int19 + (int23 + int17));
    int28 = dbrow_getfield(int11, 90448, 0);
    CC_CREATE(int1, 4, int14++);
    CC_SETSIZE(PARAWIDTH("9999", IF_GETWIDTH(int1), 26 as fontmetrics), (55 / 2), 0, 0);
    CC_SETPOSITION(int19, (int8 + (55 / 2)), 0, 0);
    CC_SETTEXT(inttostring(int28, 10));
    CC_SETTEXTSHADOW(true);
    if (((((varbitplayer_37612 - varbitplayer_37613) + int13) >= int28) || (varbitplayer_37615 == 1))) {
        CC_SETCOLOUR(65280);
    } else {
        CC_SETCOLOUR(16711680);
    };
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    if ((varbitplayer_37615 == 1)) {
        CC_SETONMOUSEREPEAT(callback(script13684, -2147483645, -2147483643, 1, dbrow_getfield(int11, 90448, 0), int13));
    } else {
        CC_SETONMOUSEREPEAT(callback(script13684, -2147483645, -2147483643, 0, 0, int13));
    };
    if (((DB_GETFIELDCOUNT(int11, 90240) + DB_GETFIELDCOUNT(int11, 90224)) > 4)) {
        return;
    };
    int29 = DB_GETFIELDCOUNT(int11, 90240);
    int15 = DB_GETFIELDCOUNT(int11, 90224);
    while ((int29 > 0)) {
        if ((int31 == 2)) {
            int18 = 15;
        };
        [int26, int27] = dbrow_getfield(int11, 90240, (int29 - 1));
        CC_CREATE(int1, 4, int14++);
        CC_SETSIZE(PARAWIDTH("999", IF_GETWIDTH(int1), 26 as fontmetrics), (55 / 2), 0, 0);
        if ((int31 >= 2)) {
            CC_SETPOSITION(int18, (int8 + (55 / 2)), 2, 0);
        } else {
            CC_SETPOSITION(int18, int8, 2, 0);
        };
        if ((script2515(93 as inv, int26) >= int27)) {
            CC_SETCOLOUR(65280);
        } else {
            CC_SETCOLOUR(16711680);
        };
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXT(inttostring(int27, 10));
        CC_SETTEXTSHADOW(true);
        CC_SETONMOUSEREPEAT(callback(script8801, script13683(int26, 1), int1, int14, 1, 0, enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics)));
        int18 = (int18 + (PARAWIDTH("999", IF_GETWIDTH(int1), 26) + int17));
        CC_CREATE(int1, 5, int14++);
        CC_SETSIZE(int23, int23, 0, 0);
        if ((int31 >= 2)) {
            CC_SETPOSITION(int18, ((int8 + (55 / 2)) + (((55 / 2) - int23) / 2)), 2, 0);
        } else {
            CC_SETPOSITION(int18, (int8 + (((55 / 2) - int23) / 2)), 2, 0);
        };
        CC_SETOBJECT(int26, -1);
        CC_SETONMOUSEREPEAT(callback(script8801, script13683(int26, 1), int1, int14, 1, 0, enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics)));
        int18 = (int18 + (int23 + int17));
        int29 = (int29 - 1);
        int31 = (int31 + 1);
    };
    while ((int15 > 0)) {
        if ((int31 == 2)) {
            int18 = 15;
        };
        [int20, int21] = dbrow_getfield(int11, 90224, (int15 - 1));
        int25 = dbrow_getfield(int20, 16384, 0);
        CC_CREATE(int1, 4, int14++);
        CC_SETSIZE(PARAWIDTH("999", IF_GETWIDTH(int1), 26 as fontmetrics), (55 / 2), 0, 0);
        if ((int31 >= 2)) {
            CC_SETPOSITION(int18, (int8 + (55 / 2)), 2, 0);
        } else {
            CC_SETPOSITION(int18, int8, 2, 0);
        };
        CC_SETTEXT(inttostring(int21, 10));
        if ((script12054(dbrow_getfield(int20, 16384, 0)) >= int21)) {
            CC_SETCOLOUR(65280);
        } else {
            CC_SETCOLOUR(16711680);
        };
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        CC_SETONMOUSEREPEAT(callback(script8801, script13682(int25, 1, dbrow_getfield(int20, 16400, 0)), int1, int14, 1, 0, enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics)));
        int18 = (int18 + (PARAWIDTH("999", IF_GETWIDTH(int1), 26) + int17));
        int22 = dbrow_getfield(int20, 16448, 0);
        CC_CREATE(int1, 5, int14++);
        CC_SETGRAPHIC(int22);
        CC_SETSIZE(int23, int23, 0, 0);
        if ((int31 >= 2)) {
            CC_SETPOSITION(int18, ((int8 + (55 / 2)) + (((55 / 2) - int23) / 2)), 2, 0);
        } else {
            CC_SETPOSITION(int18, (int8 + (((55 / 2) - int23) / 2)), 2, 0);
        };
        CC_SETONMOUSEREPEAT(callback(script8801, script13682(int25, 1, dbrow_getfield(int20, 16400, 0)), int1, int14, 1, 0, enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics)));
        int18 = (int18 + (int23 + int17));
        int15 = (int15 - 1);
        int31 = (int31 + 1);
    };
    CC_CREATE(int1, 9, int14++);
    CC_SETSIZE(0, (55 - 1), 0, 0);
    CC_SETPOSITION((((int7 + (5 * int17)) + (2 * int23)) + (2 * PARAWIDTH("999", IF_GETWIDTH(int1), 26 as fontmetrics))), int8, 2, 0);
    CC_SETCOLOUR(0);
    if (((int2 + 1) == int6)) {
        IF_SETTEXT("Upgrades & downgrades available for this machine:", comp(1901, 3));
        if ((int6 != int5)) {
            CC_CREATE(int1, 4, int14++);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETSIZE((2 * int7), 11, 1, 0);
            script11024(3);
            CC_SETPOSITION((int7 / 2), ((int8 + 55) + 5), 0, 0);
            CC_SETTEXT("Alternative machines available for this hotspot:");
        };
    };
    return;
}