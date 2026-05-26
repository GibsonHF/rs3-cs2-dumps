//[proc,comlevel]
function script1432(): number {
    var int0 = (STAT_BASE(0) + STAT_BASE(2));
    var int1 = (STAT_BASE(4) * 2);
    var int2 = (STAT_BASE(6) * 2);
    var int3 = (STAT_BASE(28) * 2);
    var int4 = MAX(MAX(MAX(int0, int1), int2), int3);
    int4 = ((int4 * 13) / 10);
    var int5 = (((((int4 + STAT_BASE(1)) + STAT_BASE(3)) + (STAT_BASE(5) / 2)) + (STAT_BASE(23) / 2)) / 4);
    var int6 = (((((int4 + STAT_BASE(1)) + STAT_BASE(3)) + (STAT_BASE(5) / 2)) + 1) / 4);
    if ((MAP_MEMBERS() == 1)) {
        return int5;
    };
    return int6;
}