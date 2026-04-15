//
function script13030(int0: stat, int1: stat, int2: stat, int3: stat, int4: stat, int5: stat, int6: stat, int7: stat, int8: stat, int9: stat, int10: stat, int11: stat, int12: stat): [stat, stat, stat, stat, stat, stat, stat, stat, stat, stat, stat, stat] {
    if ((STAT_VISIBLE_XP_ACTUAL(int12) >= 200000000)) {
        if ((int6 == -1 as stat)) {
            var int6 = int12;
        } else if ((int7 == -1 as stat)) {
            var int7 = int12;
        } else if ((int8 == -1 as stat)) {
            var int8 = int12;
        } else if ((int9 == -1 as stat)) {
            var int9 = int12;
        } else if ((int10 == -1 as stat)) {
            var int10 = int12;
        } else if ((int11 == -1 as stat)) {
            var int11 = int12;
        };
    } else if (((int0 == -1 as stat) || (STAT_VISIBLE_XP_ACTUAL(int12) >= STAT_VISIBLE_XP_ACTUAL(int0)))) {
        var int5 = int4;
        var int4 = int3;
        var int3 = int2;
        var int2 = int1;
        var int1 = int0;
        var int0 = int12;
    } else if (((int1 == -1 as stat) || (STAT_VISIBLE_XP_ACTUAL(int12) >= STAT_VISIBLE_XP_ACTUAL(int1)))) {
        int5 = int4;
        int4 = int3;
        int3 = int2;
        int2 = int1;
        int1 = int12;
    } else if (((int2 == -1 as stat) || (STAT_VISIBLE_XP_ACTUAL(int12) >= STAT_VISIBLE_XP_ACTUAL(int2)))) {
        int5 = int4;
        int4 = int3;
        int3 = int2;
        int2 = int12;
    } else if (((int3 == -1 as stat) || (STAT_VISIBLE_XP_ACTUAL(int12) >= STAT_VISIBLE_XP_ACTUAL(int3)))) {
        int5 = int4;
        int4 = int3;
        int3 = int12;
    } else if (((int4 == -1 as stat) || (STAT_VISIBLE_XP_ACTUAL(int12) >= STAT_VISIBLE_XP_ACTUAL(int4)))) {
        int5 = int4;
        int4 = int12;
    } else if (((int5 == -1 as stat) || (STAT_VISIBLE_XP_ACTUAL(int12) >= STAT_VISIBLE_XP_ACTUAL(int5)))) {
        int5 = int12;
    };
    return [int0, int1, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11];
}