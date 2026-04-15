//
function script2112(int0: quest, int1: int): [stat, int] {
    if ((int0 == -1 as quest)) {
        script12478("Null .quest.");
        return [-1 as stat, 0];
    };
    if ((QUEST_STATREQ_COUNT(int0) < int1)) {
        return [-1 as stat, 0];
    };
    QUEST_STATREQ_STAT(int0, (int1 - 1));
    stack(int0);
    stack((int1 - 1));
    return QUEST_STATREQ_LEVEL();
}