//
function script13573(): number {
    var int0 = 1;
    var int1 = enum_getvalue(0, 17, 681 as cs2enum, int0);
    while ((int1 != -1 as stat)) {
        if ((int1 != 26 as stat)) {
            if ((STAT_BASE(int1) > 5)) {
                if (((int0 != 6) || (STAT_BASE(int1) > 15))) {
                    return 0;
                };
            } else if ((STAT_BASE(int1) > 15)) {
                return 0;
            };
        };
        int0 = (int0 + 1);
        int1 = enum_getvalue(0, 17, 681 as cs2enum, int0);
    };
    return 1;
}