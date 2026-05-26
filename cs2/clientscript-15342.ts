//
function script15342(int0: number): number {
    if (((ACHIEVEMENT_IS_CHECKLIST(int0) == 1) || (ACHIEVEMENT_ACHIEVEMENT_REQ_COUNT(int0) > 0))) {
        return 1;
    };
    return 0;
}