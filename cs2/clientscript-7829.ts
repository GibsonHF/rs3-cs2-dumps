//
function script7829(int0: graphic, int1: int, int2: unknown_int, int3: int, int4: int, int5: int, int6: int, string0: unknown_string, string1: unknown_string, string2: string): void {
    var int7 = comp(1419, 5);
    var int8 = 0;
    var int9 = 24;
    if ((int0 == 29067 as graphic)) {
        int9 = 22;
    };
    if ((int2 == 0)) {
        switch (MODULO(varclient_2819, 2)) {
            case 0: {
                int7 = comp(1419, 41);
                break;
            }
            case 1: {
                int7 = comp(1419, 42);
                break;
            }
        };
        if ((MODULO((varclient_2820 / 47), 2) == 0)) {
            script2996(int7, IF_GETNEXTSUBID(int7), 0, varclient_2820, 0, 0, 0, 47, 1, 0, 4128 as dbrow);
        } else {
            script2996(int7, IF_GETNEXTSUBID(int7), 0, varclient_2820, 0, 0, 0, 47, 1, 0, 4127 as dbrow);
        };
        CC_CREATE(int7, 5, IF_GETNEXTSUBID(int7));
        CC_SETGRAPHIC(int0);
        CC_SETSIZE(int9, int9, 0, 0);
        CC_SETPOSITION(8, (varclient_2820 + 10), 0, 0);
        CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, (IF_GETNEXTSUBID(int7) - 1)));
        CC_SETONMOUSELEAVE(callback(script8805));
        CC_CREATE(int7, 4, IF_GETNEXTSUBID(int7));
        CC_SETTEXT(string0);
        CC_SETTEXTFONT(28);
        CC_SETCOLOUR(script10495(0));
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETSIZE(190, 20, 0, 0);
        CC_SETPOSITION(45, (varclient_2820 + 4), 0, 0);
        CC_CREATE(int7, 4, IF_GETNEXTSUBID(int7));
        CC_SETTEXT("Rank:");
        CC_SETTEXTFONT(26);
        CC_SETCOLOUR(script10495(3));
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETSIZE(45, 20, 0, 0);
        CC_SETPOSITION(45, (varclient_2820 + 26), 0, 0);
        CC_CREATE(int7, 4, IF_GETNEXTSUBID(int7));
        if ((int1 > 0)) {
            CC_SETTEXT(inttostring(int1, 10));
        } else {
            CC_SETTEXT(string2);
        };
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(script10495(21));
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETSIZE(50, 20, 0, 0);
        CC_SETPOSITION(80, (varclient_2820 + 26), 0, 0);
        CC_CREATE(int7, 4, IF_GETNEXTSUBID(int7));
        CC_SETTEXT("Ends in:");
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(script10495(3));
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETSIZE(50, 20, 0, 0);
        CC_SETPOSITION(150, (varclient_2820 + 26), 0, 0);
        CC_CREATE(int7, 4, IF_GETNEXTSUBID(int7));
        if ((int3 > 0)) {
            if ((int3 > 1)) {
                CC_SETTEXT(`${inttostring(int3, 10)} days`);
            } else {
                CC_SETTEXT(`${inttostring(int3, 10)} day`);
            };
        } else if ((int4 > 0)) {
            if ((int4 > 1)) {
                CC_SETTEXT(`${inttostring(int4, 10)} hours`);
            } else {
                CC_SETTEXT(`${inttostring(int4, 10)} hour`);
            };
        } else if ((int5 > 1)) {
            CC_SETTEXT(`${inttostring(int5, 10)} minutes`);
        } else {
            CC_SETTEXT(`${inttostring(int5, 10)} minute`);
        };
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(script10495(21));
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETSIZE(115, 20, 0, 0);
        CC_SETPOSITION(200, (varclient_2820 + 26), 0, 0);
        if ((varclient_2819 == 1)) {
            varclient_2819 = 0;
            varclient_2820 = (varclient_2820 + 48);
        } else {
            varclient_2819 = (varclient_2819 + 1);
        };
    } else if ((int2 == 1)) {
        switch (MODULO(varclient_2819, 3)) {
            case 0: {
                int7 = comp(1419, 49);
                break;
            }
            case 1: {
                int7 = comp(1419, 50);
                break;
            }
            case 2: {
                int7 = comp(1419, 51);
                break;
            }
        };
        if ((MODULO((varclient_2820 / 26), 2) == 0)) {
            script2996(int7, IF_GETNEXTSUBID(int7), 0, varclient_2820, 0, 0, 0, 26, 1, 0, 4128 as dbrow);
        } else {
            script2996(int7, IF_GETNEXTSUBID(int7), 0, varclient_2820, 0, 0, 0, 26, 1, 0, 4127 as dbrow);
        };
        int8 = IF_GETNEXTSUBID(int7);
        CC_CREATE(int7, 5, int8);
        CC_SETGRAPHIC(int0);
        CC_SETSIZE(int9, int9, 0, 0);
        CC_SETPOSITION(8, (varclient_2820 + 1), 0, 0);
        CC_SETONMOUSEREPEAT(callback(script8799, string0, int7, int8));
        CC_SETONMOUSELEAVE(callback(script8805));
        CC_CREATE(int7, 4, IF_GETNEXTSUBID(int7));
        if ((int1 > 0)) {
            CC_SETTEXT(TOSTRING_LOCALISED(int1, 1));
        } else {
            CC_SETTEXT(string2);
        };
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(script10495(21));
        CC_SETTEXTALIGN(2, 1, 0);
        CC_SETSIZE(150, 26, 0, 0);
        CC_SETPOSITION(5, varclient_2820, 2, 0);
        if ((varclient_2819 == 2)) {
            varclient_2819 = 0;
            varclient_2820 = (varclient_2820 + 27);
        } else {
            varclient_2819 = (varclient_2819 + 1);
        };
    } else if ((int2 == 2)) {
        switch (MODULO(varclient_2819, 2)) {
            case 0: {
                int7 = comp(1419, 1);
                break;
            }
            case 1: {
                int7 = comp(1419, 2);
                break;
            }
        };
        if ((MODULO((varclient_2820 / 26), 2) == 0)) {
            script2996(int7, IF_GETNEXTSUBID(int7), 0, varclient_2820, 0, 0, 0, 26, 1, 0, 4128 as dbrow);
        } else {
            script2996(int7, IF_GETNEXTSUBID(int7), 0, varclient_2820, 0, 0, 0, 26, 1, 0, 4127 as dbrow);
        };
        int8 = IF_GETNEXTSUBID(int7);
        CC_CREATE(int7, 5, int8);
        CC_SETGRAPHIC(int0);
        CC_SETSIZE(int9, int9, 0, 0);
        CC_SETPOSITION(8, (varclient_2820 + 1), 0, 0);
        CC_SETONMOUSEREPEAT(callback(script8799, string0, int7, int8));
        CC_SETONMOUSELEAVE(callback(script8805));
        CC_CREATE(int7, 4, IF_GETNEXTSUBID(int7));
        if ((int1 >= 0)) {
            CC_SETTEXT(TOSTRING_LOCALISED(int1, 1));
        } else {
            CC_SETTEXT(string2);
        };
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(script10495(21));
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETSIZE(100, 26, 0, 0);
        CC_SETPOSITION(72, varclient_2820, 0, 0);
        CC_CREATE(int7, 4, IF_GETNEXTSUBID(int7));
        if ((int1 >= 0)) {
            CC_SETTEXT(TOSTRING_LOCALISED(int6, 1));
        } else {
            CC_SETTEXT(string2);
        };
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(script10495(21));
        CC_SETTEXTALIGN(2, 1, 0);
        CC_SETSIZE(132, 26, 0, 0);
        CC_SETPOSITION(5, varclient_2820, 2, 0);
        if ((varclient_2819 == 1)) {
            varclient_2819 = 0;
            varclient_2820 = (varclient_2820 + 27);
        } else {
            varclient_2819 = (varclient_2819 + 1);
        };
    };
    return;
}