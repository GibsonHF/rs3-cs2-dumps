//
function script2112(int0: number, int1: number): [number, number] {
    if ((int0 == -1 as quest)) {
        script12478("Null .quest.");
        return [-1, 0];
    };
    if ((QUEST_STATREQ_COUNT(int0) < int1)) {
        return [-1, 0];
    };
    QUEST_STATREQ_STAT(int0, (int1 - 1));
    stack(int0);
    stack((int1 - 1));
    return QUEST_STATREQ_LEVEL();
}