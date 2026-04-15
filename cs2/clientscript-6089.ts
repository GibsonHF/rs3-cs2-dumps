//
function script6089(int0: inv, int1: int, int2: int, int3: int): void {
    var int4 = comp(1265, 20);
    var int5 = comp(1265, 23);
    var int6 = comp(1265, 24);
    var int7 = comp(1265, 22);
    var int8 = comp(1265, 21);
    var int9 = comp(1265, 25);
    if ((int0 == varplayer_305)) {
        int4 = comp(1265, 14);
        int5 = comp(1265, 16);
        int6 = comp(1265, 17);
        int7 = comp(-1, 65535);
        int8 = comp(1265, 15);
        int9 = comp(1265, 18);
    };
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    [int10, int11] = script6095(int3);
    int12 = (IF_GETWIDTH(int4) / int10);
    int14 = ((int2 / int12) * int11);
    int13 = (MODULO(int2, int12) * int10);
    CC_CREATE(int4, 3, int1);
    var int15 = 0;
    var int16 = -1;
    var int17 = -1 as graphic;
    var int18 = INV_GETOBJ(int0, int1);
    var int19 = INV_GETNUM(int0, int1);
    var string0 = OC_NAME(int18);
    if ((STRING_LENGTH(string0) > 25)) {
        string0 = strconcat(SUBSTRING(string0, 0, 25), "...");
    };
    var string1 = script2706(int18);
    if ((int3 == 0)) {
        int15 = 48;
        int16 = 24086;
        int17 = 24164 as graphic;
    } else {
        int15 = 151;
        int16 = 24086;
        int17 = 24164 as graphic;
    };
    CC_SETSIZE(int15, 52, 0, 0);
    CC_SETONMOUSEREPEAT(callback(script12093, int18, int0, -2147483643));
    CC_SETCOLOUR(script10495(9));
    CC_SETFILL(1);
    if (((int0 == varplayer_299) && (int1 == varplayer_301))) {
        CC_SETGRAPHIC(int17);
        CC_SETONMOUSEOVER(callback(script6100, int3, 1, 1, -2147483645, -2147483643));
        CC_SETONMOUSELEAVE(callback(script6100, int3, 1, 0, -2147483645, -2147483643));
    } else {
        CC_SETONMOUSEOVER(callback(script6100, int3, 0, 1, -2147483645, -2147483643));
        CC_SETONMOUSELEAVE(callback(script6100, int3, 0, 0, -2147483645, -2147483643));
    };
    CC_SETPOSITION((int13 + 2), (int14 + 2), 0, 0);
    CC_SETOPBASE(`<col=FF981F>${OC_NAME(int18)}</col>`);
    CC_SETOP(1, "Info");
    if ((int0 == varplayer_305)) {
        CC_SETONOP(callback(script6105, varplayer_305, int1));
        if ((int19 > 0)) {
            CC_SETOP(2, "Take 1");
        };
        if ((int19 >= 5)) {
            CC_SETOP(3, "Take 5");
        };
        if ((int18 == 36 as obj)) {
            CC_SETOP(3, "Take 4");
        };
        if ((int19 >= 10)) {
            CC_SETOP(4, "Take 10");
        };
        if ((int19 >= 50)) {
            CC_SETOP(5, "Take 50");
        };
        if ((int19 >= 500)) {
            CC_SETOP(6, "Take 500");
        };
        if ((int19 > 1)) {
            CC_SETOP(7, "Take All");
        };
    } else if ((int0 == 93 as inv)) {
        CC_SETONOP(callback(script6105, 93, int1));
        CC_SETOP(2, "Sell 1");
        CC_SETOP(3, "Sell 5");
        if ((int18 == 36)) {
            CC_SETOP(3, "Sell 4");
        };
        CC_SETOP(4, "Sell 10");
        CC_SETOP(5, "Sell 50");
        CC_SETOP(6, "Sell 500");
        CC_SETOP(7, "Sell All");
    } else {
        CC_SETONOP(callback(script6105, varplayer_304, int1));
        if ((int19 > 0)) {
            CC_SETOP(2, "Buy 1");
        };
        if ((int19 >= 5)) {
            CC_SETOP(3, "Buy 5");
        };
        if ((int18 == 36 as obj)) {
            CC_SETOP(3, "Buy 4");
        };
        if ((int19 >= 10)) {
            CC_SETOP(4, "Buy 10");
        };
        if ((int19 >= 50)) {
            CC_SETOP(5, "Buy 50");
        };
        if ((int19 >= 500)) {
            CC_SETOP(6, "Buy 500");
        };
        if ((int19 > 1)) {
            CC_SETOP(7, "Buy All");
        };
    };
    if ((int3 == 0)) {
        if ((strcmp(string1, "") != 0)) {
            string1 = `${OC_NAME(int18)}<br>(Requirements not met)`;
        } else {
            string1 = OC_NAME(int18);
        };
        CC_CREATE(int5, 4, int1);
    } else {
        CC_CREATE(int5, 4, int1);
        CC_SETCOLOUR(16248247);
        CC_SETSIZE((151 - 53), (52 - 18), 0, 0);
        CC_SETPOSITION((int13 + 47), (int14 + 3), 0, 0);
        CC_SETTEXTFONT(script12028(207 as fontmetrics, 206 as fontmetrics, 206 as fontmetrics, string0, CC_GETWIDTH(), CC_GETHEIGHT()));
        CC_SETTEXTALIGN(2, 0, 13);
        CC_SETTEXT(string0);
    };
    CC_CREATE(int6, 5, int1);
    CC_SETSIZE(36, 32, 0, 0);
    if ((int3 == 0)) {
        CC_SETPOSITION((int13 + 10), (int14 + ((52 - 38) / 2)), 0, 0);
    } else {
        CC_SETPOSITION((int13 + 10), (int14 + ((52 - 22) / 2)), 0, 0);
    };
    CC_SETOBJECT_ALWAYSNUM(int18, INV_GETNUM(int0, int1));
    CC_SETOUTLINE(1);
    CC_CREATE(int8, 4, int1);
    CC_SETCOLOUR(15052881);
    CC_SETSIZE(31, 12, 0, 0);
    CC_SETPOSITION(((int13 + int15) - 33), (int14 + 40), 0, 0);
    CC_SETTEXTFONT(66 as fontmetrics);
    CC_SETTEXTALIGN(2, 1, 0);
    var int20 = script2720(int18);
    if ((int20 == -1)) {
        CC_SETTEXT("N/A");
    } else if ((int0 == varplayer_305)) {
        CC_SETTEXT("Free!");
    } else if ((int0 == 93 as inv)) {
        if ((TESTBIT(varclient_1879, int1) == 0)) {
            int20 = -1;
            CC_SETTEXT("N/A");
        } else {
            int20 = script6077(varplayer_306, int18, varplayer_304);
            CC_SETTEXT(script940(int20));
        };
    } else {
        CC_SETTEXT(script940(int20));
    };
    if ((int0 != varplayer_305)) {
        if ((int20 > 100000)) {
            CC_SETCOLOUR(16777215);
        } else if ((int20 > 10000000)) {
            CC_SETCOLOUR(65416);
        };
    };
    if ((int7 != comp(-1, 65535))) {
        CC_SETPOSITION(((int13 + int15) - 45), (int14 + 40), 0, 0);
        CC_CREATE(int7, 5, int1);
        CC_SETSIZE(12, 12, 0, 0);
        CC_SETPOSITION(((int13 + int15) - 12), (int14 + 39), 0, 0);
        if (((int0 == 93 as inv) && (TESTBIT(varclient_1879, int1) == 0))) {
            CC_SETGRAPHIC(2180 as graphic);
        } else {
            CC_SETGRAPHIC(enum_getvalue(0, 23, 200 as cs2enum, varplayer_306));
        };
    };
    CC_CREATE(int9, 5, int1);
    CC_SETSIZE(12, 12, 0, 0);
    CC_SETPOSITION((int13 + 36), (int14 + 6), 0, 0);
    CC_SETGRAPHIC(2180 as graphic);
    script812(int18);
    string1 = script2706(int18);
    CC_SETONMOUSEREPEAT(callback(script5495, int18));
    CC_SETONMOUSELEAVE(callback(script5495, -1));
    return;
}