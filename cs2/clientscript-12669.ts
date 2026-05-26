//
function script12669(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): [number, number, number, number, number, number] {
    if (((int4 == -1) || (STAT_BASE_ACTUAL(int6) <= STAT_BASE_ACTUAL(int4)))) {
        if ((STAT_BASE_ACTUAL(26) < 100)) {
            var int5 = int4;
            var int4 = int6;
        } else if (((STAT_BASE_ACTUAL(26) == 120) && (STAT_VISIBLE_XP_ACTUAL(26) <= STAT_VISIBLE_XP_ACTUAL(int4)))) {
            int5 = int4;
            int4 = int6;
        };
    } else if (((int5 == -1) || (STAT_BASE_ACTUAL(int6) <= STAT_BASE_ACTUAL(int5)))) {
        if ((STAT_BASE_ACTUAL(26) < 100)) {
            int5 = int6;
        } else if (((STAT_BASE_ACTUAL(26) == 120) && (STAT_VISIBLE_XP_ACTUAL(26) <= STAT_VISIBLE_XP_ACTUAL(int4)))) {
            int5 = int6;
        };
    };
    return [int0, int1, int2, int3, int4, int5];
}