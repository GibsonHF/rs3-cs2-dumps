//
function script8499(int0: unknown_int, int1: int): void {
    var int2 = -1 as struct;
    var int3 = 0;
    if ((CC_FIND(comp(1890, 37), int1) == 1)) {
        if ((script6799(varbitplayer_36830) == 1)) {
            int2 = enum_getvalue(0, 73, 6760 as cs2enum, int1);
        } else {
            int2 = enum_getvalue(0, 73, 6759 as cs2enum, int1);
            int2 = script9101(int2);
        };
        int3 = struct_getparam(int2, 2807);
        if ((STAT_BASE(5 as stat) < int3)) {
            CC_SETGRAPHIC(-1 as graphic);
            return;
        };
        CC_SETGRAPHIC(14710 as graphic);
        script8562(int2);
    };
    return;
}