//
function script12294(int0: stat): int {
    if ((varbitplayer_19007 == 0)) {
        return STAT_BASE_ACTUAL(int0);
    };
    var int1 = enum_getvalue(17, 0, 10865 as cs2enum, int0);
    if ((STAT_BASE_ACTUAL(int0) < int1)) {
        return STAT_BASE_ACTUAL(int0);
    };
    var int2 = enum_getvalue(17, 0, 10868 as cs2enum, int0);
    if ((int1 < int2)) {
        return script11849(int0, STAT_VISIBLE_XP_ACTUAL(int0), (int1 + 1));
    };
    return STAT_BASE_ACTUAL(int0);
}