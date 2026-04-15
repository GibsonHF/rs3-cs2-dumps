//
function script11891(int0: stat, int1: int): unknown_int {
    var int2 = script3158(int0);
    if ((varbitplayer_19007 == 1)) {
        if ((script11849(int0, STAT_VISIBLE_XP_ACTUAL(int0), int2) == int2)) {
            return 1;
        };
        return 0;
    };
    if ((STAT_BASE_ACTUAL(int0) == int1)) {
        return 1;
    };
    return 0;
}