//
function script10888(int0: int): unknown_int {
    if ((script4036(int0) == 0)) {
        return 1;
    };
    if ((varbitplayer_26632 == 0)) {
        return 1;
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = enum_getvalue(0, 17, 681 as cs2enum, int0);
    if ((int4 == -1 as stat)) {
        return 1;
    };
    [int3, int1, int2] = script4037(int0);
    if ((int3 == 0)) {
        if ((STAT_VISIBLE_XP(int4) >= int1)) {
            return 1;
        };
    } else if ((script11860(int4) >= int1)) {
        return 1;
    };
    return 0;
}