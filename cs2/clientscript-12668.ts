//
function script12668(int0: stat, int1: stat, int2: stat, int3: stat, int4: stat, int5: stat, int6: stat): [stat, stat, stat, stat, stat, stat] {
    if (((int0 == -1 as stat) || ((STAT_BASE_ACTUAL(int6) <= STAT_BASE_ACTUAL(int0)) && (STAT_VISIBLE_XP_ACTUAL(int6) <= STAT_VISIBLE_XP_ACTUAL(int0))))) {
        var int5 = int4;
        var int4 = int3;
        var int3 = int2;
        var int2 = int1;
        var int1 = int0;
        var int0 = int6;
    } else if (((int1 == -1 as stat) || ((STAT_BASE_ACTUAL(int6) <= STAT_BASE_ACTUAL(int1)) && (STAT_VISIBLE_XP_ACTUAL(int6) <= STAT_VISIBLE_XP_ACTUAL(int1))))) {
        int5 = int4;
        int4 = int3;
        int3 = int2;
        int2 = int1;
        int1 = int6;
    } else if (((int2 == -1 as stat) || ((STAT_BASE_ACTUAL(int6) <= STAT_BASE_ACTUAL(int2)) && (STAT_VISIBLE_XP_ACTUAL(int6) <= STAT_VISIBLE_XP_ACTUAL(int2))))) {
        int5 = int4;
        int4 = int3;
        int3 = int2;
        int2 = int6;
    } else if (((int3 == -1 as stat) || ((STAT_BASE_ACTUAL(int6) <= STAT_BASE_ACTUAL(int3)) && (STAT_VISIBLE_XP_ACTUAL(int6) <= STAT_VISIBLE_XP_ACTUAL(int3))))) {
        int5 = int4;
        int4 = int3;
        int3 = int6;
    } else if (((int4 == -1 as stat) || ((STAT_BASE_ACTUAL(int6) <= STAT_BASE_ACTUAL(int4)) && (STAT_VISIBLE_XP_ACTUAL(int6) <= STAT_VISIBLE_XP_ACTUAL(int4))))) {
        int5 = int4;
        int4 = int6;
    } else if (((int5 == -1 as stat) || ((STAT_BASE_ACTUAL(int6) <= STAT_BASE_ACTUAL(int5)) && (STAT_VISIBLE_XP_ACTUAL(int6) <= STAT_VISIBLE_XP_ACTUAL(int5))))) {
        int5 = int6;
    };
    return [int0, int1, int2, int3, int4, int5];
}