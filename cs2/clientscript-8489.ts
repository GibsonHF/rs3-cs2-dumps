//
function script8489(int0: unknown_int, int1: unknown_int, int2: component, int3: component, int4: component, int5: unknown_int, int6: component, int7: component, int8: component, int9: component, int10: component): void {
    var int1 = 96797580;
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    CC_DELETEALL(int6);
    CC_DELETEALL(int7);
    CC_DELETEALL(int8);
    CC_DELETEALL(int9);
    CC_DELETEALL(int10);
    var int11 = 0;
    if ((int0 == 102039552)) {
        int11 = 1;
    };
    var int12 = IF_GETHEIGHT(int10);
    IF_SETSIZE(0, int12, 1, 1, int2);
    var int13 = ENUM_GETOUTPUTCOUNT(7674 as cs2enum);
    var int14 = 60;
    var int15 = 27;
    var int16 = 0;
    var int17 = 0;
    if ((script6431() == true)) {
        if ((int2 == comp(1557, 1))) {
            int16 = 5;
            int15 = (int15 + 5);
        } else {
            int17 = 5;
            int16 = 5;
            int15 = (int15 + 5);
            int14 = (int14 + 5);
        };
    };
    var int18 = IF_GETWIDTH(int2);
    var int19 = IF_GETHEIGHT(int2);
    var int20 = 2;
    var int21 = 2;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    [int24, int22, int23] = script9856(int18, int14, int20, int21);
    var int25 = (int13 / int24);
    if ((MODULO(int13, int24) > 0)) {
        int25 = (int25 + 1);
    };
    var int26 = ((int15 * int25) - int16);
    var int27 = 0;
    if ((int26 > int19)) {
        int27 = 1;
        IF_SETSIZE(16, int12, 1, 1, int2);
        int18 = IF_GETWIDTH(int2);
    };
    if ((int27 == 1)) {
        int20 = 0;
        int21 = 0;
        [int24, int22, int23] = script9856(int18, int14, int20, int21);
        int25 = (int13 / int24);
        if ((MODULO(int13, int24) > 0)) {
            int25 = (int25 + 1);
        };
        int26 = ((int15 * int25) - int16);
    } else {
        CC_DELETEALL(int3);
    };
    define_array(int24);
    var int28 = 0;
    while ((int28 < int24)) {
        pop_array(int28, script9857(int22, int20, int23, int28));
        int28 = (int28 + 1);
    };
    int28 = 0;
    var int29 = 0;
    if ((int27 == 1)) {
        IF_SETSCROLLSIZE(0, int26, int2);
        script31(int3, int2, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    } else {
        IF_SETSCROLLSIZE(0, 0, int2);
    };
    var int30 = -1 as struct;
    var int31 = 0;
    var int32 = 0;
    var int33 = 0;
    var int34 = 0;
    var int35 = 0;
    var int36 = -1 as stat;
    var int37 = -1 as graphic;
    var int38 = -1;
    var int39 = 16747520;
    var int40 = -1;
    var int41 = 0;
    var int42 = 0;
    var int43 = 0;
    var int44 = 0;
    var int45 = 0;
    var int46 = 0;
    while ((int31 < int13)) {
        int33 = MODULO(int31, int24);
        int32 = (int31 / int24);
        int34 = push_array(int33);
        int35 = ((int32 * int15) + int17);
        int30 = enum_getvalue(0, 73, 7674 as cs2enum, int31);
        int36 = struct_getparam(int30, 3440);
        int40 = script3158(int36);
        if ((int11 == 1)) {
            int44 = script10783(int36);
            int46 = script10782(int36);
            int41 = script10781(int36);
            int42 = int46;
        } else {
            int44 = STAT_VISIBLE_XP_ACTUAL(int36);
            int46 = STAT_BASE_ACTUAL(int36);
            int41 = STAT(int36);
            int42 = STAT_BASE(int36);
        };
        int45 = script11849(int36, int44, -1);
        CC_CREATE(int4, 5, int31);
        CC_SETSIZE(60, 27, 0, 0);
        CC_SETPOSITION(int34, int35, 0, 0);
        if ((enum_hasoutput(17, 10327 as cs2enum, int36) == 1)) {
            if (((int11 == 1) || (script12041(int36) == 1))) {
                int37 = 26548 as graphic;
                int38 = 26549;
                int39 = script10495(0);
            } else {
                int37 = 26554 as graphic;
                int38 = 26554;
                int39 = 7305340;
            };
        } else {
            int37 = 9178 as graphic;
            int38 = 9179;
            int39 = script10495(0);
        };
        if ((varbitplayer_19009 == 1)) {
            if ((int45 >= int40)) {
                if ((enum_hasoutput(17, 10327 as cs2enum, int36) == 1)) {
                    int37 = 26552 as graphic;
                    int38 = 26553;
                } else {
                    int37 = 14835 as graphic;
                    int38 = 14836;
                };
            } else if ((((int11 == 1) && (script10782(int36) >= 99)) || ((int11 == 0) && (STAT_BASE_ACTUAL(int36) >= 99)))) {
                if ((enum_hasoutput(17, 10327 as cs2enum, int36) == 1)) {
                    int37 = 26550 as graphic;
                    int38 = 26551;
                } else {
                    int37 = 14833 as graphic;
                    int38 = 14834;
                };
            };
        };
        if ((varbitplayer_44074 == 0)) {
            if ((int11 == 1)) {
                CC_SETCOLOUR(0);
            };
            if ((int41 < int42)) {
                CC_SETCOLOUR(16711680);
            } else if ((int41 > int42)) {
                CC_SETCOLOUR(65280);
            } else {
                CC_SETCOLOUR(0);
            };
        };
        CC_SETGRAPHIC(int37);
        CC_SETONMOUSEOVER(callback(script688, -2147483645, int31, int38));
        CC_SETONMOUSELEAVE(callback(script688, -2147483645, int31, int37));
        CC_CREATE(int5, 5, int31);
        CC_SETSIZE(25, 25, 0, 0);
        CC_SETPOSITION(int34, int35, 0, 0);
        if (((int11 == 1) || (script12041(int36) == 1))) {
            CC_SETGRAPHIC(struct_getparam(int30, 3442));
        } else {
            CC_SETGRAPHIC(struct_getparam(int30, 5493));
        };
        if ((int11 == 0)) {
            CC_SETONVARTRANSMIT(callback(script968, int5, int31, 1227, 1));
        };
        CC_CREATE(int6, 4, int31);
        CC_SETSIZE(18, 11, 0, 0);
        CC_SETPOSITION((int34 + 24), (int35 + 2), 0, 0);
        CC_SETTEXTFONT(66 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETCOLOUR(int39);
        if ((int11 == 1)) {
            CC_SETTEXT(inttostring(script11865(int36), 10));
        } else {
            CC_SETTEXT(inttostring(script11861(int36), 10));
            CC_SETONSTATTRANSMIT(callback(script525, -2147483645, CC_GETID(), int36, int36, 1));
        };
        CC_CREATE(int7, 4, int31);
        CC_SETSIZE(18, 11, 0, 0);
        CC_SETPOSITION((int34 + 39), (int35 + 14), 0, 0);
        CC_SETTEXTFONT(66 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETCOLOUR(int39);
        if ((int11 == 1)) {
            CC_SETTEXT(inttostring(script11864(int36), 10));
        } else {
            CC_SETTEXT(inttostring(script11860(int36), 10));
            CC_SETONSTATTRANSMIT(callback(script532, -2147483645, CC_GETID(), int36, int36, 1));
        };
        CC_CREATE(int8, 5, int31);
        CC_SETSIZE(14, 13, 0, 0);
        CC_SETPOSITION((int34 + 43), (int35 + 1), 0, 0);
        if ((int44 >= 200000000)) {
            if ((varbitplayer_19011 == 0)) {
                CC_SETGRAPHIC(enum_getvalue(0, 23, 10398 as cs2enum, varbitplayer_19010));
            } else {
                CC_SETGRAPHIC(enum_getvalue(0, 23, 10399 as cs2enum, varbitplayer_19011));
            };
        } else if ((int45 >= int40)) {
            CC_SETGRAPHIC(enum_getvalue(0, 23, 10398 as cs2enum, varbitplayer_19010));
        };
        CC_CREATE(int9, 4, int31);
        CC_SETSIZE(60, 27, 0, 0);
        CC_SETPOSITION(int34, int35, 0, 0);
        if ((int11 == 0)) {
            CC_SETOP(1, "View Skillguide");
            CC_SETOP(2, "Set Level Target");
            CC_SETOP(3, "Set XP Target");
            CC_SETOP(4, "Clear Target");
            CC_SETONOP(callback(script5682, struct_getparam(int30, 3441)));
            cc_setparam(7540, 3);
            cc_setparam(7545, int36);
        };
        CC_SETONMOUSEREPEAT(callback(script545, int9, int31, int36, int1, int11));
        CC_SETONMOUSELEAVE(callback(script546, int1));
        int31 = (int31 + 1);
    };
    return;
}