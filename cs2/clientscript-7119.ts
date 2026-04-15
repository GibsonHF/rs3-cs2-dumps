//
function script7119(): void {
    CC_DELETEALL(comp(1371, 22));
    if (((varplayer_1169 == -1 as cs2enum) || (varplayer_1170 == -1 as obj))) {
        return;
    };
    var int0 = 0;
    var int1 = 0;
    int0 = ENUM_GETOUTPUTCOUNT(varplayer_1169);
    int1 = script7120(int0);
    var int2 = 0;
    if ((((varplayer_1170 != -1 as obj) && (varplayer_1170 != 49384 as obj)) && (enum_hasoutput(33, varplayer_1169, varplayer_1170) == 1))) {
        int2 = (enum_getreverseindex(33, 0, varplayer_1169, varplayer_1170, 0) / 4);
    };
    var int3 = ((int2 * 10) + ((int2 - 1) * (46 - 6)));
    if ((IF_GETHEIGHT(comp(1371, 22)) < int1)) {
        IF_SETSCROLLSIZE(IF_GETWIDTH(comp(1371, 22)), int1, comp(1371, 22));
        IF_SETSCROLLPOS(0, MAX(0, MIN(int3, (int1 - IF_GETHEIGHT(comp(1371, 22))))), comp(1371, 22));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1371, 22));
        IF_SETSCROLLPOS(0, 0, comp(1371, 22));
    };
    script31(comp(1371, 24), comp(1371, 22), 4343 as graphic, 4340 as graphic, 4341 as graphic, 4342 as graphic, 4337 as graphic, 4336 as graphic);
    return;
}