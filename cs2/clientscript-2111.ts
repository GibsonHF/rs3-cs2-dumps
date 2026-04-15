//
function script2111(int0: quest, int1: int): int {
    if ((int0 == -1 as quest)) {
        script12478("Null .quest.");
        return -1;
    };
    if ((QUEST_QUESTREQ_COUNT(int0) < int1)) {
        return -1;
    };
    var int2 = QUEST_QUESTREQ(int0, (int1 - 1));
    if ((int2 == -1 as quest)) {
        return -1;
    };
    var int3 = 0;
    var string0 = script2103(int0);
    int3 = quest_getparam(int2, 1345);
    if ((int3 <= 0)) {
        script12478(`${string0}'s .quest is missing quest_id param.`);
        return -1;
    };
    return int3;
}