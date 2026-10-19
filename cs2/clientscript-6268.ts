//
function script6268(int0: number, int1: number): number {
    if ((int0 == 535)) {
        return 0;
    };
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