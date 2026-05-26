//
function script13954(): number {
    switch (varbitplayer_29660) {
        case 2: {
            return 1;
        }
        case 3: {
            return 2;
        }
        case 4: {
            if ((STAT_BASE(0) >= 70)) {
                return 3;
            };
            return 0;
        }
        case 5: {
            break;
        }
        default: {
            return 0;
        }
    };
    if ((STAT_BASE(0) >= 75)) {
        return 4;
    };
    if ((STAT_BASE(0) >= 70)) {
        return 3;
    };
    return 0;
}