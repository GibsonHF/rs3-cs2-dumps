//
function script1673(): void {
    CC_DELETEALL(comp(84, 7));
    CC_DELETEALL(comp(84, 8));
    var int0 = IF_GETWIDTH(comp(84, 5));
    var int1 = IF_GETHEIGHT(comp(84, 5));
    var int2 = ENUM_GETOUTPUTCOUNT(836 as cs2enum);
    var int3 = 0;
    var int4 = 0;
    var int5 = false;
    var string0 = "";
    while ((int3 < int2)) {
        string0 = enum_getvalue(0, 36, 836 as cs2enum, int3);
        if ((int3 > 0)) {
            int5 = script6427(TESTBIT(varplayer_1681, (int3 - 1)));
        };
        script13998(comp(84, 7), comp(84, 8), 28556 as struct, 0, int4, int0, 18, int3, int5, string0, script9670(int3, varbitplayer_5534));
        if ((CC_FIND(comp(84, 8), int3) == 1)) {
            CC_SETONOP(callback(script1676, int3));
        };
        int3 = (int3 + 1);
        int4 = (int4 + 21);
    };
    IF_SETSCROLLSIZE(0, int4, comp(84, 5));
    script7791(comp(84, 6), comp(84, 5));
    return;
}