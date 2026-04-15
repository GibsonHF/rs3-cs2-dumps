//
function script2193(int0: quest): int {
    if ((int0 == -1 as quest)) {
        script12478("Quest .quest missing. Cannot determine quest_id.");
        return 0;
    };
    switch (int0) {
        case 92: {
            if ((varplayer_2615 > 6)) {
                return 2;
            };
            if (((varplayer_2615 == 0) && (varbitplayer_12894 == 0))) {
                return 0;
            };
            return 1;
        }
        case 140: {
            if ((varplayer_2339 >= 80)) {
                return 2;
            };
            return script2157(varbitplayer_10848, 65);
        }
        case 111: {
            if ((varplayer_2695 >= 4)) {
                return 2;
            };
            return script2157(varbitplayer_13366, 8);
        }
        case 275: {
            if ((TESTBIT(varplayer_2675, 20) == 1)) {
                return 2;
            };
            if ((TESTBIT(varplayer_2675, 1) == 0)) {
                return 0;
            };
            return 1;
        }
        case 131: {
            return script2157(varplayer_1295, 1000);
        }
        case 70: {
            if (((varplayer_2793 == 0) && (script259(625 as obj) > 0))) {
                return 1;
            };
            return script2157(varplayer_2793, 15);
        }
        case 270: {
            if ((varplayer_2426 == 10)) {
                return 2;
            };
            if ((TESTBIT(varplayer_2427, 11) == 0)) {
                return 0;
            };
            return 1;
        }
        case 324: {
            if ((varbitplayer_12349 >= 110)) {
                return 2;
            };
            return script2157(varbitplayer_12334, 35);
        }
    };
    if ((QUEST_FINISHED(int0) == true)) {
        return 2;
    };
    if ((QUEST_STARTED(int0) == 1)) {
        return 1;
    };
    return 0;
}