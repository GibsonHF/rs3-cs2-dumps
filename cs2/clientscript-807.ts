//
function script807(int0: stat): int {
    var int1 = 0;
    if ((STAT_BASE(int0) > 0)) {
        if ((int0 == 5 as stat)) {
            int1 = SCALE(script5256(), script5255(), 100);
        } else {
            int1 = ((100 * STAT(int0)) / STAT_BASE(int0));
        };
    };
    return int1;
}