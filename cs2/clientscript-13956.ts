//
function script13956(): int {
    switch (varbitplayer_35266) {
        case 2:
        case 3: {
            if ((STAT_BASE(6 as stat) >= 70)) {
                return 1;
            };
            return 0;
        }
        case 4: {
            if ((STAT_BASE(6 as stat) >= 70)) {
                return 2;
            };
            return 3;
        }
        case 5: {
            break;
        }
        default: {
            return 0;
        }
    };
    if ((STAT_BASE(6 as stat) >= 75)) {
        return 4;
    };
    if ((STAT_BASE(6 as stat) >= 70)) {
        return 2;
    };
    return 3;
}