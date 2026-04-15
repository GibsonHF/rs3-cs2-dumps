//
function script20131(int0: dbrow, int1: achievement): string {
    switch (ACHIEVEMENT_SUBCAT(int1)) {
        case 4747:
        case 4748: {
            return `Complete the quest: ${ACHIEVEMENT_GETNAME(int1)}.`;
        }
        case 4882:
        case 4883:
        case 4887:
        case 4884:
        case 4885:
        case 4886: {
            if ((ACHIEVEMENT_SPRITE(int1) == 10265 as graphic)) {
                return `Solve the Archaeology mystery: ${ACHIEVEMENT_GETNAME(int1)}.`;
            };
            break;
        }
    };
    if (((ACHIEVEMENT_CATEGORY(int1) == 4766 as category) && (dbrow_getfield(int0, 1368128, 0) == 6))) {
        return `Complete the task set: ${enum_getvalue(41, 36, 3482 as cs2enum, ACHIEVEMENT_SUBCAT(unk11032(int1, 0)))}.`;
    };
    return script15321(int1);
}