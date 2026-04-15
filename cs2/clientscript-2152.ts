//
function script2152(int0: quest): unknown_int {
    if ((int0 == -1 as quest)) {
        script12478("Null .quest.");
        return 0;
    };
    var int1 = QUEST_STATREQ_COUNT(int0);
    var int2 = -1 as stat;
    var int3 = 0;
    var int4 = 0;
    while ((int4 < int1)) {
        [int2, int3] = script2112(int0, (int4 + 1));
        if ((int2 == -1 as stat)) {
            return 1;
        };
        if ((STAT_BASE(int2) < int3)) {
            return 0;
        };
        int4 = (int4 + 1);
    };
    return 1;
}