//
function script11153(int0: number): number {
    var int1 = 0;
    if (((STAT_BASE(11) >= 82) && (MAP_MEMBERS() == 1))) {
        int1 = 4343;
    } else if ((STAT_BASE(11) >= 75)) {
        int1 = 3038;
    } else if ((STAT_BASE(11) >= 60)) {
        int1 = 2025;
    } else if (((MAP_MEMBERS() == 1) && (STAT_BASE(11) >= 58))) {
        int1 = 1935;
    } else if (((MAP_MEMBERS() == 1) && (STAT_BASE(11) >= 50))) {
        int1 = 1575;
    } else if ((STAT_BASE(11) >= 45)) {
        int1 = 1350;
    } else if (((MAP_MEMBERS() == 1) && (STAT_BASE(11) >= 42))) {
        int1 = 1250;
    } else if (((MAP_MEMBERS() == 1) && (STAT_BASE(11) >= 35))) {
        int1 = 1050;
    } else if ((STAT_BASE(11) >= 30)) {
        int1 = 900;
    } else if ((STAT_BASE(11) >= 15)) {
        int1 = 600;
    } else {
        int1 = 400;
    };
    int1 = SCALE(int1, 100, 175);
    int1 = (int1 / 2);
    if ((int0 == 1)) {
        int1 = (int1 + SCALE(int1, 100, 10));
    };
    return int1;
}