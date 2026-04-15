//
function script9399(int0: component, int1: component, int2: component): void {
    var int3 = 0;
    var int4 = 9458 as cs2enum;
    var int5 = 0;
    var int6 = ENUM_GETOUTPUTCOUNT(int4);
    var int7 = 0;
    while ((int3 < int6)) {
        int7 = enum_getvalue(0, 0, int4, int3);
        if ((script4036(int7) == 1)) {
            int5 = SETBIT(int5, int7);
        };
        int3 = (int3 + 1);
    };
    if ((int5 == 0)) {
        IF_SETTEXT("Skill Tracker", comp(240, 6));
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(1, 1, 0);
        if ((script6431() == false)) {
            CC_SETTEXT("You are currently not tracking any skills.<br>Open 'Skills' and use the Right Click menu to select and begin tracking a level or XP target.");
        } else {
            CC_SETTEXT("You are currently not tracking any skills.<br>Open 'Skills' and use the Tap and Hold menu to select and begin tracking a level or XP target.");
        };
        script11024(3);
        IF_SETHIDE(false, comp(240, 1));
        return;
    };
    var int8 = 5;
    int3 = (5 - 1);
    var int9 = 0;
    while ((int3 > -1)) {
        int9 = script8224(int3);
        if (((int9 > 0) && (int9 != 5))) {
            int8 = (int8 - 1);
        };
        int3 = (int3 - 1);
    };
    if ((int8 == 0)) {
        IF_SETTEXT("Skill Tracker", comp(240, 6));
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXT("There are currently no trackers available.<br>Please remove some and try again");
        script11024(3);
        IF_SETHIDE(false, comp(240, 1));
        return;
    };
    var int10 = 0;
    var int11 = -1 as cs2enum;
    var int12 = 0;
    [int10, int11, int12] = script8941(int5, IF_GETWIDTH(int0), 5);
    IF_SETTEXT("Choose skills to (un)track", comp(240, 6));
    int3 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    int7 = 0;
    while ((int3 < int6)) {
        CC_CREATE(int1, 3, int3);
        CC_SETHIDE(true);
        CC_CREATE(int2, 3, int3);
        CC_SETHIDE(true);
        CC_SETSIZE(int12, int12, 0, 0);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETCOLOUR(script693(238, 233, 13));
        int7 = enum_getvalue(0, 0, int4, int3);
        if ((TESTBIT(int5, int7) == 1)) {
            int13 = ((5 + (MODULO(int16, int10) * int12)) + (MODULO(int16, int10) * 5));
            int14 = (int15 * (5 + int12));
            script10410(int0, comp(-1, 65535), 21363 as struct, int13, int14, int12, int12, 0, false, "");
            CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
            CC_SETGRAPHIC(enum_getvalue(0, 23, int11, int7));
            CC_SETSIZE((int12 - 8), (int12 - 8), 0, 0);
            CC_SETPOSITION((int13 + 4), (int14 + 4), 0, 0);
            if ((MODULO(++int16, int10) == 0)) {
                int15 = (int15 + 1);
            };
            if ((CC_FIND(int1, int3) == 1)) {
                CC_SETPOSITION(int13, int14, 0, 0);
                CC_SETSIZE(int12, int12, 0, 0);
                CC_SETHIDE(false);
                CC_SETONVARTRANSMIT(callback(script9400, int3, 8740, 1));
            };
            if ((CC_FIND(int2, int3) == 1)) {
                CC_SETPOSITION(int13, int14, 0, 0);
            };
            script9401(int3);
        };
        int3 = (int3 + 1);
    };
    IF_SETHIDE(false, comp(240, 1));
    return;
}