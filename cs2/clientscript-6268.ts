//
function script6268(int0: quest, int1: unknown_int): int {
    if ((quest_getparam(int0, 7835) > 0)) {
        if ((int1 == 1)) {
            return ((((quest_getparam(int0, 7834) - 1999) * 1000) + quest_getparam(int0, 7835)) + 1);
        };
        return (quest_getparam(int0, 7835) + 1);
    };
    if ((int1 == 1)) {
        return ((((quest_getparam(int0, 7834) - 1999) * 1000) + quest_getparam(int0, 1345)) + 1);
    };
    return (quest_getparam(int0, 1345) + 1);
}