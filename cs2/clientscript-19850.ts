//
function script19850(int0: achievement): int {
    var int1 = 0;
    switch (int0) {
        case 3625: {
            int1 = ACHIEVEMENT_ACHIEVEMENT_REQ_COUNT(int0);
            break;
        }
        case 3626:
        case 3627:
        case 3628:
        case 3629:
        case 3630: {
            int1 = (ACHIEVEMENT_ACHIEVEMENT_REQ_COUNT(int0) - 1);
            break;
        }
    };
    return (enum_getvalue(131, 0, 7209 as cs2enum, int0) * int1);
}