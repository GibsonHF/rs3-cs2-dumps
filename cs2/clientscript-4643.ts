//
function script4643(int0: unknown_int): unknown_int {
    switch (int0) {
        case 1: {
            if ((((STAT_BASE(0 as stat) >= 30) && (STAT_BASE(6 as stat) >= 30)) && (STAT_BASE(4 as stat) >= 30))) {
                return 1;
            };
            return 0;
        }
        case 4: {
            if ((STAT_BASE(2 as stat) >= 70)) {
                return 1;
            };
            return 0;
        }
        case 2: {
            if (((STAT_BASE(16 as stat) >= 55) && (STAT_BASE(17 as stat) >= 55))) {
                return 1;
            };
            return 0;
        }
        case 3: {
            if ((((STAT_BASE(17 as stat) >= 45) && (STAT_BASE(0 as stat) >= 60)) && (STAT_BASE(24 as stat) >= 55))) {
                return 1;
            };
            return 0;
        }
        case 6: {
            break;
        }
        default: {
            return 0;
        }
    };
    if ((STAT_BASE(2 as stat) >= 75)) {
        return 1;
    };
    return 0;
}