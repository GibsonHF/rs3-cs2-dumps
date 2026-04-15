//
function script7298(): void {
    CC_DELETEALL(comp(1276, 7));
    CC_DELETEALL(comp(1276, 6));
    var int0 = 0;
    var int1 = -1 as obj;
    var int2 = 0;
    var string0 = "";
    var int3 = -1;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    var int7 = 0;
    var int8 = 0;
    var int9 = -1;
    var int10 = -1;
    varplayer_3420 = -1;
    while ((int0 < INV_SIZE(677 as inv))) {
        int1 = INV_GETOBJ(677 as inv, int0);
        int2 = script7311(int0);
        switch (int2) {
            case 1: {
                int6 = varbitplayer_17155;
                break;
            }
            case 2: {
                int6 = varbitplayer_17168;
                break;
            }
            case 3: {
                int6 = varbitplayer_17181;
                break;
            }
            case 4: {
                int6 = varbitplayer_17194;
                break;
            }
            case 5: {
                int6 = varbitplayer_17207;
                break;
            }
        };
        if (((int2 > 0) && (TESTBIT(varplayer_3404, int0) == 1))) {
            string0 = `<col=F7EDB7>${inttostring(int2, 10)}`;
        } else {
            string0 = "<col=F7EDB7>-";
        };
        if ((int1 != -1 as obj)) {
            int10 = script7317(677 as inv, int0);
            if ((enum_hasoutput(33, 2173 as cs2enum, int1) == 1)) {
                CC_CREATE(comp(1276, 7), 5, int0);
                CC_SETGRAPHIC(item_getparam(int1, 3080));
                CC_SETSIZE(35, 35, 0, 0);
                CC_SETPOSITION(18, (14 + (int5 * 55)), 0, 0);
                CC_SETOP(1, "Info");
                CC_SETOP(2, "Dismiss");
                CC_SETONOP(callback(script7301));
                CC_CREATE(83623941, 5, int0);
                if ((varbitplayer_17147 == int0)) {
                    CC_SETGRAPHIC(15581 as graphic);
                } else {
                    CC_SETGRAPHIC(15579 as graphic);
                    int9 = 15580;
                    CC_SETONMOUSEOVER(callback(script688, -2147483645, CC_GETID(), int9));
                    int9 = 15579;
                    CC_SETONMOUSELEAVE(callback(script688, -2147483645, CC_GETID(), int9));
                };
                CC_SETSIZE(55, 55, 0, 0);
                CC_SETPOSITION(8, (4 + (int5 * 55)), 0, 0);
                CC_CREATE(comp(1276, 8), 5, int0);
                CC_SETGRAPHIC(15477 as graphic);
                CC_SETSIZE(21, 21, 0, 0);
                CC_SETPOSITION(9, (6 + (int5 * 55)), 0, 0);
                CC_CREATE(comp(1276, 9), 4, int0);
                CC_SETSIZE(21, 21, 0, 0);
                CC_SETTEXTALIGN(1, 1, 0);
                CC_SETTEXTFONT(66 as fontmetrics);
                CC_SETTEXT(string0);
                CC_SETPOSITION(9, (7 + (int5 * 55)), 0, 0);
                CC_CREATE(comp(1276, 10), 4, int0);
                CC_SETSIZE(12, 12, 0, 0);
                CC_SETTEXTFONT(66 as fontmetrics);
                CC_SETTEXTALIGN(2, 1, 0);
                CC_SETTEXT(inttostring(int10, 10));
                CC_SETCOLOUR(16777215);
                CC_SETTEXTSHADOW(true);
                CC_SETPOSITION(40, (38 + (int5 * 55)), 0, 0);
                int5 = (int5 + 1);
            } else {
                CC_CREATE(comp(1276, 7), 5, int0);
                CC_SETGRAPHIC(item_getparam(int1, 3080));
                CC_SETSIZE(35, 35, 0, 0);
                int8 = MODULO(int4, 5);
                int7 = (int4 / 5);
                CC_SETPOSITION((74 + (int8 * 52)), (14 + (int7 * 55)), 0, 0);
                CC_SETOP(1, "Info");
                CC_SETOP(2, "Dismiss");
                CC_SETONOP(callback(script7301));
                CC_CREATE(83623941, 5, int0);
                if ((varbitplayer_17147 == int0)) {
                    CC_SETGRAPHIC(15584 as graphic);
                    CC_SETONMOUSEOVER(callback());
                    CC_SETONMOUSELEAVE(callback());
                } else {
                    CC_SETGRAPHIC(15582 as graphic);
                    int9 = 15583;
                    CC_SETONMOUSEOVER(callback(script688, -2147483645, CC_GETID(), int9));
                    int9 = 15582;
                    CC_SETONMOUSELEAVE(callback(script688, -2147483645, CC_GETID(), int9));
                };
                CC_SETSIZE(45, 45, 0, 0);
                CC_SETPOSITION((69 + (int8 * 52)), (9 + (int7 * 55)), 0, 0);
                CC_CREATE(comp(1276, 8), 5, int0);
                CC_SETGRAPHIC(15477 as graphic);
                CC_SETSIZE(21, 21, 0, 0);
                CC_SETPOSITION((65 + (int8 * 52)), (6 + (int7 * 55)), 0, 0);
                CC_CREATE(comp(1276, 9), 4, int0);
                CC_SETSIZE(21, 21, 0, 0);
                CC_SETTEXTALIGN(1, 1, 0);
                CC_SETTEXTFONT(66 as fontmetrics);
                CC_SETTEXT(string0);
                CC_SETPOSITION((65 + (int8 * 52)), (7 + (int7 * 55)), 0, 0);
                CC_CREATE(comp(1276, 10), 4, int0);
                CC_SETSIZE(12, 12, 0, 0);
                CC_SETTEXTALIGN(2, 1, 0);
                CC_SETTEXTFONT(66 as fontmetrics);
                CC_SETTEXT(inttostring(int10, 10));
                CC_SETCOLOUR(16777215);
                CC_SETTEXTSHADOW(true);
                CC_SETPOSITION((96 + (int8 * 52)), (38 + (int7 * 55)), 0, 0);
                int4 = (int4 + 1);
            };
        } else {
            CC_CREATE(comp(1276, 7), 5, int0);
            CC_CREATE(comp(1276, 5), 5, int0);
            CC_CREATE(comp(1276, 8), 5, int0);
            CC_CREATE(comp(1276, 9), 4, int0);
            CC_CREATE(comp(1276, 10), 4, int0);
        };
        int0 = (int0 + 1);
    };
    int0 = 0;
    while ((int0 < INV_SIZE(678 as inv))) {
        script7308(int0);
        int0 = (int0 + 1);
    };
    var int11 = 0;
    var int12 = 0;
    [int11, int12] = script4187();
    var string1 = "";
    if ((int11 == 0)) {
        string1 = `${inttostring(int12, 10)}m`;
    } else {
        string1 = `${inttostring(int11, 10)}h`;
    };
    if ((varbitplayer_17461 > 0)) {
        IF_SETTEXT(`Rerolls available: ${inttostring(varbitplayer_17461, 10)}`, comp(1276, 102));
    } else {
        IF_SETTEXT(`New crew in ${string1}`, comp(1276, 102));
    };
    script13993(comp(1276, 105), comp(-1, 65535), 28556 as struct, `Add 5 Rerolls (${inttostring(varbitplayer_17420, 10)})`);
    script13994(comp(1276, 106), comp(-1, 65535), 28556 as struct, `Add 5 Rerolls (${inttostring(varbitplayer_17420, 10)})`, true);
    if ((varbitplayer_17495 < 63)) {
        IF_SETHIDE(false, comp(1276, 106));
        IF_SETHIDE(true, comp(1276, 42));
        IF_SETHIDE(true, comp(1276, 64));
        IF_SETHIDE(true, comp(1276, 86));
    };
    script1137();
    return;
}