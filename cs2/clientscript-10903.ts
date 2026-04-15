//
function script10903(): int {
    if ((STAT_BASE(28 as stat) >= 106)) {
        return 4;
    };
    if ((STAT_BASE(28 as stat) >= 84)) {
        return 3;
    };
    if ((STAT_BASE(28 as stat) >= 52)) {
        return 2;
    };
    return 1;
}