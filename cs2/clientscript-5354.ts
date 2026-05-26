//
function script5354(): number {
    var int0 = 0;
    if ((STAT_BASE(24) >= 110)) {
        int0 = 12;
    } else if ((STAT_BASE(24) >= 80)) {
        int0 = 9;
    } else if ((STAT_BASE(24) >= 40)) {
        int0 = 6;
    } else if ((STAT_BASE(24) >= 10)) {
        int0 = 3;
    };
    return MIN(INV_SIZE(995), (3 + int0));
}