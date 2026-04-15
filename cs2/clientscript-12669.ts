//
function script12669(int0: stat, int1: stat, int2: stat, int3: stat, int4: stat, int5: stat, int6: stat): [stat, stat, stat, stat, stat, stat] {
    if (((int4 == -1 as stat) || (STAT_BASE_ACTUAL(int6) <= STAT_BASE_ACTUAL(int4)))) {
        if ((STAT_BASE_ACTUAL(26 as stat) < 100)) {
            var int5 = int4;
            var int4 = int6;
        } else if (((STAT_BASE_ACTUAL(26 as stat) == 120) && (STAT_VISIBLE_XP_ACTUAL(26 as stat) <= STAT_VISIBLE_XP_ACTUAL(int4)))) {
            int5 = int4;
            int4 = int6;
        };
    } else if (((int5 == -1 as stat) || (STAT_BASE_ACTUAL(int6) <= STAT_BASE_ACTUAL(int5)))) {
        if ((STAT_BASE_ACTUAL(26 as stat) < 100)) {
            int5 = int6;
        } else if (((STAT_BASE_ACTUAL(26 as stat) == 120) && (STAT_VISIBLE_XP_ACTUAL(26 as stat) <= STAT_VISIBLE_XP_ACTUAL(int4)))) {
            int5 = int6;
        };
    };
    return [int0, int1, int2, int3, int4, int5];
}