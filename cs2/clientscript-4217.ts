//
function script4217(): [int, int] {
    var int0 = 0;
    var int1 = 0;
    var int2 = 1;
    while ((int2 <= ENUM_GETOUTPUTCOUNT(681 as cs2enum))) {
        if ((enum_getvalue(0, 17, 681 as cs2enum, int2) != -1 as stat)) {
            int0 = (int0 + STAT_VISIBLE_XP(enum_getvalue(0, 17, 681 as cs2enum, int2)));
            if ((int0 > 1000000000)) {
                [int1, int0] = [(int1 + 1), (int0 - 1000000000)];
            };
            int2 = (int2 + 1);
        };
    };
    return [int0, int1];
}