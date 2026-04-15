//
function script4708(): int {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    while ((int0 < ENUM_GETOUTPUTCOUNT(9458 as cs2enum))) {
        int2 = enum_getvalue(0, 0, 9458 as cs2enum, int0);
        int1 = (int1 + STAT_BASE_ACTUAL(enum_getvalue(0, 17, 681 as cs2enum, int2)));
        int0 = (int0 + 1);
    };
    return int1;
}