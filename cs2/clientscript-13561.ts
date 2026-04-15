//
function script13561(): int {
    var int0 = 0;
    if ((STAT_BASE(26 as stat) < 20)) {
        int0 = 1620;
    } else if ((STAT_BASE(26 as stat) < 40)) {
        int0 = 2700;
    } else if ((STAT_BASE(26 as stat) < 60)) {
        int0 = 3510;
    } else if ((STAT_BASE(26 as stat) < 80)) {
        int0 = 4320;
    } else if ((STAT_BASE(26 as stat) < 100)) {
        int0 = 5400;
    } else {
        int0 = 6480;
    };
    return int0;
}