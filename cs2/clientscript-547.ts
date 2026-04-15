//[proc,stats_mouseover_create]
function script547(int0: component, int1: int, int2: stat, int3: unknown_int): void {
    var int4 = comp(1477, 908);
    var int5 = 2;
    var string0 = "";
    var string1 = "";
    if ((int3 == 0)) {
        string0 = `${enum_getvalue(17, 36, 680 as cs2enum, int2)}: ${inttostring(script11861(int2), 10)}/${inttostring(script11860(int2), 10)}`;
        string1 = TOSTRING_LOCALISED(STAT_VISIBLE_XP_ACTUAL(int2), 1);
    } else {
        string0 = `${enum_getvalue(17, 36, 680 as cs2enum, int2)}: ${inttostring(script11865(int2), 10)}/${inttostring(script11864(int2), 10)}`;
        string1 = TOSTRING_LOCALISED(script10783(int2), 1);
    };
    var string2 = "";
    var string3 = "";
    var int6 = script12289(int2);
    var int7 = enum_getvalue(17, 0, 10865 as cs2enum, int2);
    var int8 = script3158(int2);
    if ((varbitplayer_19007 == 1)) {
        if (((int3 == 0) && (script11862(int2) < int8))) {
            string2 = TOSTRING_LOCALISED(enum_getvalue(0, 0, int6, (script11862(int2) + 1)), 1);
            string3 = TOSTRING_LOCALISED((enum_getvalue(0, 0, int6, (script11862(int2) + 1)) - STAT_VISIBLE_XP_ACTUAL(int2)), 1);
            int5 = 4;
        };
    } else if (((int3 == 0) && (STAT_BASE_ACTUAL(int2) < int7))) {
        string2 = TOSTRING_LOCALISED(enum_getvalue(0, 0, int6, (STAT_BASE_ACTUAL(int2) + 1)), 1);
        string3 = TOSTRING_LOCALISED((enum_getvalue(0, 0, int6, (STAT_BASE_ACTUAL(int2) + 1)) - STAT_VISIBLE_XP_ACTUAL(int2)), 1);
        int5 = 4;
    };
    var int9 = 0;
    if ((int3 == 0)) {
        int9 = script4036(enum_getvalue(17, 0, 1482 as cs2enum, int2));
        if ((int9 == 1)) {
            int5 = (int5 + 3);
        };
    };
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var string4 = "";
    var int13 = 0;
    var int14 = 0;
    var string5 = "";
    var int15 = 15;
    if ((int3 == 0)) {
        [int12, int10, int11] = script4037(enum_getvalue(17, 0, 1482 as cs2enum, int2));
        string4 = TOSTRING_LOCALISED(int10, 1);
        int13 = int10;
        if ((int12 == 1)) {
            int13 = enum_getvalue(0, 0, int6, int10);
        };
        int14 = MAX(0, (int13 - STAT_VISIBLE_XP_ACTUAL(int2)));
        string5 = TOSTRING_LOCALISED(int14, 1);
    };
    var string6 = "";
    var int16 = 0;
    var int17 = 207 as fontmetrics;
    if ((script6431() == true)) {
        int17 = struct_getparam(enum_getvalue(0, 73, 14118 as cs2enum, varplayer_7989), 7275);
        int15 = (enum_getvalue(25, 0, 8549 as cs2enum, int17) + 3);
    };
    if ((int3 == 0)) {
        switch (int2) {
            case 0: {
                int16 = varplayer_3304;
                break;
            }
            case 2: {
                int16 = varplayer_3305;
                break;
            }
            case 1: {
                int16 = varplayer_3306;
                break;
            }
            case 6: {
                int16 = varplayer_3307;
                break;
            }
            case 4: {
                int16 = varplayer_3308;
                break;
            }
            case 5: {
                int16 = varplayer_2850;
                break;
            }
            case 23: {
                int16 = varplayer_3309;
                break;
            }
            case 14: {
                int16 = varplayer_3310;
                break;
            }
            case 13: {
                int16 = varplayer_3311;
                break;
            }
            case 12: {
                int16 = varplayer_3312;
                break;
            }
            case 8: {
                int16 = varplayer_3313;
                break;
            }
            case 19: {
                int16 = varplayer_3314;
                break;
            }
            case 11: {
                int16 = varplayer_3315;
                break;
            }
            case 10: {
                int16 = varplayer_3316;
                break;
            }
            case 7: {
                int16 = varplayer_3317;
                break;
            }
            case 24: {
                int16 = varplayer_3318;
                break;
            }
            case 18: {
                int16 = varplayer_3319;
                break;
            }
            case 20: {
                int16 = varplayer_3320;
                break;
            }
            case 21: {
                int16 = varplayer_3321;
                break;
            }
            case 17: {
                int16 = varplayer_3322;
                break;
            }
            case 22: {
                int16 = varplayer_3323;
                break;
            }
            case 3: {
                int16 = varplayer_3324;
                break;
            }
            case 16: {
                int16 = varplayer_3325;
                break;
            }
            case 9: {
                int16 = varplayer_3326;
                break;
            }
            case 15: {
                int16 = varplayer_3327;
                break;
            }
            case 25: {
                int16 = varplayer_3836;
                break;
            }
            case 26: {
                int16 = varplayer_6092;
                break;
            }
            case 27: {
                int16 = varplayer_9406;
                break;
            }
            case 28: {
                int16 = varplayer_11202;
                break;
            }
        };
        if ((int16 > 0)) {
            string6 = TOSTRING_LOCALISED((int16 / 10), 1);
            int5 = (int5 + 1);
        };
    };
    var int18 = 0;
    var string7 = "Member's skill.";
    var string8 = "";
    var int19 = -1 as struct;
    if (((int3 == 0) && (script12041(int2) == 0))) {
        int18 = 1;
        string7 = "Elite skill.";
        int5 = (int5 + 1);
        string8 = "Required stats:";
        int5 = (int5 + 1);
        int19 = script12039(int2);
        if ((struct_getparam(int19, 5510) != -1 as stat)) {
            string8 = `${string8}<br> - ${enum_getvalue(17, 36, 680 as cs2enum, struct_getparam(int19, 5510))}: `;
            if ((STAT_BASE_ACTUAL(struct_getparam(int19, 5510)) < struct_getparam(int19, 5511))) {
                string8 = `${string8}<col=ff0000>`;
            };
            string8 = `${string8}${inttostring(struct_getparam(int19, 5511), 10)}`;
            int5 = (int5 + 1);
        };
        if ((struct_getparam(int19, 5512) != -1 as stat)) {
            string8 = `${string8}<br> - ${enum_getvalue(17, 36, 680 as cs2enum, struct_getparam(int19, 5512))}: `;
            if ((STAT_BASE_ACTUAL(struct_getparam(int19, 5512)) < struct_getparam(int19, 5513))) {
                string8 = `${string8}<col=ff0000>`;
            };
            string8 = `${string8}${inttostring(struct_getparam(int19, 5513), 10)}`;
            int5 = (int5 + 1);
        };
        if ((struct_getparam(int19, 5514) != -1 as stat)) {
            string8 = `${string8}<br> - ${enum_getvalue(17, 36, 680 as cs2enum, struct_getparam(int19, 5514))}: `;
            if ((STAT_BASE_ACTUAL(struct_getparam(int19, 5514)) < struct_getparam(int19, 5515))) {
                string8 = `${string8}<col=ff0000>`;
            };
            string8 = `${string8}${inttostring(struct_getparam(int19, 5515), 10)}`;
            int5 = (int5 + 1);
        };
    } else if (((enum_hasoutput(17, 5472 as cs2enum, int2) == 1) && (PLAYERMEMBER() == false))) {
        int18 = 1;
        int5 = (int5 + 1);
        if (((int3 == 0) && (STAT(int2) >= script12038(int2)))) {
            string8 = "Level cap reached!";
            int5 = (int5 + 1);
        };
    };
    var int20 = (PARAWIDTH(string0, 190, int17) + 12);
    var int21 = (8 + (int5 * int15));
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    int22 = PARAWIDTH("Current XP:", 190, int17);
    int23 = PARAWIDTH(string1, 190, int17);
    int24 = ((int22 + 10) + int23);
    int20 = MAX(int20, int24);
    if ((int18 == 1)) {
        int24 = (PARAWIDTH(string7, 190, int17) + 10);
        int24 = MAX(int24, (PARAWIDTH(string8, 190, int17) + 10));
        int20 = MAX(int20, int24);
    };
    if (((int3 == 0) && ((STAT_BASE_ACTUAL(int2) < int7) || ((varbitplayer_19007 == 1) && (script11862(int2) < int8))))) {
        int22 = PARAWIDTH("Next level:", 190, int17);
        int23 = PARAWIDTH(string2, 190, int17);
        int24 = ((int22 + 3) + int23);
        int20 = MAX(int20, int24);
        int22 = PARAWIDTH("Remainder:", 190, int17);
        int23 = PARAWIDTH(string3, 190, int17);
        int24 = ((int22 + 3) + int23);
        int20 = MAX(int20, int24);
    };
    if ((int9 == 1)) {
        if ((int12 == 1)) {
            int22 = PARAWIDTH("Target level:", 190, int17);
            int23 = PARAWIDTH(string4, 190, int17);
        } else {
            int22 = PARAWIDTH("Target XP:", 190, int17);
            int23 = PARAWIDTH(string4, 190, int17);
        };
        int24 = ((int22 + 3) + int23);
        int20 = MAX(int20, int24);
        int22 = PARAWIDTH("Remainder:", 190, int17);
        int23 = PARAWIDTH(string5, 190, int17);
        int24 = ((int22 + 3) + int23);
        int20 = MAX(int20, int24);
    };
    if ((int16 > 0)) {
        int22 = PARAWIDTH("Bonus XP:", 190, int17);
        int23 = PARAWIDTH(string6, 190, int17);
        int24 = ((int22 + 5) + int23);
        int20 = MAX(int20, int24);
    };
    if ((CC_FIND(int0, int1) == 1)) {
        int22 = (CC_GETX() + script8407(int0));
        int23 = ((CC_GETY() + script8408(int0)) + 27);
    };
    if ((((int22 + int20) + 10) > IF_GETWIDTH(comp(1477, 27)))) {
        int22 = (IF_GETWIDTH(comp(1477, 27)) - (int20 + 24));
    };
    if ((((int23 + int21) + 10) > IF_GETHEIGHT(int4))) {
        int23 = (int23 - (int21 + 10));
    };
    int23 = (int23 + script20394(20));
    var int27 = 4;
    var int28 = -1;
    var int29 = -1;
    var int30 = -1;
    var int31 = -1;
    var int32 = -1;
    var int33 = -1;
    var int34 = 6;
    if ((script6431() == true)) {
        int22 = 0;
        int23 = 0;
        int20 = (int20 + 10);
    };
    if ((int9 == 1)) {
        int21 = (int21 + 8);
    };
    CC_DELETEALL(int4);
    CC_CREATE(int4, 3, IF_GETNEXTSUBID(int4));
    CC_SETSIZE((int20 + 10), int21, 0, 0);
    CC_SETPOSITION(int22, int23, 0, 0);
    CC_SETFILL(1);
    CC_SETCOLOUR(0);
    CC_CREATE(int4, 5, IF_GETNEXTSUBID(int4));
    CC_SETSIZE(10, 10, 0, 0);
    CC_SETPOSITION(int22, int23, 0, 0);
    CC_SETGRAPHIC(4650 as graphic);
    CC_SETHFLIP(true);
    CC_CREATE(int4, 5, IF_GETNEXTSUBID(int4));
    CC_SETSIZE(10, 10, 0, 0);
    CC_SETPOSITION((int22 + int20), int23, 0, 0);
    CC_SETGRAPHIC(4650 as graphic);
    CC_CREATE(int4, 5, IF_GETNEXTSUBID(int4));
    CC_SETSIZE(10, 10, 0, 0);
    CC_SETPOSITION(int22, ((int23 + int21) - 10), 0, 0);
    CC_SETGRAPHIC(4650 as graphic);
    CC_SETVFLIP(true);
    CC_SETHFLIP(true);
    CC_CREATE(int4, 5, IF_GETNEXTSUBID(int4));
    CC_SETSIZE(10, 10, 0, 0);
    CC_SETPOSITION((int22 + int20), ((int23 + int21) - 10), 0, 0);
    CC_SETGRAPHIC(4650 as graphic);
    CC_SETVFLIP(true);
    CC_CREATE(int4, 5, IF_GETNEXTSUBID(int4));
    CC_SETSIZE((int20 - 10), 10, 0, 0);
    CC_SETPOSITION((int22 + 10), int23, 0, 0);
    CC_SETGRAPHIC(4649 as graphic);
    CC_SETTILING(true);
    CC_CREATE(int4, 5, IF_GETNEXTSUBID(int4));
    CC_SETSIZE((int20 - 10), 10, 0, 0);
    CC_SETPOSITION((int22 + 10), ((int23 + int21) - 10), 0, 0);
    CC_SETGRAPHIC(4649 as graphic);
    CC_SETTILING(true);
    CC_SETVFLIP(true);
    CC_CREATE(int4, 5, IF_GETNEXTSUBID(int4));
    CC_SETSIZE(10, (int21 - 20), 0, 0);
    CC_SETPOSITION(int22, (int23 + 10), 0, 0);
    CC_SETGRAPHIC(4651 as graphic);
    CC_SETTILING(true);
    CC_SETHFLIP(true);
    CC_CREATE(int4, 5, IF_GETNEXTSUBID(int4));
    CC_SETSIZE(10, (int21 - 20), 0, 0);
    CC_SETPOSITION((int22 + int20), (int23 + 10), 0, 0);
    CC_SETGRAPHIC(4651 as graphic);
    CC_SETTILING(true);
    var int35 = 0;
    if ((int18 == 1)) {
        CC_CREATE(int4, 4, IF_GETNEXTSUBID(int4));
        CC_SETPOSITION((int22 + int34), (int23 + int27), 0, 0);
        int35 = (int15 * PARAHEIGHT(string7, int20, int17));
        CC_SETSIZE(int20, int35, 0, 0);
        CC_SETTEXTFONT(int17);
        CC_SETTEXTALIGN(0, 0, int15);
        CC_SETTEXTSHADOW(false);
        CC_SETTEXT(string7);
        CC_SETCOLOUR(15458492);
        int27 = (int27 + int35);
        if ((STRING_LENGTH(string8) > 0)) {
            CC_CREATE(int4, 4, IF_GETNEXTSUBID(int4));
            CC_SETPOSITION((int22 + int34), (int23 + int27), 0, 0);
            int35 = (int15 * PARAHEIGHT(string8, int20, int17));
            CC_SETSIZE(int20, int35, 0, 0);
            CC_SETTEXTFONT(int17);
            CC_SETTEXTALIGN(0, 0, int15);
            CC_SETTEXTSHADOW(false);
            CC_SETTEXT(string8);
            CC_SETCOLOUR(15458492);
            int27 = (int27 + int35);
        };
    };
    CC_CREATE(int4, 4, IF_GETNEXTSUBID(int4));
    int28 = (IF_GETNEXTSUBID(int4) - 1);
    CC_SETPOSITION((int22 + int34), (int23 + int27), 0, 0);
    CC_SETSIZE(int20, int15, 0, 0);
    CC_SETTEXTFONT(int17);
    CC_SETTEXTALIGN(0, 0, 0);
    CC_SETTEXTSHADOW(false);
    CC_SETTEXT(string0);
    CC_SETCOLOUR(15458492);
    int27 = (int27 + int15);
    CC_CREATE(int4, 4, IF_GETNEXTSUBID(int4));
    CC_SETPOSITION((int22 + int34), (int23 + int27), 0, 0);
    CC_SETSIZE(int20, int15, 0, 0);
    CC_SETTEXTFONT(int17);
    CC_SETTEXTALIGN(0, 0, 0);
    CC_SETTEXTSHADOW(false);
    CC_SETTEXT("Current XP:");
    CC_SETCOLOUR(15458492);
    CC_CREATE(int4, 4, IF_GETNEXTSUBID(int4));
    int29 = (IF_GETNEXTSUBID(int4) - 1);
    CC_SETPOSITION((int22 + int34), (int23 + int27), 0, 0);
    CC_SETSIZE((int20 - 2), int15, 0, 0);
    CC_SETTEXTFONT(int17);
    CC_SETTEXTALIGN(2, 0, 0);
    CC_SETTEXTSHADOW(false);
    CC_SETCOLOUR(15458492);
    CC_SETTEXT(string1);
    int27 = (int27 + int15);
    var int36 = 0;
    var int37 = 0;
    if (((int3 == 0) && ((STAT_BASE_ACTUAL(int2) < int7) || ((varbitplayer_19007 == 1) && (script11862(int2) < int8))))) {
        CC_CREATE(int4, 4, IF_GETNEXTSUBID(int4));
        CC_SETPOSITION((int22 + int34), (int23 + int27), 0, 0);
        CC_SETSIZE(int20, int15, 0, 0);
        CC_SETTEXTFONT(int17);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETTEXTSHADOW(false);
        CC_SETTEXT("Next level:");
        CC_SETCOLOUR(15458492);
        CC_CREATE(int4, 4, IF_GETNEXTSUBID(int4));
        CC_SETPOSITION((int22 + int34), (int23 + int27), 0, 0);
        CC_SETSIZE((int20 - 2), int15, 0, 0);
        CC_SETTEXTFONT(int17);
        CC_SETTEXTALIGN(2, 0, 0);
        CC_SETTEXTSHADOW(false);
        CC_SETTEXT(string2);
        CC_SETCOLOUR(15458492);
        int27 = (int27 + int15);
        CC_CREATE(int4, 4, IF_GETNEXTSUBID(int4));
        CC_SETPOSITION((int22 + int34), (int23 + int27), 0, 0);
        CC_SETSIZE(int20, 16, 0, 0);
        CC_SETTEXTFONT(int17);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETTEXTSHADOW(false);
        CC_SETTEXT("Remainder:");
        CC_SETCOLOUR(15458492);
        CC_CREATE(int4, 4, IF_GETNEXTSUBID(int4));
        int30 = (IF_GETNEXTSUBID(int4) - 1);
        CC_SETPOSITION((int22 + int34), (int23 + int27), 0, 0);
        CC_SETSIZE((int20 - 2), int15, 0, 0);
        CC_SETTEXTFONT(int17);
        CC_SETTEXTALIGN(2, 0, 0);
        CC_SETTEXTSHADOW(false);
        CC_SETTEXT(string3);
        CC_SETCOLOUR(15458492);
        int27 = (int27 + int15);
    };
    if ((int16 > 0)) {
        CC_CREATE(int4, 4, IF_GETNEXTSUBID(int4));
        CC_SETPOSITION((int22 + int34), (int23 + int27), 0, 0);
        CC_SETSIZE(int20, int15, 0, 0);
        CC_SETTEXTFONT(int17);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETTEXTSHADOW(false);
        CC_SETTEXT("Bonus XP:");
        CC_SETCOLOUR(15458492);
        CC_CREATE(int4, 4, IF_GETNEXTSUBID(int4));
        int33 = (IF_GETNEXTSUBID(int4) - 1);
        CC_SETPOSITION((int22 + int34), (int23 + int27), 0, 0);
        CC_SETSIZE((int20 - 2), int15, 0, 0);
        CC_SETTEXTFONT(int17);
        CC_SETTEXTALIGN(2, 0, 0);
        CC_SETTEXTSHADOW(false);
        CC_SETTEXT(string6);
        CC_SETCOLOUR(65280);
        int27 = (int27 + int15);
    };
    var int38 = 0;
    if ((int9 == 1)) {
        CC_CREATE(int4, 4, IF_GETNEXTSUBID(int4));
        CC_SETPOSITION((int22 + int34), (int23 + int27), 0, 0);
        CC_SETSIZE(int20, int15, 0, 0);
        CC_SETTEXTFONT(int17);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETTEXTSHADOW(false);
        CC_SETCOLOUR(15458492);
        if ((int12 == 1)) {
            CC_SETTEXT("Target level:");
        } else {
            CC_SETTEXT("Target XP:");
        };
        CC_CREATE(int4, 4, IF_GETNEXTSUBID(int4));
        CC_SETPOSITION((int22 + int34), (int23 + int27), 0, 0);
        CC_SETSIZE((int20 - 2), int15, 0, 0);
        CC_SETTEXTFONT(int17);
        CC_SETTEXTALIGN(2, 0, 0);
        CC_SETTEXTSHADOW(false);
        CC_SETCOLOUR(15458492);
        if ((int12 == 1)) {
            CC_SETTEXT(string4);
        } else {
            CC_SETTEXT(string4);
        };
        int27 = (int27 + int15);
        CC_CREATE(int4, 4, IF_GETNEXTSUBID(int4));
        CC_SETPOSITION((int22 + int34), (int23 + int27), 0, 0);
        CC_SETSIZE(int20, int15, 0, 0);
        CC_SETTEXTFONT(int17);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETTEXTSHADOW(false);
        CC_SETTEXT("Remainder:");
        CC_SETCOLOUR(15458492);
        CC_CREATE(int4, 4, IF_GETNEXTSUBID(int4));
        CC_SETPOSITION((int22 + int34), (int23 + int27), 0, 0);
        CC_SETSIZE((int20 - 2), int15, 0, 0);
        CC_SETTEXTFONT(int17);
        CC_SETTEXTALIGN(2, 0, 0);
        CC_SETTEXTSHADOW(false);
        CC_SETCOLOUR(15458492);
        CC_SETTEXT(string5);
        int31 = CC_GETID();
        int27 = (int27 + int15);
        CC_CREATE(int4, 3, IF_GETNEXTSUBID(int4));
        CC_SETPOSITION((int22 + 8), ((int23 + int27) + 2), 0, 0);
        CC_SETSIZE((int20 - 6), int15, 0, 0);
        CC_SETFILL(1);
        CC_SETCOLOUR(16711680);
        CC_CREATE(int4, 3, IF_GETNEXTSUBID(int4));
        int38 = CC_GETID();
        CC_SETPOSITION((int22 + 8), ((int23 + int27) + 2), 0, 0);
        CC_SETFILL(1);
        CC_SETCOLOUR(65280);
        if ((int12 == 1)) {
            int36 = enum_getvalue(0, 0, int6, int11);
            int37 = enum_getvalue(0, 0, int6, int10);
            if (((int37 - int36) != 0)) {
                int25 = SCALE((STAT_VISIBLE_XP_ACTUAL(int2) - int36), (int37 - int36), 100);
            } else {
                int25 = -1;
            };
        } else if (((int10 - int11) != 0)) {
            int25 = SCALE((STAT_VISIBLE_XP_ACTUAL(int2) - int11), (int10 - int11), 100);
        } else {
            int25 = -1;
        };
        if ((int25 > 100)) {
            int25 = 100;
        };
        int25 = MAX(int25, 0);
        int26 = (int25 * (int20 - 6));
        int26 = (int26 / 100);
        CC_SETSIZE(int26, int15, 0, 0);
        CC_CREATE(int4, 3, IF_GETNEXTSUBID(int4));
        CC_SETPOSITION((int22 + 8), ((int23 + int27) + 2), 0, 0);
        CC_SETSIZE((int20 - 6), int15, 0, 0);
        CC_CREATE(int4, 4, IF_GETNEXTSUBID(int4));
        CC_SETSIZE(STRINGWIDTH(`${inttostring(int25, 10)}%`, int17), int15, 0, 0);
        CC_SETPOSITION((((int22 + (int20 / 2)) - (CC_GETWIDTH() / 2)) + 5), ((int23 + int27) + 2), 0, 0);
        CC_SETTEXTFONT(int17);
        CC_SETTEXTALIGN(1, 0, 0);
        CC_SETTEXTSHADOW(true);
        CC_SETCOLOUR(16777215);
        if ((int25 > 47)) {
            CC_SETCOLOUR(0);
        };
        CC_SETTEXT(`${inttostring(int25, 10)}%`);
        int32 = CC_GETID();
    };
    if (((CC_FIND(int4, 0) == 1) && (int3 == 0))) {
        CC_SETONSTATTRANSMIT(callback(script548, int28, int29, int30, int33, int31, int32, int38, int20, int2, int0, int4, int1, int2, 1));
    };
    return;
}