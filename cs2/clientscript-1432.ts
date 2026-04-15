//[proc,comlevel]
function script1432(): int {
    var int0 = (STAT_BASE(0 as stat) + STAT_BASE(2 as stat));
    var int1 = (STAT_BASE(4 as stat) * 2);
    var int2 = (STAT_BASE(6 as stat) * 2);
    var int3 = (STAT_BASE(28 as stat) * 2);
    var int4 = MAX(MAX(MAX(int0, int1), int2), int3);
    int4 = ((int4 * 13) / 10);
    var int5 = (((((int4 + STAT_BASE(1 as stat)) + STAT_BASE(3 as stat)) + (STAT_BASE(5 as stat) / 2)) + (STAT_BASE(23 as stat) / 2)) / 4);
    var int6 = (((((int4 + STAT_BASE(1 as stat)) + STAT_BASE(3 as stat)) + (STAT_BASE(5 as stat) / 2)) + 1) / 4);
    if ((MAP_MEMBERS() == 1)) {
        return int5;
    };
    return int6;
}