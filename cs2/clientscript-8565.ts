//
function script8565(int0: int): void {
    if ((varbitplayer_36829 <= 0)) {
        CC_SETGRAPHIC(-1 as graphic);
        return;
    };
    var int1 = -1 as struct;
    var int2 = 0;
    int1 = enum_getvalue(0, 73, 6759 as cs2enum, int0);
    if ((script6799(varbitplayer_36830) == 1)) {
        int1 = enum_getvalue(0, 73, 6760 as cs2enum, int0);
    };
    if ((int1 != -1 as struct)) {
        int1 = script9101(int1);
    } else {
        return;
    };
    int2 = struct_getparam(int1, 2807);
    if ((script6807(varbitplayer_36830, script6808(int1)) == 1)) {
        if ((STAT_BASE(5 as stat) < int2)) {
            CC_SETGRAPHIC(-1 as graphic);
            return;
        };
        CC_SETGRAPHIC(14710 as graphic);
        script8562(int1);
    } else {
        CC_SETGRAPHIC(-1 as graphic);
    };
    return;
}