//
function script1673(): void {
    CC_DELETEALL(comp(84, 7));  // champions2_bannerselect:build
    CC_DELETEALL(comp(84, 8));  // champions2_bannerselect:click
    var int0 = IF_GETWIDTH(comp(84, 5));  // champions2_bannerselect:listbox
    var int1 = IF_GETHEIGHT(comp(84, 5));  // champions2_bannerselect:listbox
    var int2 = ENUM_GETOUTPUTCOUNT(836 as cs2enum);
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
        if ((CC_FIND(comp(84, 8), int3) == 1)) {  // champions2_bannerselect:click
            CC_SETONOP(callback(script1676, int3));
        };
        int3 = (int3 + 1);
        int4 = (int4 + 21);
    };
    IF_SETSCROLLSIZE(0, int4, comp(84, 5));  // champions2_bannerselect:listbox
    script7791(5505030, 5505029);
    return;
}