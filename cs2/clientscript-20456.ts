//
function script20456(int0: stat): int {
    if ((script20569(int0) == 0)) {
        return 0;
    };
    var int1 = script11151(int0);
    if ((int1 >= 50000000)) {
        return 0;
    };
    var int2 = (50000000 - int1);
    var int3 = STAT_BASE(int0);
    var int4 = MIN(((int2 / script20454(int3)) + 1), varplayer_12582);
    int4 = MIN(999, int4);
    return int4;
}