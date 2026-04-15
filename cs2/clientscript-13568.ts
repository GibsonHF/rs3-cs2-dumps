//
function script13568(): int {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(681 as cs2enum);
    var int2 = -1 as stat;
    var int3 = 0;
    while ((int0 < int1)) {
        int2 = enum_getvalue(0, 17, 681 as cs2enum, (int0 + 1));
        if ((int2 != -1 as stat)) {
            if ((STAT_BASE_ACTUAL(int2) >= enum_getvalue(17, 0, 10865 as cs2enum, int2))) {
                int3 = SETBIT(int3, int0);
            };
            if (((DATE_RUNEDAY() <= 6725) && (((int2 == 19 as stat) || (int2 == 15 as stat)) && (STAT_BASE_ACTUAL(int2) >= 99)))) {
                int3 = SETBIT(int3, int0);
            };
            if ((((DATE_RUNEDAY() <= 6790) && (int2 == 27 as stat)) && (STAT_BASE_ACTUAL(int2) >= 99))) {
                int3 = SETBIT(int3, int0);
            };
        };
        int0 = (int0 + 1);
    };
    return int3;
}