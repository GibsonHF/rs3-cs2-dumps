//
function script20419(int0: quest, int1: int): int {
    if ((quest_getparam(int0, 7159) != -1)) {
        return quest_getparam(int0, 7159);
    };
    if (((quest_getparam(int0, 7831) == 3) && (quest_getparam(int0, 1345) <= 321))) {
        return 7;
    };
    if (((quest_getparam(int0, 7834) >= 2022) && (quest_getparam(int0, 7831) != 2))) {
        return 8;
    };
    switch (int1) {
        case 0: {
            if (((((((QUEST_STATREQ_COUNT(int0) == 0) && (QUEST_QUESTREQ_COUNT(int0) == 0)) && (quest_getparam(int0, 7859) == 0)) && (QUEST_POINTSREQ(int0) == 0)) || (int0 == 356 as quest)) || (int0 == 359 as quest))) {
                return 1;
            };
            return 2;
        }
        case 1: {
            return 3;
        }
        case 2:
        case 5: {
            return 4;
        }
        case 3: {
            return 5;
        }
        case 4: {
            return 6;
        }
    };
    return 0;
}