//
function script13573(): unknown_int {
    var int0 = 1;
    var int1 = enum_getvalue(0, 17, 681 as cs2enum, int0);
    while ((int1 != -1 as stat)) {
        if (((int1 != 26 as stat) && (((STAT_BASE(int1) > 5) && (int0 != 6)) || (STAT_BASE(int1) > 15)))) {
            return 0;
        };
        int0 = (int0 + 1);
        int1 = enum_getvalue(0, 17, 681 as cs2enum, int0);
    };
    return 1;
}