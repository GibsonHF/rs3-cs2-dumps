//
function script4643(int0: number): number {
    switch (int0) {
        case 1: {
            if ((((STAT_BASE(0) >= 30) && (STAT_BASE(6) >= 30)) && (STAT_BASE(4) >= 30))) {
                return 1;
            };
            return 0;
        }
        case 4: {
            if ((STAT_BASE(2) >= 70)) {
                return 1;
            };
            return 0;
        }
        case 2: {
            if (((STAT_BASE(16) >= 55) && (STAT_BASE(17) >= 55))) {
                return 1;
            };
            return 0;
        }
        case 3: {
            if ((((STAT_BASE(17) >= 45) && (STAT_BASE(0) >= 60)) && (STAT_BASE(24) >= 55))) {
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
    if ((STAT_BASE(2) >= 75)) {
        return 1;
    };
    return 0;
}