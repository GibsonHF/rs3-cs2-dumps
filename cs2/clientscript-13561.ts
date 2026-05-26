//
function script13561(): number {
    var int0 = 0;
    if ((STAT_BASE(26) < 20)) {
        int0 = 1620;
    } else if ((STAT_BASE(26) < 40)) {
        int0 = 2700;
    } else if ((STAT_BASE(26) < 60)) {
        int0 = 3510;
    } else if ((STAT_BASE(26) < 80)) {
        int0 = 4320;
    } else if ((STAT_BASE(26) < 100)) {
        int0 = 5400;
    } else {
        int0 = 6480;
    };
    return int0;
}