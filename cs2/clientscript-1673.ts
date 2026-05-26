//
function script1673(): void {
    CC_DELETEALL(5505031);
    CC_DELETEALL(5505032);
    var int0 = IF_GETWIDTH(5505029);
    var int1 = IF_GETHEIGHT(5505029);
    var int2 = ENUM_GETOUTPUTCOUNT(836);
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var string0 = "";
    while ((int3 < int2)) {
        string0 = enum_getvalue(0, 36, 836 as cs2enum, int3);
        if ((int3 > 0)) {
            int5 = script6427(TESTBIT(varplayer_1681, (int3 - 1)));
        };
        script13998(5505031, 5505032, 28556, 0, int4, int0, 18, int3, int5, string0, script9670(int3, varbitplayer_5534));
        if ((CC_FIND(5505032, int3) == 1)) {
            CC_SETONOP(callback(script1676, int3));
        };
        int3 = (int3 + 1);
        int4 = (int4 + 21);
    };
    IF_SETSCROLLSIZE(0, int4, 5505029);
    script7791(5505030, 5505029);
    return;
}