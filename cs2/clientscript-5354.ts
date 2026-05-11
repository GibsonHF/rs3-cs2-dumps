//
function script5354(): int {
    var int0 = 0;
    if ((STAT_BASE(24 as stat) >= 110)) {
        int0 = 12;
    } else if ((STAT_BASE(24 as stat) >= 80)) {
        int0 = 9;
    } else if ((STAT_BASE(24 as stat) >= 40)) {
        int0 = 6;
    } else if ((STAT_BASE(24 as stat) >= 10)) {
        int0 = 3;
    };
    return MIN(INV_SIZE(995 as inv), (3 + int0));
}