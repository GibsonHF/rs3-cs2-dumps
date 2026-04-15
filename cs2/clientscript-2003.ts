//[proc,rabbit_shop_pointsupdate]
function script2003(): void {
    var int0 = 0;
    if ((STAT_BASE(19 as stat) >= 40)) {
        int0 = varbitplayer_5608;
    } else {
        int0 = ((varbitplayer_5608 * enum_getvalue(0, 0, 1369 as cs2enum, STAT_BASE(19 as stat))) / 100);
    };
    if ((varbitplayer_5608 == 1)) {
        IF_SETTEXT(`Trade one point for ${TOSTRING_LOCALISED(int0, 1)} XP?`, comp(686, 9));
    } else {
        IF_SETTEXT(`Trade ${TOSTRING_LOCALISED(varbitplayer_5608, 1)} points for ${TOSTRING_LOCALISED(int0, 1)} Farming XP?`, comp(686, 9));
    };
    CC_DELETEALL(comp(686, 0));
    CC_DELETEALL(comp(686, 1));
    var int1 = ENUM_GETOUTPUTCOUNT(1589 as cs2enum);
    var int2 = 0;
    var int3 = -1 as obj;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = IF_GETWIDTH(comp(686, 2));
    var int8 = 0;
    var string0 = "Farming experience";
    var string1 = "";
    var int9 = 28679 as struct;
    var int10 = 2730 as graphic;
    if ((MAP_LANG() == 1)) {
        int10 = 2714 as graphic;
    };
    while ((int2 < int1)) {
        int3 = enum_getvalue(0, 33, 1589 as cs2enum, int2);
        int4 = enum_getvalue(33, 0, 1365 as cs2enum, int3);
        if ((int4 == -1)) {
            int8 = 2;
            string1 = "N/A";
        } else {
            if ((int4 < varbitplayer_5608)) {
                int8 = 2;
            } else {
                int8 = 6;
            };
            string0 = "";
            string1 = TOSTRING_LOCALISED(int4, 1);
        };
        if ((MODULO(int2, 2) == 0)) {
            int9 = 28679 as struct;
        } else {
            int9 = 28680 as struct;
        };
        if (((int5 + 49) >= int7)) {
            int5 = 0;
            int6 = (int6 + 53);
        };
        script6204(comp(686, 0), 48, 52, int5, int6, 1, int9);
        if ((int3 == 11209 as obj)) {
            script4512(comp(686, 0), 34, 34, (int5 + 7), (int6 + 1), int10);
        } else {
            script6198(comp(686, 0), 36, 32, (int5 + 6), (int6 + 2), int3, 5);
            CC_SETOUTLINE(1);
        };
        script6203(comp(686, 0), 44, 14, (int5 + 2), (int6 + 36), 26 as fontmetrics, string1, int8);
        CC_SETTEXTALIGN(1, 1, 0);
        script6204(comp(686, 1), 48, 52, int5, int6, 0, 2438 as struct);
        if ((int3 == 11209 as obj)) {
            CC_SETOP(1, "Trade points for XP");
            CC_SETONOP(callback(script69, 0, 44957700));
            CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        } else {
            CC_SETOPBASE(`<col=FF981F>${OC_NAME(int3)}</col>`);
            CC_SETOP(1, "Value");
            CC_SETOP(2, "Buy 1");
            CC_SETOP(3, "Buy 5");
            CC_SETOP(4, "Buy 10");
            if ((int3 != 12625 as obj)) {
                CC_SETOP(5, "Buy X");
            };
            CC_SETOP(10, "Examine");
            CC_SETONMOUSEREPEAT(callback(script9564, int3, -2147483645, -2147483643));
        };
        int5 = (int5 + 49);
        int2 = (int2 + 1);
    };
    if ((int5 > 0)) {
        int6 = (int6 + 53);
    };
    if ((int6 > IF_GETHEIGHT(comp(686, 2)))) {
        IF_SETSCROLLSIZE(0, int6, comp(686, 2));
        script7791(comp(686, 3), comp(686, 2));
    };
    return;
}